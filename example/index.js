
const app = getApp()
Page({
  data: {
    list: [
      {
        id: 'chat',
        name: '智能问答',
        open: false,
        img_url: 'images/icon_nav_search.png'
      },
      {
        id: 'mem',
        name: '成员列表',
        open: false,
        img_url: 'images/icon_nav_form.png'
      },
      {
        id: 'org',
        name: '机构列表',
        open: false,
        img_url: 'images/icon_nav_form.png'
      },
      {
        id: 'help',
        name: '问题反馈',
        open: false,
        img_url: 'images/icon_nav_form.png'
      },
    ]
  },
  kindToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list: list
    });
  }
});
