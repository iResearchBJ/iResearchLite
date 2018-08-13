var util = require("../../utils/util.js");
var app = getApp();

Page({
  data: {
    
  },
  onShareAppMessage: function() {
    return {
      title: '艾瑞指数',
      path: '/pages/indexList/indexList'
    }
  },
  onLoad: function() { //加载数据渲染页面
    
  },
  switchTabIndex: function (e) {
    let that = this
    let id = e.currentTarget.dataset.id
    console.log(id)
    app.globalData.indexId = id
    wx.switchTab({
      url: `/pages/index/index`,
      success: function (e) {
        var page = getCurrentPages().pop();
        if (page == undefined || page == null) return;
        page.onLoad();
      }
    })
  },
  goToTop: function(e) { //回到顶部
    util.goTop(e);
  },
  onPageScroll: function(e) {
    var that = this;
    util.onPageScroll(e, that);
  },
  

});