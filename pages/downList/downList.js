var app = getApp();
var startX;
var startY;
var endX;
var endY;
var maxRight = 60;
Page({
  data: {
    percentOk: 100,//下载完成的状态100%;
    cardTeams: []
  },
  drawStart: function (e) {
    // console.log("drawStart");
    var touch = e.touches[0];
    startX = touch.clientX;
    startY = touch.clientY;
    var cardTeams = this.data.cardTeams;
    for (var i in cardTeams) {
      var data = cardTeams[i];
      data.startRight = data.right;
    }
  },
  drawEnd: function (e) {
    // console.log("drawEnd");
    var cardTeams = this.data.cardTeams;
    for (var i in cardTeams) {
      var data = cardTeams[i];
      if (data.right <= 100 / 2) {
        data.right = 0;
      } else {
        data.right = maxRight;
      }
    }
    this.setData({
      cardTeams: cardTeams
    });
  },
  drawMove: function (e) {
    //console.log("drawMove");
    var self = this;
    var dataId = e.currentTarget.id;
    var cardTeams = this.data.cardTeams;
    var key = e.currentTarget.dataset.percent;
    if (key) {
      var touch = e.touches[0];
      endX = touch.clientX;
      endY = touch.clientY;
      // console.log("startX=" + startX + " endX=" + endX);
      if (endX - startX == 0)
        return;
      var res = cardTeams;

      if ((endX - startX) < 0) {//从右往左
        for (var k in res) {
          var data = res[k];
          if (res[k].id == dataId) {
            var startRight = res[k].startRight;
            var change = startX - endX;
            startRight += change;
            if (startRight > maxRight)
              startRight = maxRight;
            res[k].right = startRight;
          }
        }
      } else {//从左往右
        for (var k in res) {
          var data = res[k];
          if (res[k].id == dataId) {
            var startRight = res[k].startRight;
            var change = endX - startX;
            startRight -= change;
            if (startRight < 0)
              startRight = 0;
            res[k].right = startRight;
          }
        }
      }
      self.setData({
        cardTeams: cardTeams
      });

    }
  },
  //删除item
  delItem: function (e) {
    console.log(e.target)
    var _this = this;
    var id = e.target.dataset.id;
    var path = e.target.dataset.path;
    wx.showModal({
      title: '提示',
      content: '确定要删除此报告吗？',
      success: function (res) {
        if (res.confirm) {
          wx.removeSavedFile({
            filePath: path,
            success: function (res) {
              console.log(res)
              var value1 = wx.getStorageSync('reportDownList');
              var value2=[];
              for (var i = 0; i < value1.length; i++) {
                if(value1[i].id!=id){
                  value2.push(value1[i]);
                }
              }
              wx.setStorageSync('reportDownList', value2);
              _this.onLoad();
            },
            fail: function (res) {
              console.log(res)
            },
            complete: function (res) {
              console.log(res)
            }
          })
        } else if (res.cancel) {
          var cardTeams = _this.data.cardTeams;
          for (var i in cardTeams) {
            var item = cardTeams[i];
            if (item.id == id) {
              item.right = 0;
              _this.setData({
                cardTeams: cardTeams
              });
            }
          }
          return false;
        }
      }
    });

  },
  //取消下载
  cancelItem: function (e) {
    var _this = this;
    var appInstance = getApp();
    var id = e.target.dataset.id;
    wx.showModal({
      title: '提示',
      content: '报告正在下载中，确定要取消下载吗？',
      cancelText: '继续下载',
      success: function (res) {
        if (res.confirm) {
          var reportDownList = appInstance.globalData.reportDownList;
          var value=[];
          for (var i = 0; i < reportDownList.length; i++) {
            if (reportDownList[i].id == id) {
              reportDownList[i].downloadTask.abort();
            }else{
              value.push(reportDownList[i])
            }
          }
          appInstance.globalData.reportDownList=value;
          _this.onLoad();
        } else if (res.cancel) {
          var cardTeams = _this.data.cardTeams;
          for (var i in cardTeams) {
            var item = cardTeams[i];
            if (item.id == id) {
              item.right = 0;
              _this.setData({
                cardTeams: cardTeams
              });
            }
          }
          return false;
        }
      }
    });
  },
  //打开报告链接
  OpenFile: function (e) {
    if (e.target.id == "del" || e.target.id=="cancel"){
      return;
    }
    var id = e.target.dataset.id;
    var path = e.target.dataset.path;
    console.log('查看报告' + id);

    wx.openDocument({
      filePath: path,
      fileType: "pdf",
      success: function (res) {
        console.log('打开文档成功')
      },
      fail: function (res) {
        console.log(res)
      }
    })
  },
  FileLoading: function (e) {
    var dataId = e.target.dataset.id;
    wx.showToast({
      title: '下载中请稍后',
      icon: 'loading',
      duration: 1500
    })
    console.log(dataId + '报告未下载完')
  },
  onLoad: function () {
    var _this = this;
    var cardTeams = [];
    var reportDownList = app.globalData.reportDownList;
    console.log(app.globalData.reportDownList)
    app.globalData.reportDownLoadCallback=function(){
      if (_this.route == "pages/downList/downList") {
        _this.onLoad();
      }
    }
    for (var i = 0; i < reportDownList.length; i++) {
      cardTeams.push({
        id: reportDownList[i].id,
        "name": reportDownList[i].name,
        "src": reportDownList[i].topic,
        "url": "#",
        "path": "",
        "right": 0,
        "startRight": 0,
        percent: 0
      })
    }
    var value = wx.getStorageSync('reportDownList');
    for (var i = 0; i < value.length; i++) {
      cardTeams.push({
        id: value[i].id,
        "name": value[i].name,
        "src": value[i].topic,
        "url": "#",
        "path": value[i].path,
        "right": 0,
        "startRight": 0,
        percent: 100
      })
    }
    _this.setData({
      cardTeams: cardTeams
    })

    for (var i = 0; i < reportDownList.length; i++) {
      var rid = reportDownList[i].id;
      reportDownList[i].downloadTask.onProgressUpdate((res) => {
        for (var j = 0; j < cardTeams.length; j++) {
          if (cardTeams[j].id == rid) {
            //console.log(rid + '下载进度', res.progress)
            //console.log(i + '已经下载的数据长度', res.totalBytesWritten)
            //console.log(i + '预期需要下载的数据总长度', res.totalBytesExpectedToWrite)
            cardTeams[j].percent = res.progress;
            if (res.progress>=100){
              console.log("ok")
              // setTimeout(function () {
              //   _this.onLoad();
              // },300)
            }
            else{
                _this.setData({
                  cardTeams: cardTeams
                })
            }
          }
        }
      })
    }
  },
  Clear: function () {
    var _this = this;
    var appInstance = getApp();
    var reportDownList = appInstance.globalData.reportDownList;
    //console.log(app.globalData.reportDownList)
    for (var i = 0; i < reportDownList.length; i++) {
      reportDownList[i].downloadTask.abort();
    }
    appInstance.globalData.reportDownList = [];
    var value = wx.getStorageSync('reportDownList');
    for (var i = 0; i < value.length; i++) {
      wx.removeSavedFile({
        filePath: value[i].path,
        complete: function (res) {
          console.log(res)
        }
      })
    }
    wx.removeStorage({
      key: 'reportDownList',
      success: function (res) {
        console.log(res.data)
      }
    })
    _this.setData({
      cardTeams: []
    })
    // wx.getSavedFileList({
    //   success: function (res) {
    //     for (var i = 0; i < res.fileList.length; i++) {
    //       wx.removeSavedFile({
    //         filePath: res.fileList[i].filePath,
    //         complete: function (res) {
    //           console.log(res)
    //         }
    //       })
    //     }
    //   }
    // })
  }
})