var util = require("../../utils/util.js");

Page({
  data: {
    nlist: {
      list: [],
      keyword:'',
      scrolltype:false,
      url: "../news/news",
      pid: 1
    }, //报告列表
    scrolltop: null, //滚动位置
    page: 0, //分页
    lastid: '0',
    pagesize: 15,
    rootid: '13',
    loadName: "努力加载中。。。",
    isHiddenLoading:true
  },
  onShareAppMessage: function() {
    return {
      title: '研究观点',
      path: '/pages/research/research'
    }
  },
  onLoad: function() { //加载数据渲染页面
    wx.showNavigationBarLoading(); //显示页面加载中状态
    this.fetchConferenceData();
  },
  bindSearch:function()
  {
    var key=this.data.keyword;
    if (!key) {
      return;
    }
    else {
      wx.navigateTo({
        url: '../wxsearch/wxsearch?keyWord=' + key + ''
      })
    }
  },
  researchserch: function (e) {
    this.setData({
      keyword: e.detail.value,
    });
  },
  fetchConferenceData: function() { //获取列表
    var _this = this; //获取报告列表
    const page = this.data.pagesize;
    const newlist = [];
    wx.request({
      url: 'https://api.iresearch.cn/api/research/list',
      data: {
        rootid: this.data.rootid,
        lastid: this.data.lastid,
        pagesize: this.data.pagesize
      },
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        "Content-Type": "application/json"
      }, // 设置请求的 header
      success: function(res) {
        if (res.data.length > 0) {
          
          _this.setData({
            'nlist.list': _this.data.nlist.list.concat(res.data),
            lastid: res.data[res.data.length - 1].Id
          })
        } else {
          _this.setData({
            loadName: "没有了"
          })
        }
       
        //this.data.reportlist=res.data;

      },
      fail: function() {
        // fail
      },
      complete: function() {
        wx.hideNavigationBarLoading();
      }
    })

    //模拟加载完毕
  },
  // sumit: function(e) {
  //   var key = e.detail.value;
  //   console.log(key);
  //   if (!key) {
  //     return;
  //   }
  //   wx.navigateTo({
  //     url: '../logs/logs?type=2&key=' + key + ''
  //   })
  // },
  goToTop: function(e) { //回到顶部
    util.goTop(e);
  },
  onPageScroll: function(e) {
    var that = this;
    util.onPageScroll(e, that);
  },
  onReachBottom: function() {
    var _this = this;
    _this.setData({
      pagesize: 5
    })
    _this.fetchConferenceData();

  },
  bindfocus: function(){
    this.setData({
      isSearchFocus:true
    })
  },
  bindblur: function(){
    this.setData({
      isSearchFocus: false
    })
  },


  onPullDownRefresh: function() { //下拉刷新

  }

});