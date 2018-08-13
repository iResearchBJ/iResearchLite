var app = getApp();
Page({
  data: {
    scrolltop: 0,
    scrollLeft: 0,
    winWidth: 0,
    winHeight: 0,

    indexTabList: [
      {
        id: "wxdata",
        name: "新媒体指数"
      },
      {
        id: "app",
        name: "移动APP指数"
      },
      {
        id: "pc",
        name: "PC Web指数"
      },
      {
        id: "video",
        name: "网络影视指数"
      },
      {
        id: "ad",
        name: "网络广告指数"
      },
      {
        id: "device",
        name: "移动设备指数"
      },
      {
        id: "channel",
        name: "移动渠道指数"
      },
      {
        id: "overseas",
        name: "海外APP指数"
      }
      
    ],
    curIndexTab: null,
    curIndexTabs: 0,
    curFilterTab: null,

    //app
    appFilterList: [
      {
        id: "appClass",
        name: ""
      },
      {
        id: "appTime",
        name: ""
      },
      {
        id: "appDimension",
        name: ""
      }
    ],
    appKeyword:"",
    appClassList: [],
    curAppClass: null,
    appSecondClassList: [],
    curAppSecondClass: null,
    curAppClassId: 0,
    curAppClassLevel: 1,
    appTimeList: [],
    curAppTime: null,
    appDimensionList: [
      {
        id: 10,
        name: "日均独立设备(万)"
      },
      {
        id: 2,
        name: "月度独立设备(万)"
      },
      {
        id: 6,
        name: "月度总有效时长(万)"
      }
    ],
    curAppDimension: null,
    appPageIndex: 1,
    appPageSize: 20,
    appDataLoading: false,
    appLoadName: "努力加载中。。。",
    appDataList: [],

    //pc
    pcFilterList: [
      {
        id: "pcClass",
        name: ""
      },
      {
        id: "pcTime",
        name: ""
      },
      {
        id: "pcDimension",
        name: ""
      }
    ],
    pcKeyword: "",
    pcAllClassList:[],
    pcClassList: [],
    curPcClass: null,
    pcSecondClassList: [],
    curPcSecondClass: null,
    curPcClassId: 0,
    curPcClassLevel: 1,
    pcTimeList: [],
    curPcTime: null,
    pcDimensionList: [
      {
        id: 10,
        name: "日均覆盖人数(万)"
      },
      {
        id: 2,
        name: "月度覆盖人数(万)"
      },
      {
        id: 6,
        name: "月度浏览时间(万)"
      }
    ],
    curPcDimension: null,
    pcPageIndex: 1,
    pcPageSize: 20,
    pcDataLoading: false,
    pcLoadName: "努力加载中。。。",
    pcDataList: [],

    //video
    videoFilterList: [
      {
        id: "videoDevice",
        name: ""
      },
      {
        id: "videoTime",
        name: ""
      },
      {
        id: "videoClass",
        name: ""
      }
    ],
    videoKeyword: "",
    videoDeviceList: [
      {
        id: 1,
        name: "全部终端"
      },
      {
        id: 2,
        name: "移动端"
      },
      {
        id: 3,
        name: "PC端"
      },
      {
        id: 4,
        name: "OTT端"
      }
    ],
    curVideoDevice: null,
    videoTimeList: [],
    curVideoTime: null,
    videoClassList: [
      {
        id: 0,
        name: "全部类型"
      },
      {
        id: 1,
        name: "电影"
      },
      {
        id: 2,
        name: "电视剧"
      },
      {
        id: 3,
        name: "综艺"
      },
      {
        id: 4,
        name: "动漫"
      }
    ],
    curVideoClass: null,
    videoPageIndex: 1,
    videoPageSize: 20,
    videoOrderBy: 0,
    videoDataLoading: false,
    videoLoadName: "努力加载中。。。",
    videoDataList: [],

    //ad
    adFilterList: [
      {
        id: "adDevice",
        name: ""
      },
      {
        id: "adTime",
        name: ""
      },
      {
        id: "adClass",
        name: ""
      }
    ],
    adDeviceList: [
      {
        id: "all",
        name: "全部终端"
      },
      {
        id: "mobile",
        name: "移动端"
      },
      {
        id: "pc",
        name: "PC端"
      }
    ],
    curAdDevice: null,
    adTimeList: [],
    curAdTime: null,
    adClassList: [],
    curAdClass: null,
    adDataLoading: false,
    adDataList: [],

    //device
    deviceFilterList: [
      {
        id: "deviceClass",
        name: ""
      },
      {
        id: "deviceYear",
        name: ""
      },
      {
        id: "deviceWeek",
        name: ""
      }
    ],
    deviceClassList: [
      {
        id: 0,
        name: "厂商品牌"
      },
      {
        id: 1,
        name: "IOS机型"
      },
      {
        id: 2,
        name: "Android机型"
      }
    ],
    curDeviceClass: null,
    deviceYearList: [],
    curDeviceYear: null,
    curDeviceYearIntv: null,
    deviceWeekList: [],
    deviceWeekListIntv:[],
    curDeviceWeek: null,
    devicePageIndex: 1,
    devicePageSize: 20,
    deviceDataLoading: false,
    deviceDataList: [],

    //开始结束时间
    starTime: null,//201442
    endTime: null,//201718
    starTime_y: null,
    starTime_ext: null,
    endTime_y: null,
    endTime_ext: null,
    wxYearList: [],
    wxWeekList: [],
    // wxWeekListNew:[],
    wxWeekCur: null,

    //channel
    channelFilterList: [
      {
        id: "channelClass",
        name: ""
      },
      {
        id: "channelTime",
        name: ""
      },
      {
        id: "channelChannel",
        name: ""
      }
    ],
    channelKeyword: "",
    channelClassList: [],
    curChannelClass: null,
    channelSecondClassList: [],
    curChannelSecondClass: null,
    curChannelClassId: 0,
    curChannelClassLevel: 1,
    channelTimeList: [],
    curChannelTime: null,
    channelChannelList: [],
    curChannelChannel: null,
    channelPageIndex: 1,
    channelPageSize: 20,
    channelIsSearch:false,
    channelDataLoading: false,
    channelLoadName: "努力加载中。。。",
    channelDataList: [],

    //overseas
    overseasFilterList: [
      {
        id: "overseasClass",
        name: ""
      },
      {
        id: "overseasTime",
        name: ""
      },
      {
        id: "overseasOverseas",
        name: ""
      }
    ],
    overseasKeyword: "",
    overseasClassList: [],
    curOverseasClass: null,
    overseasSecondClassList: [],
    curOverseasSecondClass: null,
    curOverseasClassId: 0,
    curOverseasClassLevel: 1,
    overseasTimeList: [],
    curOverseasTime: null,
    overseasOverseasList: [],
    curOverseasOverseas: null,
    overseasPageIndex: 1,
    overseasPageSize: 20,
    overseasIsSearch: false,
    overseasDataLoading: false,
    overseasLoadName: "努力加载中。。。",
    overseasDataList: [],

    //wxdata
    wxdataFilterList: [
      // {
      //   id: "wxdataMenu",
      //   name: ""
      // },
      {
        id: "wxdataClass",
        name: ""
      },
      {
        id: "wxdataTime",
        name: ""
      }
      // ,
      // {
      //   id: "wxdataChannel",
      //   name: ""
      // }
    ],
    wxdataKeyword: "",
    wxdataClassList: [],
    curWxdataClass: null,
    wxdataSecondClassList: [],
    curWxdataSecondClass: null,
    curWxdataClassId: 0,
    
    curWxdataClassLevel: 1,
    wxdataTimeList: [],
    wxdataMenuList: [
      
      {
        id:'1',
        name:'微信小程序榜单',
        isNew:true
      },
      {
        id: '0',
        name: '微信公众号榜单',
        isNew: false
      }
      // {
      //   id: '2',
      //   name: '抖音榜单'
      // },
      // {
      //   id: '3',
      //   name: '淘宝直播榜单'
      // },
      // {
      //   id: '4',
      //   name: '头条榜单'
      // }
      ],
    curWxdataMenuId: null,
    curWxdataMenuName: null,
    curWxdataMenuIsNew:false,
    curWxdataTime: null,
    wxdataWxdataList: [],
    curWxdataWxdata: null,
    wxdataPageIndex: 1,
    wxdataPageSize: 20,
    wxdataIsSearch: false,
    wxdataDataLoading: false,
    wxdataLoadName: "努力加载中。。。",
    wxdataDataList: [],


    //minApp
    mindataFilterList: [
      // {
      //   id: "mindataMenu",
      //   name: ""
      // },
      {
        id: "mindataClass",
        name: ""
      },
      {
        id: "mindataTime",
        name: ""
      }
      // ,
      // {
      //   id: "mindataChannel",
      //   name: ""
      // }
    ],
    mindataKeyword: "",
    mindataClassList: [],
    curMindataClass: null,
    mindataSecondClassList: [],
    curMindataSecondClass: null,
    curMindataClassId: 0,
    curMindataClassLevel: 1,
    mindataTimeList: [],
    
    curMindataTime: null,
    mindataWxdataList: [],
    curMindataWxdata: null,
    mindataPageIndex: 1,
    mindataPageSize: 20,
    mindataIsSearch: false,
    mindataDataLoading: false,
    mindataLoadName: "努力加载中。。。",
    mindataDataList: []
  },

  onLoad: function (options) { //加载数据渲染页面

    var _this = this;
    wx.showNavigationBarLoading();//显示页面加载中状态
    _this.fetchConferenceData(); //加载数据

    var curwxdataMenuList = _this.data.wxdataMenuList[0];

    _this.setData({
      curWxdataMenuId: curwxdataMenuList.id,
      curWxdataMenuName: curwxdataMenuList.name,
      curWxdataMenuIsNew: curwxdataMenuList.isNew,
    }),
    wx.getSystemInfo({
      success: function (res) {
        _this.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    }); 

    var indexId = app.globalData.indexId;
    var index = _this.data.indexTabList.map(function (e) { return e.id; }).indexOf(indexId);

    _this.setData({
      curIndexTabs:index,
      curIndexTab: this.data.indexTabList[index]
    });

    // _this.switchAppIndex();
    switch (indexId) {
      case "app":
        _this.switchAppIndex();
        break;
      case "pc":
        _this.switchPcIndex();
        break;
      case "video":
        _this.switchVideoIndex();
        break;
      case "ad":
        _this.switchAdIndex();
        break;
      case "device":
        _this.switchDeviceIndex();
        break;
      case "channel":
        _this.switchChannelIndex();
        break;
      case "overseas":
        _this.switchOverseasIndex();
        break;
      case "wxdata":
        _this.switchWxdataIndexAll();
    }
  },

 
  swichIndexTab: function (e) {
    var data = e.currentTarget.dataset.data;
    var current = e.currentTarget.dataset.current;
    this.setData({
      curFilterTab:null
    });
    if (this.data.curIndexTab.id == data.id) {
      return false;
    }
    else {
      this.setData({
        curIndexTab: data,
        curIndexTabs: current
      });

      switch (data.id) {
        case "app":
          this.switchAppIndex();
          break;
        case "pc":
          this.switchPcIndex();
          break;
        case "video":
          this.switchVideoIndex();
          break;
        case "ad":
          this.switchAdIndex();
          break;
        case "device":
          this.switchDeviceIndex();
          break;
        case "channel":
          this.switchChannelIndex();
          break;
        case "overseas":
          this.switchOverseasIndex();
          break;
        case "wxdata":
          this.switchWxdataIndexAll();
      }
    }
  },
  switchWxdataIndexAll: function(){
    console.log(999999999)
    switch (this.data.curWxdataMenuId) {
      case "0":
        this.switchWxdataIndex();
        break;
      case "1":
        this.switchMindataIndex();
        break;
  }
  },

  //app
  switchAppIndex: function (fun) {
    var $this = this;
    if ($this.data.appClassList.length <= 0) {
      $this.getAppClass(function (res) {
        var appClassList = res.data;
        $this.getAppTime(function (resp) {
          var appTimeList = resp.data;
          appClassList.splice(0, 0, {
            ID: 0,
            ClassName: "全部分类"
          });
          $this.setData({
            appClassList: appClassList,
            appTimeList: appTimeList,
            curAppClass: appClassList[0],
            curAppTime: appTimeList[0],
            curAppDimension: $this.data.appDimensionList[0],
            'appFilterList[0].name': appClassList[0].ClassName,
            'appFilterList[1].name': appTimeList[0].TimeName,
            'appFilterList[2].name': $this.data.appDimensionList[0].name
          })
          $this.getAppData();
        }, null, null)
      }, null, null)
    }
  },
  getAppClass: function (sfun, ffun, cfun) {
    wx.request({
      url: 'https://api.iresearch.cn/Content/Json/Classes166.json',
      method: 'GET',
      success: function (res) {
        if (typeof sfun == "function") {
          sfun(res);
        }
      },
      fail: function (res) {
        if (typeof ffun == "function") {
          ffun(res);
        }
      },
      complete: function (res) {
        if (typeof cfun == "function") {
          cfun(res);
        }
        wx.hideNavigationBarLoading();
      }
    })
  },
  getAppSecondClass: function (id, sfun, ffun, cfun) {
    wx.request({
      url: 'https://api.iresearch.cn/Content/Json/Classes' + id + '.json',
      method: 'GET',
      success: function (res) {
        if (typeof sfun == "function") {
          sfun(res);
        }
      },
      fail: function (res) {
        if (typeof ffun == "function") {
          ffun(res);
        }
      },
      complete: function (res) {
        if (typeof cfun == "function") {
          cfun(res);
        }
        wx.hideNavigationBarLoading();
      }
    })
  },
  getAppTime: function (sfun, ffun, cfun) {
    wx.request({
      url: 'https://api.iresearch.cn/Content/Json/appMonthSpans.json',
      method: 'GET',
      success: function (res) {
        if (typeof sfun == "function") {
          sfun(res);
        }
      },
      fail: function (res) {
        if (typeof ffun == "function") {
          ffun(res);
        }
      },
      complete: function (res) {
        if (typeof cfun == "function") {
          cfun(res);
        }
        wx.hideNavigationBarLoading();
      }
    })
  },
  getAppData: function () {
    wx.showLoading({
      title: '请稍后'
    });
    var $this = this;
    $this.setData({
      appLoadName: "努力加载中。。。"
    });
    wx.request({
      url: 'https://api.iresearch.cn/api/App/GetDataList/',
      data: {
        name: $this.data.appKeyword,
        classId: $this.data.curAppClassId,
        classLevel: $this.data.curAppClassLevel,
        timeId: $this.data.curAppTime.ID,
        orderBy: $this.data.curAppDimension.id,
        pageIndex: $this.data.appPageIndex,
        pageSize: $this.data.appPageSize
      },
      method: 'GET',
      success: function (res) {
        if (res.data.Status == 1) {
          //console.log(res.data.List)
          if(res.data.List==null||res.data.List.length<=0){
            $this.setData({
              appDataList: []
            })
          }else{
            for (let i = 0; i < res.data.List.length; i++) {
              res.data.List[i].AppLogo = res.data.List[i].AppLogo.replace('\\', '/');
            }
            $this.setData({
              appDataList: res.data.List
            })
          }
        } else {
          console.log("程序处理失败，请稍后重试！")
        }
      },
      fail: function () {
        console.log("网络连接失败，请稍后重试！")
      },
      complete: function () {
        $this.setData({
          appDataLoading: false
        })
        wx.hideLoading();
        wx.hideNavigationBarLoading();
      }
    })
  },
  appendAppData: function () {
    var $this = this;
    wx.request({
      url: 'https://api.iresearch.cn/api/App/GetDataList/',
      data: {
        name: $this.data.appKeyword,
        classId: $this.data.curAppClassId,
        classLevel: $this.data.curAppClassLevel,
        timeId: $this.data.curAppTime.ID,
        orderBy: $this.data.curAppDimension.id,
        pageIndex: $this.data.appPageIndex,
        pageSize: $this.data.appPageSize
      },
      method: 'GET',
      success: function (res) {
        if (res.data.Status == 1) {
          //console.log(res.data.List)
          if (res.data.List != null && res.data.List.length>0){
            for (let i = 0; i < res.data.List.length; i++) {
              res.data.List[i].AppLogo = res.data.List[i].AppLogo.replace('\\', '/');
            }
            var data = $this.data.appDataList.concat(res.data.List);
            $this.setData({
              appDataList: data
            })
          }else{
            $this.setData({
              appLoadName: "没有更多内容。。。"
            });
          }
        } else {
          console.log("程序处理失败，请稍后重试！")
        }
      },
      fail: function () {
        console.log("网络连接失败，请稍后重试！")
      },
      complete: function () {
        $this.setData({
          appDataLoading: false
        })
        wx.hideNavigationBarLoading();
      }
    })
  },
  loadNextAppData: function (e) {
    var $this = this;
    if ($this.data.appDataLoading == true) {
      return;
    }
    $this.setData({
      appDataLoading: true,
      appPageIndex: $this.data.appPageIndex + 1
    })
    $this.appendAppData();
  },
  changeAppClass: function (e) {
    var $this = this;
    var data = e.currentTarget.dataset.data;
    if (data.ID == 0) {
      $this.setData({
        scrolltop: 0,
        curFilterTab: null,
        appPageIndex: 1,
        curAppClass: data,
        curAppClassId: 0,
        curAppClassLevel: 1,
        'appFilterList[0].name': data.ClassName
      })
      $this.getAppData();
    }
    else {
      $this.setData({
        curAppClass: data
      })
      $this.getAppSecondClass(data.ID, function (res) {
        res.data.splice(0, 0, {
          ID: 0,
          ClassName: "全部"
        });
        $this.setData({
          appSecondClassList: res.data
        })
      }, null, null);
    }
  },
  changeByAppClass: function (e) {
    var $this = this;
    var data = e.currentTarget.dataset.data;
    if (data.ID == 0) {
      $this.setData({
        scrolltop: 0,
        curFilterTab: null,
        appPageIndex: 1,
        curAppClassId: $this.data.curAppClass.ID,
        curAppClassLevel: 1,
        curAppSecondClass: data,
        'appFilterList[0].name': $this.data.curAppClass.ClassName
      })
      $this.getAppData();
    } else {
      $this.setData({
        scrolltop: 0,
        curFilterTab: null,
        appPageIndex: 1,
        curAppClassId: data.ID,
        curAppClassLevel: 2,
        curAppSecondClass: data,
        'appFilterList[0].name': data.ClassName
      })
      $this.getAppData();
    }
  },
  changeAppTime: function (e) {
    var $this = this;
    var data = e.currentTarget.dataset.data;
    $this.setData({
      scrolltop: 0,
      curFilterTab: null,
      appPageIndex: 1,
      curAppTime: data,
      'appFilterList[1].name': data.TimeName
    })
    $this.getAppData();
  },
  changeAppDimension: function (e) {
    var $this = this;
    var data = e.currentTarget.dataset.data;
    $this.setData({
      scrolltop: 0,
      curFilterTab: null,
      appPageIndex: 1,
      curAppDimension: data,
      'appFilterList[2].name': data.name
    })
    $this.getAppData();
  },
  appSearch:function(e){
    var $this = this;
    $this.setData({
      scrolltop: 0,
      appPageIndex: 1
    })
    $this.getAppData();
  },
  appKeywordInput:function(e){
    this.setData({
      appKeyword: e.detail.value
    })
  },

  //pc
  switchPcIndex: function (fun) {
    var $this = this;
    if ($this.data.pcClassList.length <= 0) {
      $this.getPcClass(function (res) {
        var pcAllClassList = res.data;
        $this.getPcTime(function (resp) {
          var pcTimeList = resp.data;
          pcAllClassList.splice(0, 0, {
            Id: 0,
            Name: "全部分类",
            RootId:0
          });
          var pcClassList = $this.filterPcClass(pcAllClassList,0);
          $this.setData({
            pcAllClassList:pcAllClassList,
            pcClassList: pcClassList,
            pcTimeList: pcTimeList,
            curPcClass: pcClassList[0],
            curPcTime: pcTimeList[0],
            curPcDimension: $this.data.pcDimensionList[0],
            'pcFilterList[0].name': pcClassList[0].Name,
            'pcFilterList[1].name': pcTimeList[0].TimeName,
            'pcFilterList[2].name': $this.data.pcDimensionList[0].name
          })
          $this.getPcData();
        }, null, null)
      }, null, null)
    }
  },
  getPcClass: function (sfun, ffun, cfun) {
    wx.request({
      url: 'https://api.iresearch.cn/Content/Json/PcClass.json',
      method: 'GET',
      success: function (res) {
        if (typeof sfun == "function") {
          sfun(res);
        }
      },
      fail: function (res) {
        if (typeof ffun == "function") {
          ffun(res);
        }
      },
      complete: function (res) {
        if (typeof cfun == "function") {
          cfun(res);
        }
        wx.hideNavigationBarLoading();
      }
    })
  },
  filterPcClass:function(data,filter){
    var newData=[];
    for(var i=0;i<data.length;i++){
      if (data[i].RootId==filter){
        newData.push(data[i]);
      }
    }
    if(filter!=0){
      newData.splice(0, 0, {
        Id: 0,
        Name: "全部",
        RootId: filter
      });
    }
    return newData;
  },
  getPcTime: function (sfun, ffun, cfun) {
    wx.request({
      url: 'https://api.iresearch.cn/Content/Json/pcMonthSpans.json',
      method: 'GET',
      success: function (res) {
        if (typeof sfun == "function") {
          sfun(res);
        }
      },
      fail: function (res) {
        if (typeof ffun == "function") {
          ffun(res);
        }
      },
      complete: function (res) {
        if (typeof cfun == "function") {
          cfun(res);
        }
        wx.hideNavigationBarLoading();
      }
    })
  },
  getPcData: function () {
    wx.showLoading({
      title: '请稍后'
    });
    var $this = this;
    $this.setData({
      pcLoadName: "努力加载中。。。"
    });
    wx.request({
      url: 'https://api.iresearch.cn/api/pc/GetDataList/',
      data: {
        name: $this.data.pcKeyword,
        classId: $this.data.curPcClassId,
        classLevel: $this.data.curPcClassLevel,
        timeId: $this.data.curPcTime.ID,
        orderBy: $this.data.curPcDimension.id,
        pageIndex: $this.data.pcPageIndex,
        pageSize: $this.data.pcPageSize,
      },
      method: 'GET',
      success: function (res) {
        if (res.data.Status == 1) {
          //console.log(res.data.List)
          $this.setData({
            pcDataList: res.data.List
          })
        } else {
          console.log("程序处理失败，请稍后重试！")
        }
      },
      fail: function () {
        console.log("网络连接失败，请稍后重试！")
      },
      complete: function () {
        $this.setData({
          pcDataLoading: false
        });
        wx.hideLoading();
        wx.hideNavigationBarLoading();
      }
    })
  },
  appendPcData: function () {
    var $this = this;
    wx.request({
      url: 'https://api.iresearch.cn/api/pc/GetDataList/',
      data: {
        name: $this.data.pcKeyword,
        classId: $this.data.curPcClassId,
        classLevel: $this.data.curPcClassLevel,
        timeId: $this.data.curPcTime.ID,
        orderBy: $this.data.curPcDimension.id,
        pageIndex: $this.data.pcPageIndex,
        pageSize: $this.data.pcPageSize,
      },
      method: 'GET',
      success: function (res) {
        if (res.data.Status == 1) {
          //console.log(res.data.List)
          if (res.data.List != null && res.data.List.length > 0) {
            var data = $this.data.pcDataList.concat(res.data.List);
            $this.setData({
              pcDataList: data
            })
          } else {
            $this.setData({
              pcLoadName: "没有更多内容。。。"
            });
          }
        } else {
          console.log("程序处理失败，请稍后重试！")
        }
      },
      fail: function () {
        console.log("网络连接失败，请稍后重试！")
      },
      complete: function () {
        $this.setData({
          pcDataLoading: false
        });
        wx.hideNavigationBarLoading();
      }
    })
  },
  loadNextPcData: function (e) {
    var $this = this;
    if ($this.data.pcDataLoading == true) {
      return;
    }
    $this.setData({
      pcDataLoading: true,
      pcPageIndex: $this.data.pcPageIndex + 1
    })
    $this.appendPcData();
  },
  changePcClass: function (e) {
    var $this = this;
    var data = e.currentTarget.dataset.data;
    if (data.Id == 0) {
      $this.setData({
        scrolltop: 0,
        curFilterTab: null,
        pcPageIndex: 1,
        curPcClass: data,
        curPcClassId: 0,
        curPcClassLevel: 1,
        'pcFilterList[0].name': data.Name
      })
      $this.getPcData();
    }
    else {
      $this.setData({
        curPcClass: data
      })

      var pcSecondClassList = $this.filterPcClass($this.data.pcAllClassList,data.Id);
      $this.setData({
        pcSecondClassList: pcSecondClassList
      })
    }
  },
  changeByPcClass: function (e) {
    var $this = this;
    var data = e.currentTarget.dataset.data;
    if (data.Id == 0) {
      $this.setData({
        scrolltop: 0,
        curFilterTab: null,
        pcPageIndex: 1,
        curPcClassId: $this.data.curPcClass.Id,
        curPcClassLevel: 1,
        curPcSecondClass: data,
        'pcFilterList[0].name': $this.data.curPcClass.Name
      })
      $this.getPcData();
    } else {
      $this.setData({
        scrolltop: 0,
        curFilterTab: null,
        pcPageIndex: 1,
        curPcClassId: data.Id,
        curPcClassLevel: 2,
        curPcSecondClass: data,
        'pcFilterList[0].name': data.Name
      })
      $this.getPcData();
    }
  },
  changePcTime: function (e) {
    var $this = this;
    var data = e.currentTarget.dataset.data;
    $this.setData({
      scrolltop: 0,
      curFilterTab: null,
      pcPageIndex: 1,
      curPcTime: data,
      'pcFilterList[1].name': data.TimeName
    })
    $this.getPcData();
  },
  changePcDimension: function (e) {
    var $this = this;
    var data = e.currentTarget.dataset.data;
    $this.setData({
      scrolltop: 0,
      curFilterTab: null,
      pcPageIndex: 1,
      curPcDimension: data,
      'pcFilterList[2].name': data.name
    })
    $this.getPcData();
  },
  pcSearch: function (e) {
    var $this = this;
    $this.setData({
      scrolltop: 0,
      pcPageIndex: 1
    })
    $this.getPcData();
  },
  pcKeywordInput: function (e) {
    this.setData({
      pcKeyword: e.detail.value
    })
  },

  //video
  switchVideoIndex: function (fun) {
    var $this = this;
    if ($this.data.videoTimeList.length <= 0) {
      $this.getVideoTime(function (resp) {
        var videoTimeList = resp.data;
        $this.setData({
          videoTimeList: videoTimeList,
          curVideoDevice: $this.data.videoDeviceList[0],
          curVideoTime: videoTimeList[0],
          curVideoClass: $this.data.videoClassList[0],
          'videoFilterList[0].name': $this.data.videoDeviceList[0].name,
          'videoFilterList[1].name': videoTimeList[0].TimeName,
          'videoFilterList[2].name': $this.data.videoClassList[0].name
        })
        $this.getVideoData();
      }, null, null)
    }
  },
  getVideoTime: function (sfun, ffun, cfun) {
    wx.request({
      url: 'https://api.iresearch.cn/Content/Json/videoMonthSpans.json',
      method: 'GET',
      success: function (res) {
        if (typeof sfun == "function") {
          sfun(res);
        }
      },
      fail: function (res) {
        if (typeof ffun == "function") {
          ffun(res);
        }
      },
      complete: function (res) {
        if (typeof cfun == "function") {
          cfun(res);
        }
        wx.hideNavigationBarLoading();
      }
    })
  },
  getVideoData: function () {
    wx.showLoading({
      title: '请稍后'
    });
    var $this = this;
    $this.setData({
      videoLoadName: "努力加载中。。。"
    });
    wx.request({
      url: 'https://api.iresearch.cn/api/Video/GetDataList/',
      data: {
        name: $this.data.videoKeyword,
        classId: $this.data.curVideoClass.id,
        timeId: $this.data.curVideoTime.ID,
        deviceTypeId: $this.data.curVideoDevice.id,
        orderBy: $this.data.videoOrderBy,
        pageIndex: $this.data.videoPageIndex,
        pageSize: $this.data.videoPageSize,
      },
      method: 'GET',
      success: function (res) {
        if (res.data.Status == 1) {
          //console.log(res.data.List)
          if (res.data.List == null || res.data.List.length<=0){
            $this.setData({
              videoDataList: []
            })
          }else{
            var data = res.data.List;
            for (let i = 0; i < data.length; i++) {
              data[i].TimeData = (data[i].TimeData / 10000).toFixed(1);
            }
            $this.setData({
              videoDataList: data
            })
          }
        } else {
          console.log("程序处理失败，请稍后重试！")
        }
      },
      fail: function () {
        console.log("网络连接失败，请稍后重试！")
      },
      complete: function () {
        $this.setData({
          videoDataLoading: false
        });
        wx.hideLoading();
        wx.hideNavigationBarLoading();
      }
    })
  },
  appendVideoData: function () {
    var $this = this;
    wx.request({
      url: 'https://api.iresearch.cn/api/Video/GetDataList/',
      data: {
        name: $this.data.videoKeyword,
        classId: $this.data.curVideoClass.id,
        timeId: $this.data.curVideoTime.ID,
        deviceTypeId: $this.data.curVideoDevice.id,
        orderBy: $this.data.videoOrderBy,
        pageIndex: $this.data.videoPageIndex,
        pageSize: $this.data.videoPageSize,
      },
      method: 'GET',
      success: function (res) {
        if (res.data.Status == 1) {
          //console.log(res.data.List)
          if (res.data.List != null && res.data.List.length>0){
            var data = res.data.List;
            for (let i = 0; i < data.length; i++) {
              data[i].TimeData = (data[i].TimeData / 10000).toFixed(1);
            }
            data = $this.data.videoDataList.concat(data);
            $this.setData({
              videoDataList: data
            })
          } else {
            $this.setData({
              videoLoadName: "没有更多内容。。。"
            });
          }
        } else {
          console.log("程序处理失败，请稍后重试！")
        }
      },
      fail: function () {
        console.log("网络连接失败，请稍后重试！")
      },
      complete: function () {
        $this.setData({
          videoDataLoading: false
        });
        wx.hideNavigationBarLoading();
      }
    })
  },
  loadNextVideoData: function (e) {
    var $this = this;
    if ($this.data.videoDataLoading == true) {
      return;
    }
    $this.setData({
      videoDataLoading: true,
      videoPageIndex: $this.data.videoPageIndex + 1
    })
    $this.appendVideoData();
  },
  changeVideoDevice: function (e) {
    var $this = this;
    var data = e.currentTarget.dataset.data;
    $this.setData({
      scrolltop: 0,
      curFilterTab: null,
      videoPageIndex: 1,
      curVideoDevice: data,
      'videoFilterList[0].name': data.name
    })
    $this.getVideoData();
  },
  changeVideoTime: function (e) {
    var $this = this;
    var data = e.currentTarget.dataset.data;
    $this.setData({
      scrolltop: 0,
      curFilterTab: null,
      videoPageIndex: 1,
      curVideoTime: data,
      'videoFilterList[1].name': data.TimeName
    })
    $this.getVideoData();
  },
  changeVideoClass: function (e) {
    var $this = this;
    var data = e.currentTarget.dataset.data;
    $this.setData({
      scrolltop: 0,
      curFilterTab: null,
      videoPageIndex: 1,
      curVideoClass: data,
      'videoFilterList[2].name': data.name
    })
    $this.getVideoData();
  },
  videoSearch: function (e) {
    var $this = this;
    $this.setData({
      scrolltop: 0,
      videoPageIndex: 1
    })
    $this.getVideoData();
  },
  videoKeywordInput: function (e) {
    this.setData({
      videoKeyword: e.detail.value
    })
  },

  //ad
  switchAdIndex: function (fun) {
    var $this = this;
    if ($this.data.adClassList.length <= 0) {
      $this.getAdClass(function (resp) {
        var adClassList = resp.data;
        adClassList.splice(0, 0, {
          Id: 0,
          Name: "全部行业"
        });
        $this.getAdTime(function (respo) {
          var adTimeList = respo.data;
          $this.setData({
            adTimeList: adTimeList,
            adClassList: adClassList,
            curAdDevice: $this.data.adDeviceList[0],
            curAdTime: adTimeList[0],
            curAdClass: adClassList[0],
            'adFilterList[0].name': $this.data.adDeviceList[0].name,
            'adFilterList[1].name': adTimeList[0].Name,
            'adFilterList[2].name': adClassList[0].Name
          })
          $this.getAdData();
        }, null, null)
      }, null, null)
    }
  },
  getAdClass: function (sfun, ffun, cfun) {
    wx.request({
      url: 'https://api.iresearch.cn/Content/Json/AdIndustryClass.json',
      method: 'GET',
      success: function (res) {
        if (typeof sfun == "function") {
          sfun(res);
        }
      },
      fail: function (res) {
        if (typeof ffun == "function") {
          ffun(res);
        }
      },
      complete: function (res) {
        if (typeof cfun == "function") {
          cfun(res);
        }
        wx.hideNavigationBarLoading();
      }
    })
  },
  getAdTime: function (sfun, ffun, cfun) {
    wx.request({
      url: 'https://api.iresearch.cn/Content/Json/AdTimes.json',
      method: 'GET',
      success: function (res) {
        if (typeof sfun == "function") {
          sfun(res);
        }
      },
      fail: function (res) {
        if (typeof ffun == "function") {
          ffun(res);
        }
      },
      complete: function (res) {
        if (typeof cfun == "function") {
          cfun(res);
        }
        wx.hideNavigationBarLoading();
      }
    })
  },
  getAdData: function () {
    wx.showLoading({
      title: '请稍后'
    });
    var $this = this;
    wx.request({
      url: 'https://api.iresearch.cn/api/ad/GetAdData/',
      data: {
        type: $this.data.curAdDevice.id,
        classId: $this.data.curAdClass.Id,
        time: $this.data.curAdTime.Id
      },
      method: 'GET',
      success: function (res) {
        if (res.data.Status == 1) {
          //console.log(res.data.List)
          $this.setData({
            adDataList: res.data.List
          })
        } else {
          console.log("程序处理失败，请稍后重试！")
        }
      },
      fail: function () {
        console.log("网络连接失败，请稍后重试！")
      },
      complete: function () {
        $this.setData({
          adDataLoading: false
        });
        wx.hideLoading();
        wx.hideNavigationBarLoading();
      }
    })
  },
  changeAdDevice: function (e) {
    var $this = this;
    var data = e.currentTarget.dataset.data;
    $this.setData({
      scrolltop: 0,
      curFilterTab: null,
      curAdDevice: data,
      'adFilterList[0].name': data.name
    })
    $this.getAdData();
  },
  changeAdTime: function (e) {
    var $this = this;
    var data = e.currentTarget.dataset.data;
    $this.setData({
      scrolltop: 0,
      curFilterTab: null,
      curAdTime: data,
      'adFilterList[1].name': data.Name
    })
    $this.getAdData();
  },
  changeAdClass: function (e) {
    var $this = this;
    var data = e.currentTarget.dataset.data;
    $this.setData({
      scrolltop: 0,
      curFilterTab: null,
      curAdClass: data,
      'adFilterList[2].name': data.Name
    })
    $this.getAdData();
  },

  //device
  switchDeviceIndex: function (fun) {
    var $this = this;
    if ($this.data.deviceWeekList.length<=0){
      $this.getStart(true, function () {
        $this.getStart(false, function () {
          var yearList = [];
          for (var y = $this.data.starTime_y; y <= $this.data.endTime_y; y++) {
            yearList.push({
              id: y,
              name: y + "年"
            })
          }
          yearList = yearList.reverse();
          $this.zhou($this.data.endTime_y);

          $this.setData({
            wxYearList: yearList,
            deviceYearList: yearList,
            curDeviceClass: $this.data.deviceClassList[0],
            curDeviceYear: yearList[0],
            curDeviceWeek: $this.data.deviceWeekList[0],
            'deviceFilterList[0].name': $this.data.deviceClassList[0].name,
            'deviceFilterList[1].name': yearList[0].name,
            'deviceFilterList[2].name': $this.data.deviceWeekList[0].name,
          })
          
          $this.getDeviceBrandData();
        }, null);
      }, null);
    }
  },
  getDeviceBrandData: function () {
    wx.showLoading({
      title: '请稍后'
    });
    var $this = this;
    wx.request({
      url: 'https://api.iresearch.cn/api/Device/GetPagingBrandData/',
      data: {
        week: $this.data.curDeviceWeek.id,
        pageIndex: $this.data.devicePageIndex,
        pageSize: 20
      },
      method: 'GET',
      success: function (res) {
        if (res.data.Status == 1) {
          //console.log(res.data.List)
          if (res.data.List == null || res.data.List.length<=0){
            $this.setData({
              deviceDataList: []
            })
          }else{
            for (let i = 0; i < res.data.List.length; i++) {
              res.data.List[i].Percent = (res.data.List[i].Percent * 100).toFixed(2);
            }
            $this.setData({
              deviceDataList: res.data.List
            })
          }
        } else {
          console.log("程序处理失败，请稍后重试！")
        }
      },
      fail: function () {
        console.log("网络连接失败，请稍后重试！")
      },
      complete: function () {
        $this.setData({
          deviceDataLoading: false
        });
        wx.hideLoading();
        wx.hideNavigationBarLoading();
      }
    })
  },
  getDeviceOsData: function () {
    wx.showLoading({
      title: '请稍后'
    });
    var $this = this;
    var pageSize = $this.data.curDeviceClass.id == 1 ? 20 : 100;
    wx.request({
      url: 'https://api.iresearch.cn/api/Device/GetPagingDeviceData/',
      data: {
        osType: $this.data.curDeviceClass.id,
        week: $this.data.curDeviceWeek.id,
        pageIndex: $this.data.devicePageIndex,
        pageSize: pageSize
      },
      method: 'GET',
      success: function (res) {
        if (res.data.Status == 1) {
          //console.log(res.data.List)
          if (res.data.List==null||res.data.List.length<=0){
            $this.setData({
              deviceDataList: []
            })
          }else{
            for (let i = 0; i < res.data.List.length; i++) {
              res.data.List[i].Percent = (res.data.List[i].Percent * 100).toFixed(2);
            }
            $this.setData({
              deviceDataList: res.data.List
            })
          }
        } else {
          console.log("程序处理失败，请稍后重试！")
        }
      },
      fail: function () {
        console.log("网络连接失败，请稍后重试！")
      },
      complete: function () {
        $this.setData({
          deviceDataLoading: false
        });
        wx.hideLoading();
        wx.hideNavigationBarLoading();
      }
    })
  },
  changeDeviceYear: function (e) {
    var $this = this;
    var data = e.currentTarget.dataset.data;
    if ($this.data.curDeviceYear.id == data.id) {
      return;
    } else {
      $this.setData({
        deviceWeekListIntv: $this.data.deviceWeekList
      })
      $this.zhou(data.id);
      $this.setData({
        curDeviceYearIntv: $this.data.curDeviceYear,
        curDeviceYear:data,
        'deviceFilterList[1].name': data.name,
        "curFilterTab.id": 'deviceWeek'
      })
    }
  },
  changeDeviceWeek: function (e) {
    var $this = this;
    var data = e.currentTarget.dataset.data;
    $this.setData({
      scrolltop: 0,
      curFilterTab: null,
      curDeviceYearIntv:null,
      deviceWeekListIntv:[],
      curDeviceWeek:data,
      'deviceFilterList[2].name': data.name,
    })
    if ($this.data.curDeviceClass.id == 0) {
      $this.getDeviceBrandData();
    } else {
      $this.getDeviceOsData();
    }
  },
  changeDeviceClass: function (e) {
    var $this = this;
    var data = e.currentTarget.dataset.data;
    $this.setData({
      scrolltop: 0,
      curFilterTab: null,
      curDeviceClass: data,
      'deviceFilterList[0].name': data.name
    })
    if (data.id == 0) {
      $this.getDeviceBrandData();
    } else {
      $this.getDeviceOsData();
    }
  },

  //channel
  switchChannelIndex: function (fun) {
    var $this = this;
    if ($this.data.channelClassList.length <= 0) {
      $this.getChannelClass(function (res) {
        var channelClassList = res.data;
        $this.getChannelTime(function (resp) {
          var channelTimeList = resp.data;
          $this.getChannelChannel(function (respo) {
            var channelChannelList = respo.data;
            channelClassList.splice(0, 0, {
              ID: 0,
              ClassName: "全部分类"
            });
            channelChannelList.splice(0, 0, {
              channel_id: 0,
              channel_name: "全部渠道"
            });
            var curChannelSecondClass={ID:0};
            $this.setData({
              channelClassList: channelClassList,
              channelTimeList: channelTimeList,
              channelChannelList:channelChannelList,
              curChannelClass: channelClassList[0],
              curChannelTime: channelTimeList[0],
              curChannelChannel: channelChannelList[0],
              curChannelSecondClass: curChannelSecondClass,
              'channelFilterList[0].name': channelClassList[0].ClassName,
              'channelFilterList[1].name': channelTimeList[0].TimeName,
              'channelFilterList[2].name': channelChannelList[0].channel_name
            })
            $this.getChannelData();
          }, null, null)
        }, null, null)
      }, null, null)
    }
  },
  getChannelClass: function (sfun, ffun, cfun) {
    wx.request({
      url: 'https://api.iresearch.cn/Content/Json/Classes166.json',
      method: 'GET',
      success: function (res) {
        if (typeof sfun == "function") {
          sfun(res);
        }
      },
      fail: function (res) {
        if (typeof ffun == "function") {
          ffun(res);
        }
      },
      complete: function (res) {
        if (typeof cfun == "function") {
          cfun(res);
        }
        wx.hideNavigationBarLoading();
      }
    })
  },
  getChannelSecondClass: function (id, sfun, ffun, cfun) {
    wx.request({
      url: 'https://api.iresearch.cn/Content/Json/Classes' + id + '.json',
      method: 'GET',
      success: function (res) {
        if (typeof sfun == "function") {
          sfun(res);
        }
      },
      fail: function (res) {
        if (typeof ffun == "function") {
          ffun(res);
        }
      },
      complete: function (res) {
        if (typeof cfun == "function") {
          cfun(res);
        }
        wx.hideNavigationBarLoading();
      }
    })
  },
  getMinSecondClass: function (id, sfun, ffun, cfun) {
    wx.request({
      // Content/Json/MiniAppKClass1.json ? t = 1533102400560
      url: 'https://api.iresearch.cn/Content/Json/MiniAppKClass' + id + '.json?t='+(new Date).getTime(),
      method: 'GET',
      success: function (res) {
        if (typeof sfun == "function") {
          sfun(res);
        }
      },
      fail: function (res) {
        if (typeof ffun == "function") {
          ffun(res);
        }
      },
      complete: function (res) {
        if (typeof cfun == "function") {
          cfun(res);
        }
        wx.hideNavigationBarLoading();
      }
    })
  },
  getChannelChannel: function (sfun, ffun, cfun) {
    wx.request({
      url: 'https://api.iresearch.cn/Content/Json/ChannelClass.json',
      method: 'GET',
      success: function (res) {
        if (typeof sfun == "function") {
          sfun(res);
        }
      },
      fail: function (res) {
        if (typeof ffun == "function") {
          ffun(res);
        }
      },
      complete: function (res) {
        if (typeof cfun == "function") {
          cfun(res);
        }
        wx.hideNavigationBarLoading();
      }
    })
  },
  getChannelTime: function (sfun, ffun, cfun) {
    wx.request({
      url: 'https://api.iresearch.cn/Content/Json/channelMonthSpans.json',
      method: 'GET',
      success: function (res) {
        if (typeof sfun == "function") {
          sfun(res);
        }
      },
      fail: function (res) {
        if (typeof ffun == "function") {
          ffun(res);
        }
      },
      complete: function (res) {
        if (typeof cfun == "function") {
          cfun(res);
        }
        wx.hideNavigationBarLoading();
      }
    })
  },
  getChannelData: function () {
    wx.showLoading({
      title: '请稍后'
    });
    var $this = this;
    $this.setData({
      channelIsSearch:false,
      channelKeyword:'',
      channelLoadName: "努力加载中。。。"
    });
    wx.request({
      url: 'https://api.iresearch.cn/api/Channel/GetChannelData/',
      data: {
        channelId: $this.data.curChannelChannel.channel_id,
        fclassId: $this.data.curChannelClass.ID,
        kclassId: $this.data.curChannelSecondClass.ID,
        orderId:1,
        timeId: $this.data.curChannelTime.ID,
        pageIndex: $this.data.channelPageIndex,
        pageSize: $this.data.channelPageSize
      },
      method: 'GET',
      success: function (res) {
        if (res.data.Status == 1) {
          //console.log(res.data.List)
          if (res.data.List == null || res.data.List.length <= 0) {
            $this.setData({
              channelDataList: []
            })
          } else {
            for (let i = 0; i < res.data.List.length; i++) {
              res.data.List[i].app_logo = 'http://xmg.iresearchdata.cn' + res.data.List[i].app_logo.replace('\\', '/');
              res.data.List[i].num = res.data.List[i].num.toFixed(1);
              res.data.List[i].rate = res.data.List[i].rate.toFixed(1);
            }
            $this.setData({
              channelDataList: res.data.List
            })
          }
        } else {
          console.log("程序处理失败，请稍后重试！")
        }
      },
      fail: function () {
        console.log("网络连接失败，请稍后重试！")
      },
      complete: function () {
        $this.setData({
          channelDataLoading: false
        })
        wx.hideLoading();
        wx.hideNavigationBarLoading();
      }
    })
  },
  appendChannelData: function () {
    var $this = this;
    wx.request({
      url: 'https://api.iresearch.cn/api/Channel/GetChannelData/',
      data: {
        channelId: $this.data.curChannelChannel.channel_id,
        fclassId: $this.data.curChannelClass.ID,
        kclassId: $this.data.curChannelSecondClass.ID,
        orderId: 1,
        timeId: $this.data.curChannelTime.ID,
        pageIndex: $this.data.channelPageIndex,
        pageSize: $this.data.channelPageSize
      },
      method: 'GET',
      success: function (res) {
        if (res.data.Status == 1) {
          //console.log(res.data.List)
          if (res.data.List != null && res.data.List.length > 0) {
            for (let i = 0; i < res.data.List.length; i++) {
              res.data.List[i].app_logo = 'http://xmg.iresearchdata.cn' + res.data.List[i].app_logo.replace('\\', '/');
              res.data.List[i].num = res.data.List[i].num.toFixed(1);
              res.data.List[i].rate = res.data.List[i].rate.toFixed(1);
            }
            var data = $this.data.channelDataList.concat(res.data.List);
            $this.setData({
              channelDataList: data
            })
          } else {
            $this.setData({
              channelLoadName: "没有更多内容。。。"
            });
          }
        } else {
          console.log("程序处理失败，请稍后重试！")
        }
      },
      fail: function () {
        console.log("网络连接失败，请稍后重试！")
      },
      complete: function () {
        $this.setData({
          channelDataLoading: false
        })
        wx.hideNavigationBarLoading();
      }
    })
  },
  appendMindataData: function () {
    var $this = this;
    wx.request({
      // http://localhost:27431/api/MiniApp/GetWxMinidataList?classid=1&wx_categoryid=1&timeid=201806&pagesize=10&pageindex=1
      url: 'https://api.iresearch.cn/api/MiniApp/GetWxMinidataList/',
      data: {
        // channelId: $this.data.curChannelChannel.channel_id,
        wx_categoryid: $this.data.curMindataClass.wx_categoryid,
        classid: $this.data.curMindataSecondClass.wx_classid,
        // orderId: 1,
        timeid: $this.data.curMindataTime.ID,
        pageindex: $this.data.mindataPageIndex,
        pagesize: $this.data.mindataPageSize
      },
      method: 'GET',
      success: function (res) {
        if (res.data.Status == 1) {
          //console.log(res.data.List)
          if (res.data.List != null && res.data.List.length > 0) {
            // for (let i = 0; i < res.data.List.length; i++) {
            //   res.data.List[i].app_logo = 'http://xmg.iresearchdata.cn' + res.data.List[i].app_logo.replace('\\', '/');
            //   res.data.List[i].num = res.data.List[i].num.toFixed(1);
            //   res.data.List[i].rate = res.data.List[i].rate.toFixed(1);
            // }
            var data = $this.data.mindataDataList.concat(res.data.List);
            $this.setData({
              mindataDataList: data
            })
          } else {
            $this.setData({
              mindataLoadName: "没有更多内容。。。"
            });
          }
        } else {
          console.log("程序处理失败，请稍后重试！")
        }
      },
      fail: function () {
        console.log("网络连接失败，请稍后重试！")
      },
      complete: function () {
        $this.setData({
          mindataDataLoading: false
        })
        wx.hideNavigationBarLoading();
      }
    })
  },
  loadNextChannelData: function (e) {
    var $this = this;
    if ($this.data.channelDataLoading == true) {
      return;
    }
    $this.setData({
      channelDataLoading: true,
      channelPageIndex: $this.data.channelPageIndex + 1
    })
    if ($this.data.channelIsSearch) {
      $this.appendSearchChannelData();
    } else {
      $this.appendChannelData();
    }
  },
  loadNextMindataData: function (e) {
    var $this = this;
    if ($this.data.mindataDataLoading == true) {
      return;
    }
    $this.setData({
      mindataDataLoading: true,
      mindataPageIndex: $this.data.mindataPageIndex + 1
    })
    if ($this.data.mindataIsSearch) {
      $this.appendSearchMindataData();
    } else {
      $this.appendMindataData();
    }
  },
  changeChannelClass: function (e) {
    var $this = this;
    var data = e.currentTarget.dataset.data;
    if (data.ID == 0) {
      $this.setData({
        scrolltop: 0,
        curFilterTab: null,
        channelPageIndex: 1,
        curChannelClass: data,
        curChannelSecondClass:{ID:0},
        curChannelClassId: data.ID,
        curChannelClassLevel: 1,
        'channelFilterList[0].name': data.ClassName
      })
      $this.getChannelData();
    }
    else {
      $this.setData({
        curChannelClass: data
      })
      $this.getChannelSecondClass(data.ID, function (res) {
        res.data.splice(0, 0, {
          ID: 0,
          ClassName: "全部"
        });
        $this.setData({
          channelSecondClassList: res.data
        })
      }, null, null);
    }
  },
  changeByChannelClass: function (e) {
    var $this = this;
    var data = e.currentTarget.dataset.data;
    if (data.ID == 0) {
      $this.setData({
        scrolltop: 0,
        curFilterTab: null,
        channelPageIndex: 1,
        curChannelClassId: $this.data.curChannelClass.ID,
        curChannelClassLevel: 1,
        curChannelSecondClass: data,
        'channelFilterList[0].name': $this.data.curChannelClass.ClassName
      })
      $this.getChannelData();
    } else {
      $this.setData({
        scrolltop: 0,
        curFilterTab: null,
        channelPageIndex: 1,
        curChannelClassId: data.ID,
        curChannelClassLevel: 2,
        curChannelSecondClass: data,
        'channelFilterList[0].name': data.ClassName
      })
      $this.getChannelData();
    }
  },
  changeminClass: function (e) {
    var $this = this;
    var data = e.currentTarget.dataset.data;
    if (data.wx_categoryid == 0) {
      $this.setData({
        scrolltop: 0,
        curFilterTab: null,
        mindataPageIndex: 1,
        curMindataClass: data,
        curMindataSecondClass: { wx_classid: 0 },
        curMindataClassId: data.wx_categoryid,
        curMindataClassLevel: 1,
        'mindataFilterList[0].name': data.wx_categoryname_cn
      })
      $this.getMindataData();
    }
    else {
      $this.setData({
        curMindataClass: data
      })
      $this.getMinSecondClass(data.wx_categoryid, function (res) {
        res.data.splice(0, 0, {
          wx_classid: 0,
          wx_classname_cn: "全部"
        });
        $this.setData({
          mindataSecondClassList: res.data
        })
      }, null, null);
    }
  },
  changeByMinClass: function (e) {
    var $this = this;
    var data = e.currentTarget.dataset.data;
    if (data.wx_classid == 0) {
      $this.setData({
        scrolltop: 0,
        curFilterTab: null,
        mindataPageIndex: 1,
        curMindataClassId: $this.data.curMindataClass.wx_categoryid,
        curMindataClassLevel: 1,
        curMindataSecondClass: data,
        'mindataFilterList[0].name': $this.data.curMindataClass.wx_categoryname_cn
      })
      $this.getMindataData();
    } else {
      $this.setData({
        scrolltop: 0,
        curFilterTab: null,
        mindataPageIndex: 1,
        curMindataClassId: data.wx_categoryid,
        curMindataClassLevel: 2,
        curMindataSecondClass: data,
        'mindataFilterList[0].name': data.wx_classname_cn
      })
      $this.getMindataData();
    }
  },
  changeChannelTime: function (e) {
    var $this = this;
    var data = e.currentTarget.dataset.data;
    $this.setData({
      scrolltop: 0,
      curFilterTab: null,
      channelPageIndex: 1,
      curChannelTime: data,
      'channelFilterList[1].name': data.TimeName
    })
    if ($this.data.channelIsSearch) {
      $this.getChannelSearchData();
    } else {
      $this.getChannelData();
    }
  },
  changeMindataTime: function (e) {
    var $this = this;
    var data = e.currentTarget.dataset.data;
    $this.setData({
      scrolltop: 0,
      curFilterTab: null,
      mindataPageIndex: 1,
      curMindataTime: data,
      'mindataFilterList[1].name': data.TimeName
    })
    if ($this.data.mindataIsSearch) {
      $this.getMindataSearchData();
    } else {
      $this.getMindataData();
    }
  },
  changeChannelChannel: function (e) {
    var $this = this;
    var data = e.currentTarget.dataset.data;
    $this.setData({
      scrolltop: 0,
      curFilterTab: null,
      channelPageIndex: 1,
      curChannelChannel: data,
      'channelFilterList[2].name': data.channel_name
    })
    $this.getChannelData();
  },
  channelSearch: function (e) {
    var $this = this;
    $this.setData({
      scrolltop: 0,
      channelPageIndex: 1,
      channelIsSearch: true
    });
    $this.getChannelSearchData();
  },
  mindataSearch: function (e) {
    var $this = this;
    $this.setData({
      scrolltop: 0,
      mindataPageIndex: 1,
      mindataIsSearch: true
    });
    $this.getMindataSearchData();
  },
  channelKeywordInput: function (e) {
    this.setData({
      channelKeyword: e.detail.value
    })
  },
  getChannelSearchData:function(){
    var $this = this;
    wx.showLoading({
      title: '请稍后'
    });
    $this.setData({
      scrolltop: 0,
      channelIsSearch: true,
      curChannelClass:$this.data.channelClassList[0],
      curChannelChannel:$this.data.channelChannelList[0],
      'channelFilterList[0].name': $this.data.channelClassList[0].ClassName,
      'channelFilterList[2].name': $this.data.channelChannelList[0].channel_name,
      channelLoadName: "努力加载中。。。"
    });
    wx.request({
      url: 'https://api.iresearch.cn/api/Channel/Search/',
      data: {
        keyword: $this.data.channelKeyword,
        timeid: $this.data.curChannelTime.ID,
        pageIndex: $this.data.channelPageIndex,
        pageSize: $this.data.channelPageSize
      },
      method: 'GET',
      success: function (res) {
        if (res.data.Status == 1) {
          //console.log(res.data.List)
          if (res.data.List == null || res.data.List.length <= 0) {
            $this.setData({
              channelDataList: []
            })
          } else {
            for (let i = 0; i < res.data.List.length; i++) {
              res.data.List[i].app_logo = 'http://xmg.iresearchdata.cn' + res.data.List[i].app_logo.replace('\\', '/');
              res.data.List[i].num = res.data.List[i].num.toFixed(1);
              res.data.List[i].rate = res.data.List[i].rate.toFixed(1);
            }
            $this.setData({
              channelDataList: res.data.List
            })
          }
        } else {
          console.log("程序处理失败，请稍后重试！")
        }
      },
      fail: function () {
        console.log("网络连接失败，请稍后重试！")
      },
      complete: function () {
        $this.setData({
          channelDataLoading: false
        })
        wx.hideLoading();
        wx.hideNavigationBarLoading();
      }
    })
  },
  getMindataSearchData: function () {
    var $this = this;
    wx.showLoading({
      title: '请稍后'
    });
    $this.setData({
      scrolltop: 0,
      mindataIsSearch: true,
      curMindataClass: $this.data.mindataClassList[0],
      // curChannelChannel: $this.data.channelChannelList[0],
      'mindataFilterList[0].name': $this.data.mindataClassList[0].wx_categoryname_cn,
      // 'mindataFilterList[2].name': $this.data.channelChannelList[0].channel_name,
      mindataLoadName: "努力加载中。。。"
    });
    wx.request({
      // http://localhost:27431/api/MiniApp/GetWxMiniSearch?KeyWord=a&Timer=201806&pageSize=10&pageindex=1
      url: 'https://api.iresearch.cn/api/MiniApp/GetWxMiniSearch/',
      data: {
        KeyWord: $this.data.mindataKeyword,
        Timer: $this.data.curMindataTime.ID,
        pageindex: $this.data.mindataPageIndex,
        pageSize: $this.data.mindataPageSize
      },
      method: 'GET',
      success: function (res) {
        if (res.data.Status == 1) {
          //console.log(res.data.List)
          if (res.data.List == null || res.data.List.length <= 0) {
            $this.setData({
              mindataDataList: []
            })
          } else {
            // for (let i = 0; i < res.data.List.length; i++) {
            //   res.data.List[i].app_logo = 'http://xmg.iresearchdata.cn' + res.data.List[i].app_logo.replace('\\', '/');
            //   res.data.List[i].num = res.data.List[i].num.toFixed(1);
            //   res.data.List[i].rate = res.data.List[i].rate.toFixed(1);
            // }
            $this.setData({
              mindataDataList: res.data.List
            })
          }
        } else {
          console.log("程序处理失败，请稍后重试！")
        }
      },
      fail: function () {
        console.log("网络连接失败，请稍后重试！")
      },
      complete: function () {
        $this.setData({
          mindataDataLoading: false
        })
        wx.hideLoading();
        wx.hideNavigationBarLoading();
      }
    })
  },
  appendSearchChannelData:function(){
    var $this = this;
    wx.request({
      url: 'https://api.iresearch.cn/api/Channel/Search/',
      data: {
        keyword: $this.data.channelKeyword,
        timeid: $this.data.curChannelTime.ID,
        pageIndex: $this.data.channelPageIndex,
        pageSize: $this.data.channelPageSize
      },
      method: 'GET',
      success: function (res) {
        if (res.data.Status == 1) {
          //console.log(res.data.List)
          if (res.data.List != null && res.data.List.length > 0) {
            for (let i = 0; i < res.data.List.length; i++) {
              res.data.List[i].app_logo = 'http://xmg.iresearchdata.cn' + res.data.List[i].app_logo.replace('\\', '/');
              res.data.List[i].num = res.data.List[i].num.toFixed(1);
              res.data.List[i].rate = res.data.List[i].rate.toFixed(1);
            }
            var data = $this.data.channelDataList.concat(res.data.List);
            $this.setData({
              channelDataList: data
            })
          } else {
            $this.setData({
              channelLoadName: "没有更多内容。。。"
            });
          }
        } else {
          console.log("程序处理失败，请稍后重试！")
        }
      },
      fail: function () {
        console.log("网络连接失败，请稍后重试！")
      },
      complete: function () {
        $this.setData({
          channelDataLoading: false
        })
        wx.hideNavigationBarLoading();
      }
    })
  },
  appendSearchMindataData: function () {
    var $this = this;
    wx.request({
      // http://localhost:27431/api/MiniApp/GetWxMiniSearch?KeyWord=a&Timer=201806&pageSize=10&pageindex=1
      url: 'https://api.iresearch.cn/api/MiniApp/GetWxMiniSearch/',
      data: {
        KeyWord: $this.data.mindataKeyword,
        Timer: $this.data.curMindataTime.ID,
        pageindex: $this.data.mindataPageIndex,
        pageSize: $this.data.mindataPageSize
      },
      method: 'GET',
      success: function (res) {
        if (res.data.Status == 1) {
          //console.log(res.data.List)
          if (res.data.List != null && res.data.List.length > 0) {
            // for (let i = 0; i < res.data.List.length; i++) {
            //   res.data.List[i].app_logo = 'http://xmg.iresearchdata.cn' + res.data.List[i].app_logo.replace('\\', '/');
            //   res.data.List[i].num = res.data.List[i].num.toFixed(1);
            //   res.data.List[i].rate = res.data.List[i].rate.toFixed(1);
            // }
            var data = $this.data.mindataDataList.concat(res.data.List);
            $this.setData({
              mindataDataList: data
            })
          } else {
            $this.setData({
              mindataLoadName: "没有更多内容。。。"
            });
          }
        } else {
          console.log("程序处理失败，请稍后重试！")
        }
      },
      fail: function () {
        console.log("网络连接失败，请稍后重试！")
      },
      complete: function () {
        $this.setData({
          mindataDataLoading: false
        })
        wx.hideNavigationBarLoading();
      }
    })
  },
  //overseas
  switchOverseasIndex: function (fun) {
    var $this = this;
    if($this.data.overseasClassList.length<=0){
      $this.getOverseasClass(function(res){
        var overseasClassList = res.data;
        $this.getOverseasTime(function(resp){
          var overseasTimeList=resp.data;
          $this.getOverseasOverseas(function(respo){
            var overseasOverseasList=respo.data;
            overseasClassList.splice(0, 0, {
              ID: 0,
              className: "全部分类"
            });
            
            var curOverseasSecondClass = { ID: 0 };
            $this.setData({
              overseasClassList: overseasClassList,
              overseasTimeList: overseasTimeList,
              overseasOverseasList: overseasOverseasList,
              curOverseasClass: overseasClassList[0],
              curOverseasTime: overseasTimeList[0],
              curOverseasOverseas: overseasOverseasList[0],
              curOverseasSecondClass: curOverseasSecondClass,
              'overseasFilterList[0].name': overseasClassList[0].className,
              'overseasFilterList[1].name': overseasTimeList[0].TimeName,
              'overseasFilterList[2].name': overseasOverseasList[0].cname
            })
            $this.getoverseasData();
          }, null, null)
        }, null, null)
      }, null, null)
    }
  },
  //获取海外指数大类Data
getOverseasClass: function (sfun, ffun, cfun){
wx.request({
  url: 'https://api.iresearch.cn/Content/Json/OverSeaClass.json',
  method:'GET',
  success: function (res) {
    if (typeof sfun == "function") {
      sfun(res);
    }
  },
  fail: function (res) {
    if (typeof ffun == "function") {
      ffun(res);
    }
  },
  complete: function (res) {
    if (typeof cfun == "function") {
      cfun(res);
    }
    wx.hideNavigationBarLoading();
  }
})
},
//获取海外指数国家Data
getOverseasOverseas: function (sfun, ffun, cfun) {
  wx.request({
    url: 'https://api.iresearch.cn/Content/Json/OverSeasCountryCode.json',
    method: 'GET',
    success: function (res) {
      if (typeof sfun == "function") {
        sfun(res);
      }
    },
    fail: function (res) {
      if (typeof ffun == "function") {
        ffun(res);
      }
    },
    complete: function (res) {
      if (typeof cfun == "function") {
        cfun(res);
      }
      wx.hideNavigationBarLoading();
    }
  })
},
//获取海外指数时间Data
getOverseasTime: function (sfun, ffun, cfun) {
  wx.request({
    url: 'https://api.iresearch.cn/Content/Json/OverSeasTimeSpans.json',
    method: 'GET',
    success: function (res) {
      if (typeof sfun == "function") {
        sfun(res);
      }
    },
    fail: function (res) {
      if (typeof ffun == "function") {
        ffun(res);
      }
    },
    complete: function (res) {
      if (typeof cfun == "function") {
        cfun(res);
      }
      wx.hideNavigationBarLoading();
    }
  })
},
//获取海外指数Data
getoverseasData: function () {
  wx.showLoading({
    title: '请稍后'
  });
  var $this = this;
  $this.setData({
    overseasIsSearch: false,
    overseasKeyword: '',
    overseasLoadName: "努力加载中。。。"
  });
  wx.request({
    url: 'https://api.iresearch.cn/api/OverSeas/GetOverseasData/',
    data:{
      Classid: $this.data.curOverseasClass.ID,
      CountryName: $this.data.curOverseasOverseas.code,
      Timer: $this.data.curOverseasTime.timeID,
      pageIndex: $this.data.overseasPageIndex,
      pageSize: $this.data.overseasPageSize
    },
    method: 'GET',
    success: function (res) {
      if (res.data.Status == 1) {
        if (res.data.List == null || res.data.List.length <= 0) {
          $this.setData({
            OverseasDataList: []
          })
        } else {
          for (let i = 0; i < res.data.List.length; i++) {
            res.data.List[i].AppLogo = 'http://index.iresearch.com.cn' + res.data.List[i].AppLogo.replace('\\', '/');
            res.data.List[i].peneTrance = res.data.List[i].peneTrance.toFixed(1);
            res.data.List[i].userNum = res.data.List[i].userNum.toFixed(1);
          }
          $this.setData({
            OverseasDataList: res.data.List
          })
        }
      } else {
        console.log("程序处理失败，请稍后重试！")
      }
    },
    fail: function () {
      console.log("网络连接失败，请稍后重试！")
    },
    complete: function () {
      $this.setData({
        overseasDataLoading: false
      })
      wx.hideLoading();
      wx.hideNavigationBarLoading();
    }
  })
},
//分页显示
  appendOverseasData: function () {
    var $this = this;
    wx.request({
      url: 'https://api.iresearch.cn/api/OverSeas/GetOverseasData/',
      data: {
        Classid: $this.data.curOverseasClass.ID,
        CountryName: $this.data.curOverseasOverseas.code,
        Timer: $this.data.curOverseasTime.timeID,
        pageIndex: $this.data.overseasPageIndex,
        pageSize: $this.data.overseasPageSize
      },
      method: 'GET',
      success: function (res) {
        if (res.data.Status == 1) {
          if (res.data.List != null && res.data.List.length > 0) {
            for (let i = 0; i < res.data.List.length; i++) {
              res.data.List[i].AppLogo = 'http://index.iresearch.com.cn' + res.data.List[i].AppLogo.replace('\\', '/');
              res.data.List[i].peneTrance = res.data.List[i].peneTrance.toFixed(1);
              res.data.List[i].userNum = res.data.List[i].userNum.toFixed(1);
            }
            var data = $this.data.OverseasDataList.concat(res.data.List);
            $this.setData({
              OverseasDataList: data
            })
          } else {
            $this.setData({
              overseasLoadName: "没有更多内容。。。"
            });
          }
        } else {
          console.log("程序处理失败，请稍后重试！")
        }
      },
      fail: function () {
        console.log("网络连接失败，请稍后重试！")
      },
      complete: function () {
        $this.setData({
          overseasDataLoading: false
        })
        wx.hideLoading();
        wx.hideNavigationBarLoading();
      }
    })
  },
  loadNextOverseasData: function (e) {
    var $this = this;
    if ($this.data.overseasDataLoading == true) {
      return;
    }
    $this.setData({
      overseasDataLoading: true,
      overseasPageIndex: $this.data.overseasPageIndex + 1
    })
    if ($this.data.overseasIsSearch) {
      $this.appendSearchOverseasData();
    } else {
      $this.appendOverseasData();
    }
  },
  //海外指数改变类事件
  changeOverseasClass: function (e) {
    var $this = this;
    var data = e.currentTarget.dataset.data;
    
      $this.setData({
        scrolltop: 0,
        curFilterTab: null,
        overseasPageIndex: 1,
        curOverseasClass: data,
        curOverseasSecondClass: { ID: 0 },
        curOverseasClassId: data.ID,
        curOverseasClassLevel: 1,
        'overseasFilterList[0].name': data.className
      })
      $this.getoverseasData();
    
    
  },
  //海外指数改变时间事件
  changeOverseasTime: function (e) {
    var $this = this;
    var data = e.currentTarget.dataset.data;
    $this.setData({
      scrolltop: 0,
      curFilterTab: null,
      overseasPageIndex: 1,
      curOverseasTime: data,
      'overseasFilterList[1].name': data.TimeName
    })
    if ($this.data.overseasIsSearch) {
      $this.getoverseasSearchData();
    } else {
      $this.getoverseasData();
    }
  },
  //海外指数点变国家事件
  changeOverseasOverseas: function (e) {
    var $this = this;
    var data = e.currentTarget.dataset.data;
    $this.setData({
      scrolltop: 0,
      curFilterTab: null,
      overseasPageIndex: 1,
      curOverseasOverseas: data,
      'overseasFilterList[2].name': data.cname
    })
    $this.getoverseasData();
  },
  overseasSearch: function (e) {
    var $this = this;
    $this.setData({
      scrolltop: 0,
      overseasPageIndex: 1,
      overseasIsSearch: true
    });
    $this.getoverseasSearchData();
  },
  overseasKeywordInput: function (e) {
    this.setData({
      overseasKeyword: e.detail.value
    })
  },
  getoverseasSearchData: function () {
    var $this = this;
    wx.showLoading({
      title: '请稍后'
    });
    $this.setData({
      scrolltop: 0,
      overseasIsSearch: true,
      curOverseasClass: $this.data.overseasClassList[0],
      'overseasFilterList[0].name': $this.data.overseasClassList[0].className,
      channelLoadName: "努力加载中。。。"
    });
    wx.request({
      url: 'https://api.iresearch.cn/api/OverSeas/getSearchData/',
      data: {
        KeyWord: $this.data.overseasKeyword,
        CountryName: $this.data.curOverseasOverseas.code,
        Timer: $this.data.curOverseasTime.timeID,
        pageIndex: $this.data.overseasPageIndex,
        pageSize: $this.data.overseasPageSize
      },
      method: 'GET',
      success: function (res) {
        if (res.data.Status == 1) {
          if (res.data.List == null || res.data.List.length <= 0) {
            $this.setData({
              OverseasDataList: []
            })
          } else {
            for (let i = 0; i < res.data.List.length; i++) {
              res.data.List[i].AppLogo = 'http://index.iresearch.com.cn' + res.data.List[i].AppLogo.replace('\\', '/');
              res.data.List[i].peneTrance = res.data.List[i].peneTrance.toFixed(1);
              res.data.List[i].userNum = res.data.List[i].userNum.toFixed(1);
            }
            $this.setData({
              OverseasDataList: res.data.List
            })
          }
        } else {
          console.log("程序处理失败，请稍后重试！")
        }
      },
      fail: function () {
        console.log("网络连接失败，请稍后重试！")
      },
      complete: function () {
        $this.setData({
          overseasDataLoading: false
        })
        wx.hideLoading();
        wx.hideNavigationBarLoading();
      }
    })
  },
  appendSearchOverseasData: function () {
    var $this = this;
    wx.request({
      url: 'https://api.iresearch.cn/api/OverSeas/getSearchData/',
      data: {
        KeyWord: $this.data.overseasKeyword,
        CountryName: $this.data.curOverseasOverseas.code,
        Timer: $this.data.curOverseasTime.timeID,
        pageIndex: $this.data.overseasPageIndex,
        pageSize: $this.data.overseasPageSize
      },
      method: 'GET',
      success: function (res) {
        if (res.data.Status == 1) {
          if (res.data.List != null && res.data.List.length > 0) {
            for (let i = 0; i < res.data.List.length; i++) {
              res.data.List[i].AppLogo = 'http://index.iresearch.com.cn' + res.data.List[i].AppLogo.replace('\\', '/');
              res.data.List[i].peneTrance = res.data.List[i].peneTrance.toFixed(1);
              res.data.List[i].userNum = res.data.List[i].userNum.toFixed(1);
            }
            var data = $this.data.OverseasDataList.concat(res.data.List);
            $this.setData({
              OverseasDataList: data
            })
          } else {
            $this.setData({
              overseasLoadName: "没有更多内容。。。"
            });
          }
        } else {
          console.log("程序处理失败，请稍后重试！")
        }
      },
      fail: function () {
        console.log("网络连接失败，请稍后重试！")
      },
      complete: function () {
        $this.setData({
          overseasDataLoading: false
        })
        wx.hideLoading();
        wx.hideNavigationBarLoading();
      }
    })
  },
  //wxdata
  switchWxdataIndex: function (fun) {
    var $this = this;
    if ($this.data.wxdataClassList.length <= 0) {
      $this.getWxdataSecondClass(function (res) {
        var wxdataClassList = res.data;
      
        $this.getWxdataTime(function (resp) {
          var wxdataTimeList = resp.data;
          $this.getWxdataWxdata(function (respo) {
            var wxdataWxdataList = [{ "C_id": 1, "C_name": "微信公众号" }];
            wxdataClassList.splice(0, 0, {
              C_id: 0,
              C_name: "全部分类"
              
            });
            wxdataWxdataList.splice(0, 0, {
              C_id: 0,
              C_name: "微信公众号"

            });
            var curWxdataSecondClass = { C_id: 0 };
            $this.setData({
              wxdataClassList: wxdataClassList,
              wxdataTimeList: wxdataTimeList,
              wxdataWxdataList: wxdataWxdataList,
              curWxdataClass: wxdataClassList[0],
              curWxdataTime: wxdataTimeList[0],
              
              curWxdataSecondClass: curWxdataSecondClass,
              // 'wxdataFilterList[0].name': $this.data.wxdataMenuList[$this.data.curWxdataMenuId].name,
              'wxdataFilterList[0].name': wxdataClassList[0].C_name,
              'wxdataFilterList[1].name': wxdataTimeList[0].TimeName,
              
            })
            $this.getWxdataData();
          }, null, null)
        }, null, null)
      }, null, null)
      
    }
  },


  // minData
  switchMindataIndex: function (fun) {
    var $this = this;
    if ($this.data.mindataClassList.length <= 0) {
      $this.getMindataClass(function (res) {
        var mindataClassList = res.data;

        $this.getMindataTime(function (resp) {
          var mindataTimeList = resp.data;

            // var wxdataWxdataList = [{ "C_id": 1, "C_name": "微信公众号" }];
            mindataClassList.splice(0, 0, {
              wx_categoryid: 0,
              wx_categoryname_cn: "全部分类"

            });
            // wxdataWxdataList.splice(0, 0, {
            //   C_id: 0,
            //   C_name: "微信公众号"

            // });
          var curMindataSecondClass = { wx_classid: 0 };
            $this.setData({
              mindataClassList: mindataClassList,
              mindataTimeList: mindataTimeList,
              // wxdataWxdataList: wxdataWxdataList,
              curMindataClass: mindataClassList[0],
              curMindataTime: mindataTimeList[0],

              curMindataSecondClass: curMindataSecondClass,
              // 'wxdataFilterList[0].name': $this.data.wxdataMenuList[$this.data.curWxdataMenuId].name,
              'mindataFilterList[0].name': mindataClassList[0].wx_categoryname_cn,
              'mindataFilterList[1].name': mindataTimeList[0].TimeName,

            })
            $this.getMindataData();

        }, null, null)
      }, null, null)

    }
  },
  
  getWxdataSecondClass: function (sfun, ffun, cfun) {
    wx.request({
      url: 'https://api.iresearch.cn/Content/Json/WxDatafClass.json',
      method: 'GET',
      success: function (res) {
        if (typeof sfun == "function") {
          sfun(res);
        }
      },
      fail: function (res) {
        if (typeof ffun == "function") {
          ffun(res);
        }
      },
      complete: function (res) {
        if (typeof cfun == "function") {
          cfun(res);
        }
        wx.hideNavigationBarLoading();
      }
    })
  },
  getMindataClass: function (sfun, ffun, cfun) {
    wx.request({
      url: 'https://api.iresearch.cn/Content/Json/MiniAppfClass.json?t='+(new Date).getTime(),
      method: 'GET',
      success: function (res) {
        if (typeof sfun == "function") {
          sfun(res);
        }
      },
      fail: function (res) {
        if (typeof ffun == "function") {
          ffun(res);
        }
      },
      complete: function (res) {
        if (typeof cfun == "function") {
          cfun(res);
        }
        wx.hideNavigationBarLoading();
      }
    })
  },
  getWxdataWxdata: function (sfun, ffun, cfun) {
    wx.request({
      url: 'https://api.iresearch.cn/Content/Json/ChannelClass.json',
      method: 'GET',
      success: function (res) {
        if (typeof sfun == "function") {
          sfun(res);
        }
      },
      fail: function (res) {
        if (typeof ffun == "function") {
          ffun(res);
        }
      },
      complete: function (res) {
        if (typeof cfun == "function") {
          cfun(res);
        }
        wx.hideNavigationBarLoading();
      }
    })
  },
  getWxdataTime: function (sfun, ffun, cfun) {
    wx.request({
      url: 'https://api.iresearch.cn/Content/Json/WxDataMonthSpans.json',
      method: 'GET',
      success: function (res) {
        if (typeof sfun == "function") {
          sfun(res);
        }
      },
      fail: function (res) {
        if (typeof ffun == "function") {
          ffun(res);
        }
      },
      complete: function (res) {
        if (typeof cfun == "function") {
          cfun(res);
        }
        wx.hideNavigationBarLoading();
      }
    })
  },
  getMindataTime: function (sfun, ffun, cfun) {
    wx.request({
      url: 'https://api.iresearch.cn/Content/Json/MiniappMonthSpans.json?t='+(new Date).getTime(),
      method: 'GET',
      success: function (res) {
        if (typeof sfun == "function") {
          sfun(res);
        }
      },
      fail: function (res) {
        if (typeof ffun == "function") {
          ffun(res);
        }
      },
      complete: function (res) {
        if (typeof cfun == "function") {
          cfun(res);
        }
        wx.hideNavigationBarLoading();
      }
    })
  },
  getWxdataData: function () {
    wx.showLoading({
      title: '请稍后'
    });
    var $this = this;
    $this.setData({
      wxdataIsSearch: false,
      wxdataKeyword: '',
      wxdataLoadName: "努力加载中。。。"
    });
    wx.request({
      url: 'https://api.iresearch.cn/api/Wxdata/GetWxDataCT/',
      data: {
        Classid: $this.data.curWxdataClass.C_id,
        KClassid: $this.data.curWxdataSecondClass.C_id,
        Timer: $this.data.curWxdataTime.ID,
        pageIndex: $this.data.wxdataPageIndex,
        pageSize: $this.data.wxdataPageSize
      },
      method: 'GET',
      success: function (res) {
        if (res.data.Status == 1) {
          //console.log(res.data.List)
          if (res.data.List == null || res.data.List.length <= 0) {
            $this.setData({
              wxdataDataList: []
            })
          } else {
            for (let i = 0; i < res.data.List.length; i++) {
              res.data.List[i].logo =  res.data.List[i].logo.replace('\\', '/');
              
              // res.data.List[i].dataNum = res.data.List[i].dataNum.toFixed(1);
            }
            $this.setData({
              wxdataDataList: res.data.List
            })
          }
        } else {
          console.log("程序处理失败，请稍后重试！")
        }
      },
      fail: function () {
        console.log("网络连接失败，请稍后重试！")
      },
      complete: function () {
        $this.setData({
          channelDataLoading: false
        })
        wx.hideLoading();
        wx.hideNavigationBarLoading();
      }
    })
  },
  getMindataData: function () {
    wx.showLoading({
      title: '请稍后'
    });
    var $this = this;
    $this.setData({
      mindataIsSearch: false,
      mindataKeyword: '',
      mindataLoadName: "努力加载中。。。"
    });

    // classid = 1 & wx_categoryid=1 & timeid=201806 & pagesize=10 & pageindex=1
    wx.request({
      url: 'https://api.iresearch.cn/api/MiniApp/GetWxMinidataList',
      data: {
        wx_categoryid: $this.data.curMindataClass.wx_categoryid,
        classid: $this.data.curMindataSecondClass.wx_classid,
        timeid: $this.data.curMindataTime.ID,
        pageindex: $this.data.mindataPageIndex,
        pagesize: $this.data.mindataPageSize
      },
      method: 'GET',
      success: function (res) {
        if (res.data.Status == 1) {
          //console.log(res.data.List)
          if (res.data.List == null || res.data.List.length <= 0) {
            $this.setData({
              mindataDataList: []
            })
          } else {
            // for (let i = 0; i < res.data.List.length; i++) {
            //   res.data.List[i].logo = res.data.List[i].logo.replace('\\', '/');

            //   res.data.List[i].dataNum = res.data.List[i].dataNum.toFixed(1);
            // }
            $this.setData({
              mindataDataList: res.data.List
            })
          }
        } else {
          console.log("程序处理失败，请稍后重试！")
        }
      },
      fail: function () {
        console.log("网络连接失败，请稍后重试！")
      },
      complete: function () {
        $this.setData({
          channelDataLoading: false
        })
        wx.hideLoading();
        wx.hideNavigationBarLoading();
      }
    })
  },
  appendWxdataData: function () {
    var $this = this;
    wx.request({
      url: 'https://api.iresearch.cn/api/Wxdata/GetWxDataCT/',
      data: {
        Classid: $this.data.curWxdataClass.C_id,
        KClassid: $this.data.curWxdataSecondClass.C_id,
        Timer: $this.data.curWxdataTime.ID,
        pageIndex: $this.data.wxdataPageIndex,
        pageSize: $this.data.wxdataPageSize
      },
      method: 'GET',
      success: function (res) {
        if (res.data.Status == 1) {
          //console.log(res.data.List)
          if (res.data.List != null && res.data.List.length > 0) {
            for (let i = 0; i < res.data.List.length; i++) {
              res.data.List[i].logo =  res.data.List[i].logo.replace('\\', '/');
              
              // res.data.List[i].dataNum = res.data.List[i].dataNum.toFixed(1);
            }
            var data = $this.data.wxdataDataList.concat(res.data.List);
            $this.setData({
              wxdataDataList: data
            })
          } else {
            $this.setData({
              wxdataLoadName: "没有更多内容。。。"
            });
          }
        } else {
          console.log("程序处理失败，请稍后重试！")
        }
      },
      fail: function () {
        console.log("网络连接失败，请稍后重试！")
      },
      complete: function () {
        $this.setData({
          wxdataDataLoading: false
        })
        wx.hideNavigationBarLoading();
      }
    })
  },
  loadNextWxdataData: function (e) {
    var $this = this;
    if ($this.data.wxdataDataLoading == true) {
      return;
    }
    $this.setData({
      wxdataDataLoading: true,
      wxdataPageIndex: $this.data.wxdataPageIndex + 1
    })
    if ($this.data.wxdataIsSearch) {
      $this.appendSearchWxdataData();
    } else {
      $this.appendWxdataData();
    }
  },
  changeWxdataClass: function (e) {
    var $this = this;
    var data = e.currentTarget.dataset.data;
    if (data.C_id == 0) {
      $this.setData({
        scrolltop: 0,
        curFilterTab: null,
        wxdataPageIndex: 1,
        curWxdataClass: data,
        curWxdataSecondClass: { C_id: 0 },
        curWxdataClassId: data.C_id,
        curWxdataClassLevel: 1,
        'wxdataFilterList[1].name': data.C_name
      })
      $this.getWxdataData();
    }
    else if (data.C_id == 56)
    {
      $this.setData({
        scrolltop: 0,
        curFilterTab: null,
        wxdataPageIndex: 1,
        curWxdataClass: { C_id: 56 },
        curWxdataSecondClass: data,
        curWxdataClassId: data.C_id,
        curWxdataClassLevel: 1,
        'wxdataFilterList[1].name': data.C_name
      })
      $this.getWxdataData();
    }
    else {
      $this.setData({
        curWxdataClass: data
      })
      $this.getWxdataSecondClass(function (res) {
        res.data.splice(0, 0, {
          C_id: 0,
          C_name: "全部"
        });
        $this.setData({
          wxdataSecondClassList: res.data
        })
      }, null, null);
    }
  },
  changeByWxdataClass: function (e) {
    var $this = this;
    var data = e.currentTarget.dataset.data;

    console.log(data)
    if (data.ID == 0) {
      $this.setData({
        scrolltop: 0,
        curFilterTab: null,
        wxdataPageIndex: 1,
        curWxdataClassId: $this.data.curWxdataClass.C_id,
        curwWxdataClassLevel: 1,
        curWxdataSecondClass: data,
        'wxdataFilterList[0].name': $this.data.curWxdataClass.C_name
      })
      $this.getWxdataData();
    } else {
      $this.setData({
        scrolltop: 0,
        curFilterTab: null,
        wxdataPageIndex: 1,
        curWxdataClassId: data.C_id,
        curWxdataClassLevel: 2,
        curWxdataSecondClass: data,
        'wxdataFilterList[0].name': data.C_name
      })
      $this.getWxdataData();
    }
  },
  changeWxdataTime: function (e) {
    var $this = this;
    var data = e.currentTarget.dataset.data;
    console.log(data)
    $this.setData({
      scrolltop: 0,
      curFilterTab: null,
      wxdataPageIndex: 1,
      curWxdataTime: data,
      'wxdataFilterList[1].name': data.TimeName
    })
    if ($this.data.wxdataIsSearch) {
      $this.getWxdataSearchData();
    } else {
      $this.getWxdataData();
    }
  },
  changeWxdataMenu: function(e){
    var $this = this;
    var data = e.currentTarget.dataset.data;
    console.log(data)

    switch (data.id) {
      case "0":
        $this.switchWxdataIndex();
        break;
      case "1":
        $this.switchMindataIndex();
    }

    $this.setData({
      scrolltop: 0,
      curFilterTab: null,
      wxdataPageIndex: 1,
      curWxdataMenuId: data.id,
      curWxdataMenu: data,
      curWxdataMenuName:data.name,
      curWxdataMenuIsNew:data.isNew
      // 'wxdataFilterList[0].name': data.name
    });

  },
  swichFilterwxData:function(e){
    var $this = this;
    var data = e.currentTarget.dataset.data;
    if ($this.data.curFilterTab != null && $this.data.curFilterTab.id == data) {
      $this.setData({
        curFilterTab: null
      });
      return false;
    }else{
      $this.setData({
        'curFilterTab.id': data
      });
    }

    
  },
  changeWxdataWxdata: function (e) {
    var $this = this;
    var data = e.currentTarget.dataset.data;
    $this.setData({
      scrolltop: 0,
      curFilterTab: null,
      wxdataPageIndex: 1,
      curWxdataChannel: data,
      'wxdataFilterList[2].name': data.channel_name
    })
    $this.getChannelData();
  },
  wxdataSearch: function (e) {
    var $this = this;
    $this.setData({
      scrolltop: 0,
      wxdataPageIndex: 1,
      wxdataIsSearch: true
    });
    $this.getWxdataSearchData();
  },
  wxdataKeywordInput: function (e) {
    this.setData({
      wxdataKeyword: e.detail.value
    })
  },
  mindataKeywordInput: function (e) {
    this.setData({
      mindataKeyword: e.detail.value
    })
  },
  getWxdataSearchData: function () {
    var $this = this;
    wx.showLoading({
      title: '请稍后'
    });
    $this.setData({
      scrolltop: 0,
      wxdataIsSearch: true,
      curWxdataClass: $this.data.wxdataClassList[0],
      
      'wxdataFilterList[0].name': $this.data.wxdataClassList[0].C_name,
      
      channelLoadName: "努力加载中。。。"
    });
    wx.request({
      url: 'https://api.iresearch.cn/api/Wxdata/GetWxDataSer/',
      data: {
        KeyWord: $this.data.wxdataKeyword,
        Timer: $this.data.curWxdataTime.ID,
        pageIndex: $this.data.wxdataPageIndex,
        pageSize: $this.data.wxdataPageSize
      },
      method: 'GET',
      success: function (res) {
        if (res.data.Status == 1) {
          //console.log(res.data.List)
          if (res.data.List == null || res.data.List.length <= 0) {
            $this.setData({
              wxdataDataList: []
            })
          } else {
            for (let i = 0; i < res.data.List.length; i++) {
              res.data.List[i].logo =  res.data.List[i].logo.replace('\\', '/');
              
              // res.data.List[i].dataNum = res.data.List[i].dataNum.toFixed(1);
            }
            $this.setData({
              wxdataDataList: res.data.List
            })
          }
        } else {
          console.log("程序处理失败，请稍后重试！")
        }
      },
      fail: function () {
        console.log("网络连接失败，请稍后重试！")
      },
      complete: function () {
        $this.setData({
          wxdataDataLoading: false
        })
        wx.hideLoading();
        wx.hideNavigationBarLoading();
      }
    })
  },
  appendSearchWxdataData: function () {
    var $this = this;
    wx.request({
      url: 'https://api.iresearch.cn/api/Wxdata/GetWxDataSer/',
      data: {
        KeyWord: $this.data.wxdataKeyword,
        Timer: $this.data.curWxdataTime.ID,
        pageIndex: $this.data.wxdataPageIndex,
        pageSize: $this.data.wxdataPageSize
      },
      method: 'GET',
      success: function (res) {
        if (res.data.Status == 1) {
          //console.log(res.data.List)
          if (res.data.List != null && res.data.List.length > 0) {
            for (let i = 0; i < res.data.List.length; i++) {
              res.data.List[i].logo =  res.data.List[i].logo.replace('\\', '/');
              // res.data.List[i].dataNum = res.data.List[i].dataNum.toFixed(1);
            }
            var data = $this.data.wxdataDataList.concat(res.data.List);
            $this.setData({
              wxdataDataList: data
            })
          } else {
            $this.setData({
              wxdataLoadName: "没有更多内容。。。"
            });
          }
        } else {
          console.log("程序处理失败，请稍后重试！")
        }
      },
      fail: function () {
        console.log("网络连接失败，请稍后重试！")
      },
      complete: function () {
        $this.setData({
          wxdataDataLoading: false
        })
        wx.hideNavigationBarLoading();
      }
    })
  },

  //设置页面标题
  onShareAppMessage: function () {
    return {
      title: '艾瑞指数',
      path: '/pages/index/index'
    }
  },

  // 滑动切换标签样式
  switchSwiper: function (e) {
    var $this = this;
    var index = e.detail.current;
    //console.log(index)
    $this.setData({
      curIndexTab: $this.data.indexTabList[index],
      curIndexTabs: index,
    });
    $this.checkCor();
    switch ($this.data.indexTabList[index].id) {
      case "app":
        $this.switchAppIndex();
        break;
      case "pc":
        $this.switchPcIndex();
        break;
      case "video":
        $this.switchVideoIndex();
        break;
      case "ad":
        $this.switchAdIndex();
        break;
      case "device":
        $this.switchDeviceIndex();
        break;
      case "channel":
        $this.switchChannelIndex();
        break;
      case "overseas":
        $this.switchOverseasIndex();
      case "wxdata":
        $this.switchWxdataIndexAll();
    }
  },

  //判断当前滚动超过一屏时，设置tab标题滚动条。
  checkCor: function () {
    // if (this.data.curIndexTabs > 2) {
    //   this.setData({
    //     scrollLeft: 300
    //   })
    // } else {
    //   this.setData({
    //     scrollLeft: 0
    //   })
    // }

    this.setData({
      scrollLeft: this.data.curIndexTabs * 105
    });

  },

  //维度筛选下拉菜单
  swichFilter: function (e) {
    var data = e.currentTarget.dataset.data;
    if (this.data.curFilterTab != null && this.data.curFilterTab.id == data.id) {
      this.setData({
        curFilterTab: null
      });
      return false;
    }
    else {
      this.setData({
        curFilterTab: data
      });
    }
  },

  //点击遮罩层关闭下拉菜单
  maskToggle: function (e) {
    var $this = this;
    if ($this.data.curDeviceYearIntv != null) {
      this.setData({
        curDeviceYear: $this.data.curDeviceYearIntv,
        curDeviceYearIntv: null,
        'deviceFilterList[1].name': $this.data.curDeviceYearIntv.name,
        deviceWeekList: $this.data.deviceWeekListIntv,
        deviceWeekListIntv:[],
        curFilterTab: null
      });
    }
    else {
      this.setData({
        curFilterTab: null
      });
    }

  },

  //加载数据
  fetchConferenceData: function () {
    //。。。 在这里加载数据
    wx.hideNavigationBarLoading();   //模拟页面加载完毕
  },

  listScrollTop: function (e) {//绑定滚动位置
    var h = e.detail.scrollTop;
    this.setData({
      scrolltop: h
    });
  },

  goToTop: function () { //回到顶部
    this.setData({
      scrolltop: 0
    })
  },

  getInfo: function (year, month) {
    var d = new Date();
    var d1;
    // what day is first day
    d.setFullYear(year, month - 1, 1);
    var w1 = d.getDay();
    if (w1 == 0) w1 = 7;
    // total day of month
    d.setFullYear(year, month, 0);
    var dd = d.getDate();
    // first Monday
    if (w1 != 1) d1 = 7 - w1 + 2;
    else d1 = 1;
    var week_count = Math.ceil((dd - d1 + 1) / 7);
    //document.write(year + "年" + month + "月有" + week_count +"周");
    var zhou_arr = [];
    for (var i = 0; i < week_count; i++) {
      var monday = d1 + i * 7;
      var sunday = monday + 6;
      var from = year + "-" + month + "-" + monday;
      var to;
      if (sunday <= dd) {
        to = year + "-" + month + "-" + sunday;
      } else {
        d.setFullYear(year, month - 1, sunday);
        to = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
      }
      zhou_arr.unshift(from + "|" + to);
      //document.write("第"+(i+1)+"周 从" + from + " 到 " + to + "");
    }
    return zhou_arr;
  },

  YMDinfo: function (ymd) {
    var arr = new Array();
    var arr = ymd.split("|");

    return arr[0].split("-")[1] + "月" + arr[0].split("-")[2] + "日" + "-" + arr[1].split("-")[1] + "月" + arr[1].split("-")[2] + "日";
  },

  //通过日期返回当前周
  getYearWeek: function (a, b, c) {
    var d1 = new Date(a, b - 1, c), d2 = new Date(a, 0, 1),
      d = Math.round((d1 - d2) / 86400000);
    return Math.ceil((d + ((d2.getDay() + 1) - 1)) / 7);
  },

  //获取周
  zhou: function (Y) {
    var week_arr = [];
    var _this = this;
    for (var i = 12; i > 0; i--) {
      week_arr.unshift(_this.getInfo(Y, i));
    }
    //定义空字符串
    var str_week = [];
    for (var j = week_arr.length - 1; j >= 0; j--) {
      for (var o = 0; o < week_arr[j].length; o++) {
        //console.log(week_arr[j][o]);
        str_week.unshift(week_arr[j][o]);
      }
    }
    var weekList=[];
    for (var f = str_week.length - 1; f >= 0; f--) {
      var i = 0; i++;
      var f_y = str_week[f].split("|")[0].split("-")[0];
      var f_m = str_week[f].split("|")[0].split("-")[1];
      var f_r = str_week[f].split("|")[0].split("-")[2];
      var t_m = str_week[f].split("|")[1].split("-")[1];
      var t_r = str_week[f].split("|")[1].split("-")[2];
      var ext = f + 1;
      ext = (ext < 10 ? "0" + ext : ext);

      // var $Li = '<li class="list-group-item" from="' + str_week[f].split("|")[0] + '"  to="' + f_y + '-' + t_m + '-' + t_r + '"  ext="' + ext + '" dataTime="' + f_y + ext + '" ><a href="javascript:void(0);">' + f_m + '月' + f_r + '日' + '--' + t_m + '月' + t_r + '日' + '</a></li>';
      var $Li;


      if (Y < _this.data.starTime_y || Y > _this.data.endTime_y) {
        // $Li = null;
      }

      else if (Y == _this.data.starTime_y && ext < _this.data.starTime_ext) {
        // $Li = null;
      }

      else if (Y == _this.data.endTime_y && ext > _this.data.endTime_ext) {
        // $Li = null;
      } else {
        $Li = f_y + ext;
        weekList.push({
          id:$Li,
          name: f_m + '月' + f_r + '日' + '--' + t_m + '月' + t_r + '日'
        })
      }

      if (Y == _this.data.endTime_y && ext == _this.data.endTime_ext) {
        _this.setData({
          wxWeekCur: f_y + ext
        })
      }
    }
    _this.setData({
      wxWeekList: weekList,
      deviceWeekList:weekList
    })
  },
  //app详情
  AppDetialWxml: function (appid,timeid) {
    wx.navigateTo({
      url: '../indexDetails/indexDetails?id='+appid+'&tid='+timeid
    })
  },
  //获取开始截止日期
  getStart: function (start,sfun,ffun) {
    var _this = this;
    wx.request({
      url: 'https://api.iresearch.cn//api/device/GetDataWeek',
      data: {
        start: start
      },
      method: 'GET',
      success: function (msg) {
        if (start) {
          _this.setData({
            starTime: msg.data,
            starTime_y: msg.data.toString().substr(0, 4),
            starTime_ext: msg.data.toString().substr(4)
          })
        } else {
          _this.setData({
            endTime: msg.data,
            endTime_y: msg.data.toString().substr(0, 4),
            endTime_ext: msg.data.toString().substr(4)
          })
        }
        if(typeof sfun=="function"){
          sfun();
        }
      },
      fail: function () {
        console.log("获取时间失败，请稍后重试！")
        if (typeof ffun == "function") {
          ffun();
        }
      }
    });
  }
});
