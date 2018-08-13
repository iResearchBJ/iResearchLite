//文章详页
var WxParse = require('../../wxParse/wxParse.js');
var nav=require("../../utils/nav.js");
var util = require("../../utils/util.js");

Page({
  data: {
    title:'',
    time:'',
    review:'',
    content:'',
    resfrom:'',
    author:'',
    id:0,
    isHiddenLoading:false
    
  },
  onShareAppMessage: function () {
    var _this=this;
    return {
      title: _this.data.title,
      path: '/pages/news/news?id='+_this.data.id+"&pid="+_this.data.navdata.pageId
    }
  },
  onLoad: function (options) {
     this.setData({id:options.id,'navdata.pageId':options.pid,'navdata.tabBar':nav.data}); 
    this.getnews();
  },
  goToTop: function (e) { //回到顶部
    util.goTop(e);
  },
  onPageScroll: function (e) {
    var that = this;
    util.onPageScroll(e, that);
  },
  getnews:function(){
    var _this=this;
    wx.request({
      url: 'https://api.iresearch.cn/api/research/news',
      data: {
        id:this.data.id
      },
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
     header: {
         "Content-Type":"application/json"
       }, // 设置请求的 header
      success: function(res){
        if(res.data){
        var date=new Date(res.data.uptime);
        _this.setData({
          title:res.data.title,
          time:date.getFullYear()+"-"+(parseInt(date.getMonth())+1)+"-"+date.getDate(),
          review:"导语："+res.data.short_content,
          content:res.data.content,
          resfrom:res.data.resfrom,
          author:res.data.author,
    isHiddenLoading:true
        })
        wx.setNavigationBarTitle({
      title: res.data.title
    });
    var content = _this.data.content;
/** 
* WxParse.wxParse(bindName , type, data, target,imagePadding) 
* 1.bindName绑定的数据名(必填) 
* 2.type可以为html或者md(必填) 
* 3.data为传入的具体数据(必填) 
* 4.target为Page对象,一般为this(必填) 
* 5.imagePadding为当图片自适应是左右的单一padding(默认为0,可选) 
*/ 
    WxParse.wxParse('article', 'html', content, _this,0);
    }
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  }
})
