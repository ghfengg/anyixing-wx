const AiResponseQueue = require('../../utils/AiResponseQueue');

Page({
  data: {
    messages: [{
      content: "Hi！我是您的智能健康助手，有什么可以帮助您的吗？",
      isUser: false
    }],
    aiResponseMockData: null,
    userInput: ''
  },
  getAIResponse: function (userMessage) {
    const responses = [
      "这是一个很有趣的问题！让我想想...",
      "根据我的理解，这个问题的答案可能是...",
      "你提出了一个很好的观点。我的看法是...",
      "这个问题涉及了很多方面，我们可以从以下几点来分析...",
      "我明白你的疑惑。根据我的数据库，我可以告诉你...",
      "你的问题很有深度。让我们一起探讨一下...",
      "你最近哪里不舒服呢？如果需要，我可以帮你提供一些建议或信息"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  },

  handleSend: function () {
    const message = this.data.userInput.trim();
    if (message) {
      this.addMessage(message, true);
      this.setData({
        userInput: ''
      });
      setTimeout(() => {
        // 这里可以接个机器人
        let aiResponse = this.getAIResponse(message);
        if (message.indexOf('不舒服') !== -1) {
          aiResponse = "你最近哪里不舒服呢？如果需要，我可以帮你提供一些建议或信息";
        } else if (message.indexOf('头痛') !== -1 || message.indexOf('头疼') !== -1) {
          aiResponse = "头疼可能有多种原因引起，常见的包括:压力或紧张,睡眠不足等等，建议多注意休息";
        } else if (message.indexOf('你是谁') !== -1) {
          aiResponse = "我是一个人工智能";
        } else if (message.indexOf('你好') !== -1) {
          aiResponse = "你好!请问有什么可以帮到您的";
        } else if (message.indexOf('谢谢') !== -1) {
          aiResponse = "不客气！如果有任何需要，随时找我哦";
        } else {
          if (this.data.aiResponseMockData.isEmpty()) {
            aiResponse = "你可能患有糖尿病，已为您创建代办: 空腹血糖";
            setTimeout(() => {
              const newAdd = {
                id: 4,
                icon: '/static/images/examine.png',
                type: 'examine',
                title: '空腹血糖',
                description: '空腹血糖检查前需禁食8-12小时，避免饮酒、剧烈运动和服用影响血糖的药物，并保持正常作息，以确保结果准确',
                subtitle: '待审核',
                date: '2023/2/11',
                newAdd: true
              }
              wx.reLaunch({
                url: `/pages/home/home?newAdd=${JSON.stringify(newAdd)}`,
              });
            }, 3000);
          } else {
            aiResponse = this.data.aiResponseMockData.dequeue();
          }
        }
        this.typeMessage(aiResponse);
        // this.addMessage(aiResponse);
      }, 1000);
    }
  },
  clearHistory: function () {
    this.setData({
      messages: [{
        content: "Hi！我是您的智能健康助手，有什么可以帮助您的吗？",
        isUser: false
      }]
    })
  },
  typeMessage: function (content) {
    let index = 0;
    let currentMessage = '';
    const interval = setInterval(() => {
      if (index < content.length) {
        currentMessage += content[index];
        this.addMessage(currentMessage);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100); // 调整打字速度
  },
  addMessage: function (content, isUser = false) {
    const messages = this.data.messages;
    const trimmedContent = content.trim();
    console.log('Current messages:', messages);
    console.log('New content:', trimmedContent);

    if (messages.length > 0 && messages[messages.length - 1].isUser === isUser) {
      // 合并内容到最后一条消息
      messages[messages.length - 1].content = trimmedContent;
    } else {
      // 添加新消息
      const newMessage = {
        content: trimmedContent,
        isUser: isUser
      };
      messages.push(newMessage);
    }
    this.setData({
      messages: messages
    });
    this.scrollToBottom();
  },
  bindInput: function (e) {
    this.setData({
      userInput: e.detail.value
    });
  },

  handleFileUpload: function (e) {
    const that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        const tempFilePaths = res.tempFilePaths;
        // 上传图片到服务器
        // wx.uploadFile({
        //   url: 'https://your-server-url/upload', // 替换为你的服务器上传地址
        //   filePath: tempFilePaths[0],
        //   name: 'file',
        //   success: function(uploadRes) {
        //     const data = JSON.parse(uploadRes.data);
        //     if (data.success) {
        //       // 将图片URL添加到聊天消息列表
        //       const newMessage = {
        //         type: 'image',
        //         content: data.url // 服务器返回的图片URL
        //       };
        //       that.setData({
        //         chatMessages: [...that.data.chatMessages, newMessage]
        //       });
        //     }
        //   }
        // });
      }
    });
    // const file = e.detail.files[0];
    // if (file) {
    //   this.addMessage(`已上传文件: ${file.name}`, true);
    //   setTimeout(() => {
    //     this.addMessage("我已收到你上传的文件。让我分析一下内容...");
    //   }, 1000);
    // }
  },
  showWelcomeMessage: function () {
    wx.showToast({
      title: '欢迎使用AI助手！',
      icon: 'success',
      duration: 2000
    });
  },

  onLoad: function () {
    this.setData({
      aiResponseMockData: new AiResponseQueue()
    });
    // 初始化固定问答
    this.data.aiResponseMockData.enqueue('多久了？');
    this.data.aiResponseMockData.enqueue('有尿频、尿痛吗？');
    this.data.aiResponseMockData.enqueue('昼夜几次？');
    this.data.aiResponseMockData.enqueue('小便什么颜色？');
    this.data.aiResponseMockData.enqueue('是否做过尿化验？');
    this.data.aiResponseMockData.enqueue('是否做过血化验？');
    this.data.aiResponseMockData.enqueue('近来胃口怎样？');
    this.data.aiResponseMockData.enqueue('精神和体力怎样？');
    this.data.aiResponseMockData.enqueue('近来体重有否减轻?');
    this.data.aiResponseMockData.enqueue('有否皮肤干燥或癌痒?');
    this.data.aiResponseMockData.enqueue('亲人有否慢性病?');
    this.data.aiResponseMockData.enqueue('其他有否不适症状?');
    this.data.aiResponseMockData.enqueue('其他还有什么异常情况发生?');
    this.typeMessage(this.data.messages[0]);
  },

  scrollToBottom: function () {
    this.setData({
      scrollTop: 999999
    });
  }
});