
const app = getApp()
Page({
  data: {
    list: [
      {
        id: 'chat',
        name: '问答',
        open: false,
        img_url: 'images/icon_intro.png'
      },
      {
        id: 'org_list',
        name: '列表1',
        open: false,
        img_url: 'images/icon_nav_form.png'
      },
      {
        id: 'mem_list',
        name: '列表2',
        open: false,
        img_url: 'images/icon_nav_form.png'
      }
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
