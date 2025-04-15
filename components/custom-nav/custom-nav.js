Component({
  properties: {
    title: {
      type: String,
      value: '标题'
    },
    hideBackButton: {
      type: Boolean,
      value: false
    },
    showNavBtn: {
      type: Boolean,
      value: true
    }
  },
  data: {
    navBarHeight: 0,
    menuButtonInfo: {},
    redDotVisible: true
  },
  attached() {
    const systemInfo = wx.getSystemInfoSync();
    const menuButtonInfo = wx.getMenuButtonBoundingClientRect();
    this.setData({
      navBarHeight: systemInfo.statusBarHeight + 80,
      menuButtonInfo: menuButtonInfo
    });
    console.log('Properties:', this.properties);
  },
  methods: {
    navBack: function () {
      wx.navigateBack({
        delta: 1
      });
    },
    notice: function () {
      this.setData({
        redDotVisible: false
      });
      wx.navigateTo({
        url: '/pages/notice/notice',
      })
    },
    service: function () {
      wx.navigateTo({
        url: '/pages/service/service',
      })
    }
  }
});