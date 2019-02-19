// example/mem/one.js
const app = getApp()
var sliderWidth = 96;


var QQMapWX = require('../../lib/qqmap-wx-jssdk1.0/qqmap-wx-jssdk.js');
// 实例化API核心类
var qqmapsdk = new QQMapWX({
  key: 'V7KBZ-4HK6X-CLT4Y-ZXQIV-SLP4E-VGFW7' // 必填
});

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"",
    attrList: [{ key: "name", chi: "姓名" }, { key: "desc", chi: "介绍" },],
    infoDict:{},
    hasImg:false,
    tabs: ["机构简介"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0
  },

  showMap(address) {
    var _this = this;
    //调用地址解析接口
    qqmapsdk.geocoder({
      //获取表单传入地址
      address: address, //地址参数，例：固定地址，address: '北京市海淀区彩和坊路海淀西大街74号'
      success: function (res) {//成功后的回调
        console.log(res);
        var res = res.result;
        var latitude = res.location.lat;
        var longitude = res.location.lng;
        //根据地址解析在地图上标记解析地址位置
        _this.setData({ // 获取返回结果，放到markers及poi中，并在地图展示
          markers: [{
            id: 0,
            title: res.title,
            latitude: latitude,
            longitude: longitude,
            iconPath: '../../resource/placeholder.png',//图标路径
            width: 20,
            height: 20,
            callout: { //可根据需求是否展示经纬度
              content: latitude + ',' + longitude,
              color: '#000',
              display: 'ALWAYS'
            }
          }],
          poi: { //根据自己data数据设置相应的地图中心坐标变量名称
            latitude: latitude,
            longitude: longitude
          }
        });
      },
      fail: function (error) {
        console.error(error);
      },
      complete: function (res) {
        console.log(res);
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    let that = this
    if (options.name =="新疆国际招标中心(有限公司)"){
      this.setData({
        tabs: ["机构简介", "相关业绩"],
      })
    }
    // 适配
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
    // load data
    wx.request({
      url: app.globalData.url_pre + '/ent/query',
      data: {
        q: options.name
      },
      success: function (res) {
        let rd = res.data.data;
        let hasImg = false
        // console.log(rd)
        that.showMap(rd.address)
        that.setData({
          hasImg: hasImg,
          name: options.name,
          infoDict:rd
        })
      }
    })
  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },
  open: function (e) {
    // console.log(e.currentTarget.dataset)
    let pnList = String(e.currentTarget.dataset.pn).split(/[\s,，、]+/)
    let fList = []
    for (var i = 0; i < pnList.length; i++) {
      if (pnList[i]){
        fList.push(pnList[i])
      }
    }
    wx.showActionSheet({
      itemList: fList,
      success: function (res) {
        if (!res.cancel) {
          wx.makePhoneCall({
            phoneNumber: fList[res.tapIndex]
          })
        }
      }
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})