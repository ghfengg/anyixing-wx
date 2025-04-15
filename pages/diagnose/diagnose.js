Page({
  data: {},
  onLoad: function () {},
  handleTap: function(event) {
    const disease = event.currentTarget.dataset.label;
    if (disease) {
      console.log('点击了:', disease);
      // 在这里添加你想要执行的操作
      wx.navigateTo({
        url: `/pages/diagnose/detail/detail?disease=${JSON.stringify(disease)}`
      });
    }
    
  }
});
