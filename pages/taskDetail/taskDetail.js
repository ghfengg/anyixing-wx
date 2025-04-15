var amapFile = require('../../libs/amap-wx.130.js');
Page({
  data: {
    markers: [{
      id: 1,
      latitude: 30.224426,
      longitude: 120.252337,
      title: '奥体印象城',
      iconPath: '', // 自定义标记点图标
      width: 50,
      height: 50
    }],
    latitude: '',
    longitude: '',
    textData: {}
  },
  onReady: function () {
    this.mapCtx = wx.createMapContext('myMap');
  },
  onLoad: function () {
    var that = this;
    var myAmapFun = new amapFile.AMapWX({
      key: 'b339934c3918911d21d3243f93a39323'
    });
    myAmapFun.getPoiAround({
      success: function (data) {
        that.setData({
          markers: data.markers,
          latitude: data.markers[0].latitude,
          longitude: data.markers[0].longitude
        });
      },
      fail: function (info) {
        wx.showModal({
          title: info.errMsg
        });
      }
    });
  }
});