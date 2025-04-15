// 详情页的 JS 文件
Page({
  data: {
    bodyPart: '',
    description: '',
    durationRange: ['1天', '2天', '3天', '4天以上'],
    durationIndex: 0,
    level: ['轻度', '中度', '重度'],
    levelIndex: 0,
    severity: '轻度',
    examineAttachmentList: [],
    hisAttachmentList: []
  },
  onLoad: function (options) {
    // 这里可以通过 options 获取传递过来的参数
    // const bodyPart = JSON.parse(options.bodyPart);
    // this.setData({
    //   bodyPart: bodyPart
    // });

  },
  formSubmit: function (e) {
    const {
      description,
      durationIndex,
      severity,
      attachment
    } = this.data;
    console.log('头痛记录:', {
      description: description,
      duration: this.data.durationRange[durationIndex],
      severity: severity,
      attachment: attachment ? attachment.name : '无附件'
    });
    wx.showToast({
      title: '已提交!',
      icon: 'success',
      duration: 2000,
      success: function () {
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
      }
    });
  },
  bindDescriptionInput: function (e) {
    this.setData({
      description: e.detail.value
    });
  },
  bindDurationChange: function (e) {
    this.setData({
      durationIndex: e.detail.value
    });
  },
  bindSeverityChange: function (e) {
    this.setData({
      severity: e.detail.value
    });
  },
  bindAttachmentChange: function (e) {
    const file = e.detail.files[0];
    this.setData({
      attachment: file,
      fileName: file ? file.name : '未选择文件'
    });
  },
  addExamineAttachment: function () {
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album'],
      success: (res) => {
        const tempFilePaths = res.tempFilePaths;
        this.setData({
          examineAttachmentList: this.data.examineAttachmentList.concat(tempFilePaths)
        });
      }
    });
  },
  removeExamineAttachment: function (e) {
    const index = e.currentTarget.dataset.index;
    const newList = this.data.examineAttachmentList;
    newList.splice(index, 1);
    this.setData({
      examineAttachmentList: newList
    });
  },
  addHisAttachment: function () {
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album'],
      success: (res) => {
        const tempFilePaths = res.tempFilePaths;
        this.setData({
          hisAttachmentList: this.data.hisAttachmentList.concat(tempFilePaths)
        });
      }
    });
  },
  removeHisAttachment: function (e) {
    const index = e.currentTarget.dataset.index;
    const newList = this.data.hisAttachmentList;
    newList.splice(index, 1);
    this.setData({
      hisAttachmentList: newList
    });
  }
});