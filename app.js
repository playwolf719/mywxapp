App({
    onLaunch: function () {
        console.log('App Launch')
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