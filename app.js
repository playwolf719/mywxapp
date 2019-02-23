App({
    onLaunch: function () {
      wx.getSystemInfo({
        success: e => {
          this.globalData.StatusBar = e.statusBarHeight;
          this.globalData.CustomBar = e.platform == 'android' ? e.statusBarHeight + 50 : e.statusBarHeight + 45;
        }
      })
    },
    onShow: function () {
        console.log('App Show')
    },
    onHide: function () {
        console.log('App Hide')
    },
    globalData: {
        hasLogin: false,
        url_pre:"https://shanghui24.com/mykgqa/backend",
        club_avatar:"https://upload-images.jianshu.io/upload_images/3000049-22b86fd9c1975e6c.gif?imageMogr2/auto-orient/strip"
    }
});