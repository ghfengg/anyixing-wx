// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phoneNumber: '',
    agreementChecked: false,
    isAgreed: false,
    showModal: false
  },

  onPhoneNumberInput: function (e) {
    this.setData({
      phoneNumber: e.detail.value
    });
  },

  onAgreementChange: function (e) {
    this.setData({
      agreementChecked: e.detail.value.includes('agree')
    });
  },
  login: function () {
    if (!this.data.isAgreed) {
      wx.showToast({
        title: '请同意服务协议&隐私政策',
        icon: 'none'
      });
      return;
    }

    // if (!this.data.phoneNumber) {
    //   wx.showToast({
    //     title: '请输入手机号',
    //     icon: 'none'
    //   });
    //   return;
    // }

    // 模拟登录成功
    wx.setStorageSync('loggedIn', true);

    // 跳转到主页面
    wx.switchTab({
      url: '/pages/home/home',
      fail:function(error){
        console.log('error',error);
      }
    });

  },
  checkboxChange:function(e){
    console.log('Checkbox changed:', e.detail.value); // 调试输出
    this.setData({
      isAgreed: e.detail.value.length > 0
    });
  },
  showModal() {
    this.setData({
      showModal: true
    });
  },
  hideModal() {
    this.setData({
      showModal: false
    });
  }
})