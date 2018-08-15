var util = require("../../utils/util.js");
var app = getApp();

Page({
  data: {
    list:[
      {
        id:'app',
        nameZh:'移动APP指数',
        nameEn:'Mobile App Index',
        ico:'/images/index/1.png',
        isHidden: false
      },
      {
        id: 'pc',
        nameZh: 'PC Web指数',
        nameEn: 'PC Web Index',
        ico: '/images/index/2.png',
        isHidden: false
      },
      {
        id: 'video',
        nameZh: '网络影视指数',
        nameEn: 'Online Video Index',
        ico: '/images/index/3.png',
        isHidden: false
      },
      {
        id: 'ad',
        nameZh: '网络广告指数',
        nameEn: 'Online Advertising Index',
        ico: '/images/index/4.png',
        isHidden: false
      },
      {
        id: 'device',
        nameZh: '移动设备指数',
        nameEn: 'Mobile Device Index',
        ico: '/images/index/5.png',
        isHidden: false
      },
      {
        id: 'channel',
        nameZh: '移动渠道指数',
        nameEn: 'Mobile Store Index',
        ico: '/images/index/6.png',
        isHidden: false
      },
      {
        id: 'overseas',
        nameZh: '海外APP指数',
        nameEn: 'Overseas Mobile App Index',
        ico: '/images/index/7.png',
        isHidden: true
      },
      {
        id: 'wxdata',
        nameZh: '新媒体指数',
        nameEn: 'New Media Index',
        ico: '/images/index/8.png',
        isHidden: false
      }
    ]
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