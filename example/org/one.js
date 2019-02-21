// example/mem/one.js
const app = getApp()
var sliderWidth = 96;


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
    sliderLeft: 0,
    workList:[]
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
        that.setData({
          hasImg: hasImg,
          name: options.name,
          infoDict:rd
        })
      }
    })
  },
  tabClick: function (e) {
    var that = this
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
    if(e.currentTarget.id == 1){
      wx.request({
        url: app.globalData.url_pre + '/ent/work',
        data: {
        },
        success: function (res) {
          let rd = res.data.data;
          console.log(rd)
          that.setData({
            workList: rd.work_list
          })
        }
      })
    }
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