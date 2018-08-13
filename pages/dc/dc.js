
Page({
  data: {
    nlist:{
      list:[],
      url:"../news/news",
      pid:2
    }, //报告列表
    scrolltop:null, //滚动位置
    page: 0, //分页
    lastid:'0',
    pagesize:15,
    rootid:'11',
    loadName:"努力加载中。。。"
  },
onShareAppMessage: function () {
    return {
      title: '指数解读',
      path: '/pages/dc/dc'
    }
  },
  onLoad: function () { //加载数据渲染页面
    wx.showNavigationBarLoading();//显示页面加载中状态
    this.fetchConferenceData();
  },

  fetchConferenceData:function(){  //获取列表
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
sumit:function(e){

    var key=e.detail.value;
     if(!key){
      return;
    }
    wx.navigateTo({
      url: '../logs/logs?type=4&key='+key+''
    })
},

  goToTop:function(){ //回到顶部
    this.setData({
      scrolltop:0
    })
  },
   onReachBottom: function() {
   var _this = this; 
  _this.setData({
    pagesize:5
  })
    _this.fetchConferenceData();
    
  },
  onPullDownRefresh:function(){ //下拉刷新
  
  }

});
