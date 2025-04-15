Page({

  data: {
    item: {},
    applyName: '',
    isDisabled: false,
  },

  onLoad: function (options) {
    const item = JSON.parse(options.item);
    this.setData({
      item: item
    });
    if (item.type == 'drug') {
      this.setData({
        applyName: '去开药'
      })
    } else {
      this.setData({
        applyName: '去预约'
      })
    }
  },
  alarm: function () {
    const that = this;
    wx.showToast({
      title: '设置成功!',
      icon: 'success',
      duration: 1000,
      success: function () {
        that.setData({
          alarmDisabled: true
        })
      }
    })
  },
  apply: function () {
    const that = this;
    wx.showToast({
      title: '提交医院绿色通道成功',
      icon: 'success',
      duration: 1500,
      success: function () {
        setTimeout(function () {
          that.setData({
            applyDisabled: true,
            applyName: '审核中'
          });
        }, 1000); // 延迟2秒执行
      }
    })
  }
})