// list.js
Page({
  data: {
    items: [{
        id: 1,
        icon: '/static/images/drug.png',
        type: 'drug',
        title: '拜糖平片',
        description:'主要用于治疗2型糖尿病，特别适合超重或肥胖的患者。该药物通过降低肝脏的葡萄糖生成和增强周围组织对胰岛素的敏感性来发挥作用',
        subtitle: '待审核',
        date: '2023/2/11',
        newAdd:false
      },{
        id: 2,
        icon: '/static/images/examine.png',
        type: 'examine',
        title: '血常规',
        description:'在进行血常规检查前，通常建议禁食8小时，并避免剧烈运动。检查当天穿着方便，保持放松心情。如在使用药物，务必告知医生。抽血后要多喝水，观察穿刺部位是否异常。如果有特殊病史，最好提前咨询医生',
        subtitle: '已预约',
        date: '2023/2/13',
        newAdd:false
      },
      {
        id: 3,
        icon: '/static/images/physiotherapy.png',
        type: 'physiotherapy',
        title: '牵引',
        description:'做物理牵引时，应确保根据专业医生的指导进行，保持舒适姿势，避免过度拉伸，并注意牵引部位的反应',
        subtitle: '已预约',
        date: '2023/1/30',
        newAdd:false
      }
    ],
    drawerVisible: false
  },
  onLoad: function (options) {
    const newAdd = JSON.parse(options.newAdd);
    let newItems = this.data.items;
    newItems.unshift(newAdd);
    this.setData({
      items: newItems
    })
  },
  todoDetail: function (event) {
    const item = event.currentTarget.dataset.label;
    wx.navigateTo({
      url: `/pages/home/todoDetail/todoDetail?item=${JSON.stringify(item)}`
    })
  },
  addEntry: function () {
    console.log('goto!')
    wx.navigateTo({
      url: '/pages/home/healthEntry/healthEntry'
    });
  },
  showDrawer() {
    this.setData({
      drawerVisible: true
    });
  },
  closeDrawer() {
    this.setData({
      drawerVisible: false
    });
  },
  submitQuestion() {
    // 处理提交问题的逻辑
    console.log("问题已提交");
    this.closeDrawer();
  }
});