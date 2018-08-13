//logs.js
var nav=require("../../utils/nav.js");
Page({
  data: {
    nlist:{
      list:[],
      url:"../pdf/pdf",
      pid:0
    },
    t:1,
    key:"",
    ps:50,
    pi:1,
    isHiddenLoading:false
  },
  onLoad: function (options) {
    this.setData({'navdata.pageId':(parseInt(options.type)-1),'navdata.tabBar':nav.data,'nlist.pid':(parseInt(options.type)-1)});
     this.setData({
       key:options.key,
       t:options.type
     });
      
     if(options.type!=1){
       this.setData({
       'nlist.url':"../news/news"
     });
     }
     this.search();
  },
  search:function(){
    var _this=this;
    wx.request({
      url: 'https://api.iresearch.cn/api/research/search',
      data: {
        t:this.data.t,
        key:this.data.key,
        ps:this.data.ps,
        pi:this.data.pi
      },
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        _this.setData({
          'nlist.list':res.data,
          isHiddenLoading:true
        })
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  sumit:function(e){
      var key=e.detail.value;
       if(!key){
      return;
    }
      this.setData({key:key});
      this.search();
  }
})
