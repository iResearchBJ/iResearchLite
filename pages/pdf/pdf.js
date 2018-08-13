//获取应用实例
//var app = getApp()
var nav = require("../../utils/nav.js");
var util = require("../../utils/util.js");

var downloading = false;
Page({
  data: {
    id: 0,
    pdflist: [],
    scrolltop: null,
    page: 0,
    pcount: 0,
    title: "",
    topic: "",
    curcount: 0,
    isHiddenLoading: false,
    aniClass: false,
    downloading: false,
    downloadingNum: 0
  },
  onShareAppMessage: function () {
    var _this = this;
    return {
      title: _this.data.title,
      path: '/pages/pdf/pdf?id=' + _this.data.id + "&pid=" + _this.data.navdata.pageId
    }
  },
  onLoad: function (options) { //加载数据渲染页面 
    var _this = this;
    var appInstance = getApp();
    this.setData({
      id: options.id,
      'navdata.pageId': options.pid,
      'navdata.tabBar': nav.data,
      downloading: appInstance.globalData.reportDownList.length>0,
      downloadingNum: appInstance.globalData.reportDownList.length
    });

    this.fetchConferenceData(function () {
      _this.getimgList();
    });
    this.log();
  },
  log: function () {
    var _this = this;
    wx.request({
      url: 'https://api.iresearch.cn/api/research/log',
      data: {
        cid: 8,
        uid: 0,
        nid: _this.data.id,
        cookie: "0000000"
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        // success
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },
  getimgList: function () {
    var imglist = [];
    for (var i = 1; i <= 5; i++) {
      this.setData({
        curcount: this.data.curcount + 1
      })
      if (this.data.curcount <= this.data.pcount)
        imglist.push("http://report.iresearch.cn/rimgs/" + this.data.id + "/" + this.data.curcount + ".jpg");
    }
    this.setData({
      pdflist: this.data.pdflist.concat(imglist)
    })
  },
  fetchConferenceData: function (fun) {  //获取报告列表详情
    const perpage = 5;
    var _this = this;
    wx.request({
      url: 'https://api.iresearch.cn/api/research/report',
      data: {
        id: _this.data.id
      },
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        "Content-Type": "application/json"
      }, // 设置请求的 header
      success: function (res) {
        _this.setData({
          pcount: res.data.PagesCount,
          title: res.data.Title,
          topic: res.data.Topic
        });

        fun();
      },
      fail: function () {
        // fail
      },
      complete: function () {
        _this.setData({ isHiddenLoading: true });
      }
    })

  },
  lognum: function () {

  },
  lookBigPic: function (e) {
    var url = e.currentTarget.dataset.url;
    var _this = this;
    wx.previewImage({
      current: url, // 当前显示图片的http链接
      urls: _this.data.pdflist // 需要预览的图片http链接列表
    });

  },

  goToTop: function (e) { //回到顶部
    util.goTop(e);
  },
  onPageScroll: function (e) {
    var that = this;
    util.onPageScroll(e, that);
  },
  onReachBottom: function () {
    this.getimgList();

  },
  Down: function () {//报告下载
    var _this = this;
    var appInstance = getApp();
    var reportId = this.data.id;
    var reportTitle = this.data.title;
    var topic = this.data.topic;
    for (var i = 0; i < appInstance.globalData.reportDownList.length; i++) {
      if (appInstance.globalData.reportDownList[i].id == reportId) {
        wx.showToast({
          title: '该报告正在下载'
        });
        return;
      }
    }
    var value = wx.getStorageSync('reportDownList');
    for (var i = 0; i < value.length; i++) {
      if (value[i].id == reportId) {
        wx.showToast({
          title: '该报告已下载'
        });
        return;
      }
    }
    if (downloading) {
      return;
    }
    downloading = true;

    var downloadTask = wx.downloadFile({
      url: 'https://api.iresearch.cn/api/report/Download2?id=' + reportId,
      success: function (res) {
        downloading = false;
        if (res.statusCode === 200) {
          wx.saveFile({
            tempFilePath: res.tempFilePath,
            success: function (res) {
              var savedFilePath = res.savedFilePath;
              var reportDownList = [];
              wx.getStorage({
                key: 'reportDownList',
                success: function (res) {
                  reportDownList = res.data;
                },
                fail: function (res) {
                  console.log(res)
                },
                complete: function () {
                  reportDownList.push({
                    id: reportId,
                    name: reportTitle,
                    topic: topic,
                    path: savedFilePath
                  })
                  wx.setStorageSync('reportDownList', reportDownList);
                  var val1 = appInstance.globalData.reportDownList;
                  var val2 = [];
                  for (var i = 0; i < val1.length; i++) {
                    if (val1[i].id != reportId) {
                      val2.push(val1[i]);
                    }
                  }
                  appInstance.globalData.reportDownList = val2;
                  var callback= appInstance.globalData.reportDownLoadCallback;
                  if(callback!=null){
                    callback();
                  }
                  // wx.showToast({
                  //   title: '报告下载成功'
                  // });
                }
              })
            },
            fail: function (res) {
              var val1 = appInstance.globalData.reportDownList;
              var val2 = [];
              for (var i = 0; i < val1.length; i++) {
                if (val1[i].id != reportId) {
                  val2.push(val1[i]);
                }
              }
              appInstance.globalData.reportDownList = val2;
              console.log('报告保存失败：' + res);
              var callback = appInstance.globalData.reportDownLoadCallback;
              if (callback != null) {
                callback();
              }
              wx.showToast({
                title: "报告保存失败"
              });
            }
          })
        }
        else {
          var val1 = appInstance.globalData.reportDownList;
          var val2 = [];
          for (var i = 0; i < val1.length; i++) {
            if (val1[i].id != reportId) {
              val2.push(val1[i]);
            }
          }
          appInstance.globalData.reportDownList = val2;
          console.log('报告下载失败，statusCode：' + res.statusCode);
          var callback = appInstance.globalData.reportDownLoadCallback;
          if (callback != null) {
            callback();
          }
          wx.showToast({
            title: '报告下载失败'
          });
        }
      },
      fail: function () {
        downloading = false;
        var val1 = appInstance.globalData.reportDownList;
        var val2 = [];
        for (var i = 0; i < val1.length; i++) {
          if (val1[i].id != reportId) {
            val2.push(val1[i]);
          }
        }
        appInstance.globalData.reportDownList = val2;
        console.log('报告下载失败');
        var callback = appInstance.globalData.reportDownLoadCallback;
        if (callback != null) {
          callback();
        }
        wx.showToast({
          title: '报告下载失败'
        });
      }
    });

    appInstance.globalData.reportDownList.push({
      id: reportId,
      name: reportTitle,
      topic: topic,
      downloadTask: downloadTask
    });

    _this.setData({
      downloading: appInstance.globalData.reportDownList.length > 0,
      downloadingNum: appInstance.globalData.reportDownList.length,
      aniClass: true
    });
    
    setTimeout(function () {
      _this.setData({
        aniClass: false
      });
    }, 300);
    console.log(appInstance.globalData.reportDownList)
  },
  RedirectDownList: function () {
    wx.navigateTo({
      url: '/pages/downList/downList',
    })
  }
});
