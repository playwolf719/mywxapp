// pages/alphabetical/alphabetical.js
const app = getApp()
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    list: [{ "alphabet": "Top", "datas": [] }, { "alphabet": "C", "datas": ["察布查尔锡伯自治县白杨木业包装有限公司"] }, { "alphabet": "H", "datas": ["韩国可路莎服饰新疆分公司", "霍城县金浩达商贸有限公司", "霍城县利金玉米烘干厂", "霍城县清水河镇鑫旺商行", "霍尔果斯龙建强工程建设有限公司"] }, { "alphabet": "O", "datas": ["欧莱快餐、蛋糕连锁店"] }, { "alphabet": "S", "datas": ["施安律师事务所", "四川广安智丰工程有限责任公司"] }, { "alphabet": "W", "datas": ["乌鲁木齐东野职业装商行", "乌鲁木齐歌谷集团", "乌鲁木齐歌谷投资有限公司", "乌鲁木齐广泰恒源石油工程服务有限公司", "乌鲁木齐果乐美食品有限公司", "乌鲁木齐骏驰新途汽车服务有限公司", "乌鲁木齐巨人教育", "乌鲁木齐试金石进出口贸易公司", "乌鲁木齐市金竹叶商贸有限公司", "乌鲁木齐世纪鑫天鸿商贸有限公司总经理", "乌鲁木齐市盛丰恒林建材有限公司", "乌木齐吉星美和汽车服务有限公司"] }, { "alphabet": "X", "datas": ["新疆宝疆信息科技有限公司", "新疆大漠天成建筑工程有限公司", "新疆富邦恒久工程管理有限公司", "新疆国际招标中心(有限公司)", "新疆海港城餐饮有限公司", "新疆华丰财富金融信息服务有限公司", "新疆金财信息技术有限公司", "新疆金路源金属制造有限公司", "新疆巨丰恒达商贸有限公司", "新疆凯隆工贸有限公司", "新疆康源健康商贸有限公司", "新疆科海新型建材有限公司", "新疆盼盼玉器字画文化有限公司", "新疆鹏森教学设备制造有限公司", "新疆启翔房地产营销策划有限公司", "新疆润邦达宏业商贸有限公司", "新疆特轮双强建筑材料有限公司", "新疆天工岩土工程勘察有限公司", "新疆天予永业体育产业有限公司", "新疆喜丰收商贸有限公司", "新疆星河律师事务所", "新疆星网视易信息科技有限公司", "新疆新建联项目管理咨询有限公司", "新疆新洲亿源投资有限公司", "新疆西域民间艺术文化研究院漠钰轩珊瑚馆", "新疆雅达高新信息技术有限公司", "新疆艳阳天番茄制品有限责任公司", "新疆艺海蓝包装制品有限公司", "新疆伊犁华鑫丝路行广告传媒有限公司", "新疆御粥餐饮连锁公司", "新疆中港国际旅行社有限公司", "新疆中信富邦资产管理有限公司"] }, { "alphabet": "Y", "datas": ["伊犁安新房地产评估有限责任公司", "伊犁霍尔果斯夜宴国际娱乐会所", "伊犁强盛工程建设有限公司", "伊犁七星建设工程有限责任公司", "伊犁七星商贸有限责任公司", "伊宁边境经济合作区众金酒店", "伊宁市瑞丰印务广告有限公司"] }, { "alphabet": "Z", "datas": ["朝阳教有洪恩外语学校"] }],
    alpha: '',
    windowHeight: ''
  },
  onLoad(options) {
    try {
      //获取系统信息
      var res = wx.getSystemInfoSync()
      this.apHeight = 16;
      this.offsetTop = 80;
      this.setData({ windowHeight: res.windowHeight + 'px' })
    } catch (e) {

    }
  },
  handlerAlphaTap(e) {
    //因为返回的是一个对象,我们定义一个对象接收
    let { ap } = e.target.dataset;
    console.log("aa",ap)
    //{ap}是对象,ap就是对象中ap属性的值
    this.setData({ alpha: ap });
  },
  handlerMove(e) {
    let { list } = this.data;
    let moveY = e.touches[0].clientY;
    let rY = moveY - this.offsetTop;
    if (rY >= 0) {
      let index = Math.ceil((rY - this.apHeight) / this.apHeight);
      if (0 <= index < list.length) {
        let nonwAp = list[index];
        nonwAp && this.setData({ alpha: nonwAp.alphabet });
      }
    }
  },
  cellClick(e){
    wx.navigateTo({
      url: 'one?name=' + e.currentTarget.dataset.cont
    })
  },
  goToOrg: function (e) {
    wx.navigateTo({
      url: '../org/one?name=' + e.currentTarget.dataset.url
    })
  }
})