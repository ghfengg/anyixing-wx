Component({
  properties: {
    show: {
      type: Boolean,
      value: false
    }
  },
  data: {},
  methods: {
    closeDrawer() {
      this.triggerEvent('closeDrawer');
    },
    manualRegist:function(){
      this.triggerEvent('closeDrawer');
      wx.navigateTo({
        url: '/pages/home/manualRegist/manualRegist'
      });
    },
    iotRegist:function(){
      this.triggerEvent('closeDrawer');
      wx.navigateTo({
        url: '/pages/home/iotRegist/iotRegist'
      });
    }
  }
});
