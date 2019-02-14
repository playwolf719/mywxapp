Page({
  data: {
    list: [
      {
        id: 'intro',
        name: '商会问答',
        open: false,
        pages: ['button', 'list', 'input', 'slider', 'uploader'],
        img_url: 'images/icon_intro.png'
      },
      {
        id: 'intro',
        name: '相关机构列表',
        open: false,
        pages: ['button', 'list', 'input', 'slider', 'uploader'],
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
