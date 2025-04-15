Page({
  /**
   * 页面的初始数据
   */
  data: {
    questions: [
      { text: '如何上传我的健康数据?' },
      { text: '平台的诊断结果是否能代替医生的诊断?' },
      { text: '如何查看我的健康报告？' },
      { text: '我可以通过平台开处方或预约检查吗？' },
      { text: '平台如何根据我的健康数据做出诊断建议？' }
    ]
  },
  submitQuestion:function(){

    wx.showToast({
      title: '提交成功',
      icon: 'success',
      duration: 2000
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})