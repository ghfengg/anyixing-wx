// 详情页的 JS 文件
Page({
  data: {
    
  },
  onLoad: function (options) {
    
  
  },
  formSubmit: function(e) {
    const { description, durationIndex, severity, attachment } = this.data;
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
    });
  },
  bindDescriptionInput: function(e) {
    this.setData({
      description: e.detail.value
    });
  },
  bindDurationChange: function(e) {
    this.setData({
      durationIndex: e.detail.value
    });
  },
  bindSeverityChange: function(e) {
    this.setData({
      severity: e.detail.value
    });
  },
  bindAttachmentChange: function(e) {
    const file = e.detail.files[0];
    this.setData({
      attachment: file,
      fileName: file ? file.name : '未选择文件'
    });
  }
});