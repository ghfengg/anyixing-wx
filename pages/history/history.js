Page({
  data: {
    consultations: [
      {
        id: 1,
        date: '2023-05-15',
        question: '最近总是感到头晕乏力,该做些什么检查?',
        status: '已完结'
      },
      {
        id: 2,
        date: '2023-05-10',
        question: '孩子发烧38度,有什么应急措施吗?',
        status: '已完结'
      },
      {
        id: 3,
        date: '2023-05-05',
        question: '长期失眠应该如何调理?',
        status: '智能诊断中'
      },
      {
        id: 4,
        date: '2023-04-28',
        question: '高血压患者的日常饮食应该注意什么?',
        status: '智能诊断中'
      }
    ]
  },
  viewTask: function() {
    wx.navigateTo({
      url: '/pages/taskDetail/taskDetail'
    });
    // wx.switchTab({
    //   // TODO:跳转到某个代办的详情
    //   url: '/pages/task/task',
    //   success: function(res) {
    //     console.log('Navigation success:', res);
    //   },
    //   fail: function(err) {
    //     console.error('Navigation failed:', err);
    //   }
    // });
  }
});
