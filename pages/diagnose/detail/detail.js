// 详情页的 JS 文件
Page({
  data: {
    diseases: [{
      name: "糖尿病",
      date: "2024-09-26 10:00:00",
      description: "2型糖尿病"
    }, {
      name: "高血压",
      date: "2024-09-26 10:00:00",
      description: "二级高血压(中度):收缩压 ≥ 140 mmHg 或舒张压 ≥ 90 mmHg"
    }],
    loading: true
  },
  onLoad: function (options) {
    wx.showLoading({
      title: '诊断中..',
    });

    // 模拟加载过程
    setTimeout(() => {
      wx.hideLoading();
      this.setData({
        loading: false // 加载完成后隐藏遮罩层
      });
    }, 3000); // 2秒后隐藏加载动画
  },
  navigateToDetail: function () {
    wx.showToast({
      title: '跳到详情页',
      icon: 'success',
      duration: 2000
    });
  }
});