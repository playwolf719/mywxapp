const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}


const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function addMsg(that, type, msg, avatar, sugList=[], relTitle="常见问题（点击发问）",sh=1000){
  let info = {
    "type": type,
    "msg": msg,
    "avatar": avatar,
    "sugList": sugList,
    "relTitle": relTitle
  }
  let newMsg = that.data.msgList;
  newMsg.push(info)
  if (sh == 100) {
    that.setData({
      msgList: newMsg,
      scrollTop: that.data.scrollTop + sh,
      autowordList: []
    })
  } else {
    that.setData({
      inputValue: '',
      msgList: newMsg,
      scrollTop: that.data.scrollTop + sh,
      autowordList: []
    })

  }
}

module.exports = {
  formatTime: formatTime,
  addMsg:addMsg
}