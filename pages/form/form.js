//获取应用实例
//var app = getApp()
var util = require("../../utils/util.js");

Page({
  data: {
    iserror:true,
    errormsg:'',
    isloading:false,
    isdisable:false,
    index: 0,
    iscontact:1,
    content:"",
    username:'',
    mobile:'',
    email:'',
    array: [{value:0,city:'请选择所在地区'},{value:1,city:'北京'},{value:2,city:'上海'},{value:1,city:'天津'},{value:3,city:'重庆'},{value:1,city:'河北省'},{value:1,city:'山西省'},{value:1,city:'内蒙古自治区'},{value:1,city:'辽宁省'},{value:1,city:'吉林省'},{value:1,city:'黑龙江省'},{value:2,city:'江苏省'},{value:2,city:'浙江省'},{value:2,city:'安徽省'},{value:3,city:'福建省'},{value:2,city:'江西省'},{value:1,city:'山东省'},{value:1,city:'河南省'},{value:2,city:'湖北省'},{value:2,city:'湖南省'},{value:3,city:'广东省'},{value:3,city:'广西省'},{value:2,city:'海南省'},{value:3,city:'四川省'},{value:3,city:'贵州省'},{value:3,city:'云南省'},{value:3,city:'西藏自治区'},{value:1,city:'陕西省'},{value:1,city:'甘肃省'},{value:1,city:'青海省'},{value:1,city:'新疆维吾尔自治区'},{value:1,city:'宁夏回族自治区'},{value:4,city:'台湾省'},{value:4,city:'香港特别行政区'},{value:4,city:'澳门特别行政区'},]
  },
  bindPickerChange: function(e) {
    if(e.detail.value==0){
      this.showerror("请选择你所在地区！");
    }else{
      this.setData({
       iserror:true
     })
    }
    this.setData({
      index: e.detail.value
    })
  },
  onPullDownRefresh:function(){
        this.formReset(e);
  },
  formReset:function(e){
    
  },
  onShareAppMessage: function () {
    return {
      title: '联系艾瑞',
      path: '/pages/form/form'
    }
  },
  formSubmit:function(e){
    var _this=this;
      var vals=e.detail.value;
      if(vals.content==""){
        this.showerror("请填写您的建议！");
        return;
      }
      if(vals.username==""){
        this.showerror("请填写您的姓名！");
        return;
      }
      if(vals.mobile==""){
        this.showerror("请填写您的电话！");
        return;
      }
      if(vals.email==""){
        this.showerror("请填写您的邮箱！");
        return;
      }
      if(vals.city=="0"){
        this.showerror("请选择你所在地区！");
        return;
      }
      this.setData({
        isloading:true,
        isdisable:true
      })
      wx.request({
        url: 'https://api.iresearch.cn/api/research/apply',
        data: {
          ID:0,
          name:vals.username,
          mobile:vals.mobile,
          email:vals.email,
          province:_this.data.array[vals.city].city,
          address:'无',
          company:'无',
          content:vals.content,
          isconttect:_this.data.iscontact,
          province_code:_this.data.array[vals.city].value,
          origin:'iresearch_lite'
        },
        method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        // header: {}, // 设置请求的 header
        success: function(res){
          if(res.data>0){
            _this.setData({
              content:"",
              username:'',
              mobile:'',
              email:'',
              address:'',
              company:'',
              index: 0
            });
            wx.showToast({
                title: '提交成功',
                icon: 'success',
                duration: 2000
            });
          }else{
            _this.showerror("服务器错误，请稍候再试！");
          }
        },
        fail: function() {
          // fail
        },
        complete: function() {
         _this.setData({
        isloading:false,
        isdisable:false
      })
        }
      })
  },
  onfoucs:function(){
this.setData({
       iserror:true
     })
  },
  showerror:function(msg){
     this.setData({
       iserror:false,
       errormsg:msg
     })
  },
  phone:function(){
wx.makePhoneCall({
  phoneNumber: '400-026-2099',
  success: function(res) {
    // success
  }
})
  },
  checkboxChange:function(e){
    if(e.detail.value.length>0){
    this.setData({
      iscontact:e.detail.value[0]
    })
    }else{
 this.setData({
      iscontact:0
    })
    }
  },
  onLoad: function () { //加载数据渲染页面

  },
  goToTop: function (e) { //回到顶部
    util.goTop(e);
  },
  onPageScroll: function (e) {
    var that = this;
    util.onPageScroll(e, that);
  }


});
