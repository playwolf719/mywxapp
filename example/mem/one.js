// example/mem/one.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"",
    attrList: [{ key: "name", chi: "姓名" }, { key: "desc", chi: "介绍" },],
    infoDict:{},
    hasImg:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    wx.request({
      url: app.globalData.url_pre + '/ent/query',
      data: {
        q: options.name
      },
      success: function (res) {
        let rd = res.data.data;
        let hasImg = false
        if ("img_url" in rd){
          hasImg = true
        }
        that.setData({
          hasImg: hasImg,
          name: options.name,
          infoDict:rd
        })
      }
    })
  
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