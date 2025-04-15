Page({
  data: {
    devices: [{
        id: 1,
        name: '智能灯泡'
      },
      {
        id: 2,
        name: '智能插座'
      },
      {
        id: 3,
        name: '智能门锁'
      }
    ],
    orders: [{
        id: 1,
        type: '康复中心预约',
        description: '颈椎康复理疗',
        date: '2023-06-15'
      },
      {
        id: 2,
        type: '门店药品',
        description: '感冒药、退烧药',
        date: '2023-06-10'
      },
      {
        id: 3,
        type: '康复中心预约',
        description: '腰椎康复治疗',
        date: '2023-06-20'
      }
    ],
    userInfo: {
      nickName:"安医行",
      id:"outman",
      avatarUrl:"/static/images/user.png"
    },
    hasUserInfo: false,
    canIUseGetUserProfile: false,
  },
  onLoad: function () {
    wx.login({
      success: res => {
        if (res.code) {
          // 发送 res.code 到后台换取 openId, sessionKey, unionId
          console.log('登录成功，res:', res);
        } else {
          console.log('登录失败！' + res.errMsg);
        }
      }
    });
    this.getDeviceList();
    this.getOrderList();
  },
  getUserProfile(e) {
    console.log('获取用户信息');
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
    // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res);
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      },
      fail: (err) => {
        console.error(err);
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  getDeviceList: function () {
    // 这里应该是调用你的后端API来获取设备列表
    // 暂时使用模拟数据
    console.log('获取设备列表');
    this.setData({
      devices: this.data.devices
    });
  },
  getOrderList: function () {
    // 这里应该是调用你的后端API来获取订单列表
    // 暂时使用模拟数据
    console.log('获取订单列表');
    this.setData({
      orders: this.data.orders
    });
  },
  removeDevice: function (event) {
    const deviceId = event.currentTarget.dataset.id;
    this.setData({
      devices: this.data.devices.filter(device => device.id !== deviceId)
    });
    // 这里应该调用后端 API 来同步移除设备的操作
    console.log(`设备 ${deviceId} 已移除`);
  },
  viewOrder: function (event) {
    const orderId = event.currentTarget.dataset.id;
    // 这里应该跳转到订单详情页面
    console.log(`查看订单 ${orderId} 详情`);
    // 例如：wx.navigateTo({ url: `/pages/order-detail/order-detail?id=${orderId}` });
    wx.showToast({
      title: '跳到详情页',
      icon: 'success',
      duration: 2000
    });
  },
  logout: function () {
    wx.setStorageSync('loggedIn', false);
    wx.redirectTo({
      url: '/pages/login/login',
    });
  },
  addDevice: function () {
    // 在这里添加跳转到添加设备页面的逻辑
    console.log('跳转到添加设备页面');
    // 例如：wx.navigateTo({ url: '/pages/add-device/add-device' });
    const newDevice = {
      id: Date.now(),
      name: '智能穿戴设备'
    };
    this.setData({
      devices: [...this.data.devices, newDevice]
    });
  }
});