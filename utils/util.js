function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

//回到顶部
function goTop(e) { // 一键回到顶部
  if (wx.pageScrollTo) {
    wx.pageScrollTo({
      scrollTop: 0
    })
  } else {
    wx.showModal({
      title: '提示',
      content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
    })
  }
}

function onPageScroll(e,that){
  if (e.scrollTop > 100) {
    that.setData({
      floorstatus: true
    });
  } else {
    that.setData({
      floorstatus: false
    });
  }
}
function myencodeURIComponent(url)
{
  return url;
}
module.exports = {
  formatTime: formatTime,
  goTop: goTop,
  onPageScroll: onPageScroll
}