Page({
  data: {
    // 这里可以添加数据绑定
  },
  onLoad: function () {
    // 页面加载时的逻辑
  },
  viewDetail: function (event) {
    console.log(111);
    wx.navigateTo({
      url: '/pages/taskDetail/taskDetail'
    });
  }
});
