
const app = getApp()
Page({
  data: {
    elements: [
      {
        title: '简易问答',
        name: 'QA',
        color: 'cyan',
        icon: 'messagefill',
        url: "chat/chat"
      },
      {
        title: '成员列表',
        name: 'member',
        color: 'mauve',
        icon: 'myfill',
        url:"mem/mem"
      },
      {
        title: '机构列表',
        name: 'organization',
        color: 'green',
        icon: 'copy',
        url: "org/org"
      },
      {
        title: '意见反馈 ',
        name: 'feedback',
        color: 'red',
        icon: 'roundcheck',
        url: "feed/feed"
      },
    ]
  },
  
  onLoad: function (options) {
    if (app.globalData.userInfo) {
    }else{
      wx.navigateTo({
        url: 'auth'
      })
    }
  }
}
);
