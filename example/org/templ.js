// example/org/templ.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    infoDict: {
      type: Object,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    openConfirm: function (e) {
      wx.showModal({
        title: '',
        confirmText: "拨打" ,
        success: function (res) {
          if (res.confirm) {
            wx.makePhoneCall({
              phoneNumber: e.currentTarget.dataset.pn 
            })
          } else {
            // console.log('用户点击辅助操作')
          }
        }
      });
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
    }
  },

})
