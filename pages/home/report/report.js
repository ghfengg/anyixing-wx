Page({
  data:{
    reportType:'',
    attachmentList: []
  },
  onLoad: function (options) {
    const reportType = JSON.parse(options.reportType);
    this.setData({
      reportType: reportType
    });
  },
  formSubmit: function(e) {
    wx.showToast({
      title: '已提交健康智脑诊断!',
      icon: 'success',
      duration: 2000,
    });
  },
  addAttachment: function() {
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album'],
      success: (res) => {
        const tempFilePaths = res.tempFilePaths;
        this.setData({
          attachmentList: this.data.attachmentList.concat(tempFilePaths)
        });
      }
    });
  },
  removeAttachment:function(e){
    const index = e.currentTarget.dataset.index;
    const newList = this.data.attachmentList;
    newList.splice(index, 1);
    this.setData({
      attachmentList: newList
    });
  }

})