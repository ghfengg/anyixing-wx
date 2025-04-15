// app.js
App({
  onLaunch() {
    console.log('重新lanuch');
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    const loggedIn = wx.getStorageSync('loggedIn') || false;

    if (!loggedIn) {
      // 如果未登录，跳转到登录页面
      wx.redirectTo({
        url: '/pages/login/login'
      });
    }

    // 登录
    wx.login({
      success: res => {}
    })

  },
  globalData: {
    userInfo: {}
  }
})