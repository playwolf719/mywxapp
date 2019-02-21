// example/org/map.js


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
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.showMap(options.addr)
  },

  showMap(address) {
    var _this = this;
    //调用地址解析接口
    qqmapsdk.geocoder({
      //获取表单传入地址
      address: address, //地址参数，例：固定地址，address: '北京市海淀区彩和坊路海淀西大街74号'
      success: function (res) {//成功后的回调
        console.log(res);
        //根据地址解析在地图上标记解析地址位置
        if (res.status == 0){
          var res = res.result;
          var latitude = res.location.lat;
          var longitude = res.location.lng;
          console.log("ddd1")
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
                content: address,
                color: '#000',
                display: 'ALWAYS'
              }
            }],
            poi: { //根据自己data数据设置相应的地图中心坐标变量名称
              latitude: latitude,
              longitude: longitude
            }
          });
        }
      },
      fail: function (error) {
        console.error(error);
        wx.showModal({
          content: '腾讯地图未找到该地址',
          showCancel: false,
          success: function (res) {
            if (res.confirm) {
              wx.navigateBack()
            }
          }
        });
      },
      complete: function (res) {
        console.log(res);
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