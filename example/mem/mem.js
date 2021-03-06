// pages/alphabetical/alphabetical.js
Page({
  data: {
    list: [{ "alphabet": "Top", "datas": [] }, { "alphabet": "C", "datas": ["程志鸿（新疆润邦达宏业商贸有限公司总经理）", "陈思润（新疆中港国际旅行社有限公司总经理）", "陈志华（乌鲁木齐果乐美食品有限公司总经理）"] }, { "alphabet": "D", "datas": ["戴晓丽（新疆科海新型建材有限公司总经理）", "邓军（新疆国际招标中心(有限公司)总经理）", "丁辉（新疆伊犁华鑫丝路行广告传媒有限公司总经理）", "杜强（伊犁霍尔果斯夜宴国际娱乐会所董事长）"] }, { "alphabet": "F", "datas": ["方金文（乌鲁木齐金竹叶商贸有限公司总经理）", "范犁宁（新疆特轮双强建筑材料有限公司总经理）", "付雷雷（玖道文化传媒有限公司法人）"] }, { "alphabet": "G", "datas": ["高洪全（乌鲁木齐世纪鑫天鸿商贸有限公司总经理）", "郭志坚（新疆金财信息技术有限公司总经理）"] }, { "alphabet": "H", "datas": ["何志伟（乌鲁木齐巨人教育中小幼课外培训机构董事长）", "黄福利（霍城县利金王米烘干厂法人）"] }, { "alphabet": "J", "datas": ["居韩朋（新疆鹏森科技股份有限公司董事长）"] }, { "alphabet": "L", "datas": ["兰世珍（新疆盼盼玉器字画文化有限公司总经理）", "蓝双喜（新疆海港城各饮有限公司总经理）", "梁严超（乌鲁木齐骏驰新途汽车服务有限公司总经理）", "李德忠（新疆大漠天成建筑工程有限公司董事长）", "李丰（华丰财富金融信息服务有限公司法人CEO）", "李洪凯（新疆富邦恒久工程管理有限公司总经理）", "李鸿澜（乌鲁木齐市盛丰恒林建材有限公司总经理）", "李世新（新疆艳阳天番茄制品有限责任公司董事长）", "刘江（欧莱快餐、蛋糕连锁店总经理）", "刘继东（霍城县金浩达商贸有限公司法人）", "刘强（霍尔果斯龙建强工程建设有限公司总经理）", "刘涛（霍城县清水河镇鑫旺商行法人总经理）", "刘亚华（新疆康源健康商贸有限公司总经理）", "刘勇（乌鲁木齐歌谷集团董事长）", "李小梅（新疆金路源金属制品制造有限公司总经理）", "李晓强（新疆宝疆信息科技有限公司董事长兼法人）", "李依晔（乌鲁木齐广泰恒源石油工程服务有限公司总经理）"] }, { "alphabet": "M", "datas": ["马彬耀（新疆启翔房地产营销策划有限公司总经理）", "马宁（韩国可路莎服饰新疆分公司总经理）", "毛小平（新疆洲亿源投资有限公司法人、总经理）", "毛智跃（乌木齐吉星美和汽车服务有限公司总经理）"] }, { "alphabet": "P", "datas": ["彭冲（新疆星网视易信息科技有限公司销售总监）", "彭志华（乌鲁木齐试金石进出口贸易公司总经理）"] }, { "alphabet": "Q", "datas": ["齐春香（新疆伊宁市瑞丰彩印广告有限公司董事长）"] }, { "alphabet": "S", "datas": ["苏卫东（乌鲁木齐东野职业装商行总经理）"] }, { "alphabet": "T", "datas": ["田青（新疆天予永业体育产业有限公司总经理）", "田晓钰（北京裕丰双业国际文化传播有限公司董事长）"] }, { "alphabet": "W", "datas": ["王凯枫（新疆凯隆工贸有限公司董事长兼公司党支部书记）"] }, { "alphabet": "X", "datas": ["鲜淑群（新疆艺海蓝包装制品有限公司总经理）", "谢嘉泽（新疆御粥各饮连锁公司董事长）", "谢意疆（伊犁七星建设工程有限责任公司总经理）", "徐晓强（新疆喜丰收商贸有限公司总经理）"] }, { "alphabet": "Y", "datas": ["袁琳（新疆天工乐弄岩土工程勘察有限公司财务总监）", "岳敏（朝阳教育洪恩外语学校校长）", "于军（新疆中信富邦资产管理有限公司董事长）"] }, { "alphabet": "Z", "datas": ["张晋华（察布查尔锡伯自治县白杨木业包装有限责任公司总经理）", "张龙（新疆雅达高新信息技术有限公司总经理）", "张楠（新疆新建联项目管理咨询有限公司分公司总经理）", "张瑞波（伊犁七星商贸有限责任公司总经理）", "张沩（新疆星河律师事务所律师）", "张宇兵（新疆巨丰恒达商贸有限公司）", "赵伟（新疆施安律师事务所主任）", "赵文平（四川广安智丰工程有限责任公司总经理）", "赵小新（伊犁安新房地产评估有限责任公司董事长兼法人）", "周剑（伊宁边境经济合作区众金酒店董事长）"] }],
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
  }
})