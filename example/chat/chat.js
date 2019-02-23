// example/chat/chat.js

const util = require('util.js')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    msgList:[
    ],
    autowordList: [],
    inputValue: '',
    scrollTop: 100
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 设置状态栏标题
    // wx.setNavigationBarTitle({
    //   title: "智能问答",
    //   success: function (res) { }
    // })
    let that = this;
    wx.request({
url:app.globalData.url_pre+'/often_question',
      success: function (res) {
        let rd = res.data.data;
        util.addMsg(that, "club", rd.answer, app.globalData.club_avatar, rd.question_list, "常见问题（点击发问）",100)
      }
    })
  },
  theClick:function(e){
    let sug = e.currentTarget.dataset.sug;
    let that = this;
    let userInfo = app.globalData.userInfo
    util.addMsg(that, "self", sug, userInfo.avatarUrl, [])
    wx.request({
      url: app.globalData.url_pre+'/query',
      data: {
        q: sug
      },
      success: function (res) {
        let rd = res.data.data;
        util.addMsg(that, "club", rd.answer, app.globalData.club_avatar, [])
      }
    })
  },
  autowordClick:function(e){
    let key = e.currentTarget.dataset.key;
    let that = this;
    let userInfo = app.globalData.userInfo
    util.addMsg(that, "self", key, userInfo.avatarUrl)
    wx.request({
      url: app.globalData.url_pre + '/query',
      data: {
        q: key
      },
      success: function (res) {
        let rd = res.data.data;
        util.addMsg(that, "club", rd.answer, app.globalData.club_avatar, [])
      }
    })
  },
  msgContent: function (e) {
    let that = this;
    let tval = e.detail.value;
    this.setData({
      inputValue: tval
    })
    if (tval){
      wx.request({
        url: app.globalData.url_pre + '/tip',
        data: {
          q: e.detail.value
        },
        success: function (res) {
          that.setData({
            autowordList: res.data.data.tip_list.reverse()
          })
        }
      })                        
    } else {
      that.setData({
        autowordList: []
      })
    }
  },
  sendMsg:function(){
    if (this.data.inputValue.length > 0) {
      const inputValue = this.data.inputValue;
      let that = this;
      let userInfo = app.globalData.userInfo
      util.addMsg(that, "self", inputValue, userInfo.avatarUrl)
      wx.request({
        url: app.globalData.url_pre + '/query',
        data: {
          q: inputValue
        },
        success: function (res) {
          let rd = res.data.data;
          util.addMsg(that, "club", rd.answer, app.globalData.club_avatar, rd.tip_list,"猜你想查")
        }
      })
    }
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