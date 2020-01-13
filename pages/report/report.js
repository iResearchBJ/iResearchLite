var util = require("../../utils/util.js");

Page({
  data: {
    nlist:{
      list:[],
      url:"../pdf/pdf",
      pid:0
    }, //报告列表
    scrolltop:null, //滚动位置
    page: 0, //分页
    pagesize:15,
    width:0,
    height:0,
    loadName:"努力加载中。。。",
    rootid:'8',
    lastid:'0',
    key:''
  },
  onShareAppMessage: function () {
    return {
      title: '艾瑞报告',
      path: '/pages/report/report'
    }
  },
  onLoad: function () { //加载数据渲染页面
  var _this=this;
    wx.showNavigationBarLoading();//显示页面加载中状态
    this.fetchConferenceData();
    
  },

  fetchConferenceData:function(){
    var _this = this;  //获取报告列表
    const page = this.data.pagesize;
    const newlist = [];
    wx.request({
      url: 'https://api.iresearch.cn/api/research/list',
      data:{
        rootid:this.data.rootid,
        lastid:this.data.lastid,
        pagesize:this.data.pagesize
        },
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
       header: {
         "Content-Type":"application/json"
       }, // 设置请求的 header
      success: function(res){
       if(res.data.length>0) {
_this.setData({
          'nlist.list':_this.data.nlist.list.concat(res.data),
          lastid:res.data[res.data.length-1].Id
        })
       }else{
_this.setData({
          loadName:"没有了"
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

 
  goToTop: function (e) { //回到顶部
    util.goTop(e);
  },
  onPageScroll: function (e) {
    var that = this;
    util.onPageScroll(e, that);
  },
 onReachBottom: function() {
   var _this = this; 
  _this.setData({
    pagesize:5
  })
    _this.fetchConferenceData();
    
  },
sumit:function(e){
    var key=e.detail.value;
    if(!key){
      return;
    }
    wx.navigateTo({
      url: '../logs/logs?type=1&key='+key+''
    })
    this.setData({key:''});
},
  onPullDownRefresh:function(){ //下拉刷新

    /*this.setData({
      page:0,
      reportlist:[]
    })
    this.fetchConferenceData();
    setTimeout(function(){
      wx.stopPullDownRefresh()
    },1000)*/
  }

  

});
