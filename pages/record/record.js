Page({
  data: {
    healthData: [
      {
        id: 1,
        groupName: '血常规',
        indicators: [
          { id: 1, name: '红细胞计数', value: '4.5 × 10^12/L' },
          { id: 2, name: '白细胞计数', value: '11.5 × 10^9/L', abnormal: true }
        ]
      },
      {
        id: 2,
        groupName: '心血管',
        indicators: [
          { id: 3, name: '脉搏', value: '72 次/分' },
          { id: 4, name: '血压', value: '145/95 mmHg', abnormal: true }
        ]
      },
      {
        id: 3,
        groupName: '生化指标',
        indicators: [
          { id: 5, name: '血糖', value: '6.2nmol/L' },
          { id: 6, name: '胆固醇', value: '5.1nmol/L', abnormal: true }
        ]
      }
    ],
    showDrawer: false,
    addIndicators: [
      { name: '脉搏', value: 'RBC', checked: false },
      { name: '血压', value: 'WBC', checked: false }
    ]
  },
  showAll() {
    // 显示全部指标
  },
  showAbnormal() {
    // 只显示异常指标
  },
  uploadReport: function() {
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album'],
      success: (res) => {
        const tempFilePaths = res.tempFilePaths;
        this.setData({
          imageList: this.data.imageList.concat(tempFilePaths)
        });
      }
    });
  },
  diagnose:function(){
    wx.navigateTo({
      url: '/pages/diagnose/detail/detail'
    });
  },
  showAddIndicator() {
    this.setData({
      showDrawer: true
    });
  },
  hideAddIndicator() {
    this.setData({
      showDrawer: false
    });
  },
  editIndicator() {
    // 编辑健康指标
  },
  showTrend() {
    wx.navigateTo({
      url: '/pages/trend/trend'
    });
  }
});
