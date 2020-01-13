// pages/wxsearch/wxsearch.js


Page({

  /**
   * 页面的初始数据
   */
  data: {
    keyword:'',
    isHiddenLoading:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('搜索')
    this.setData({
      keyword: options.keyWord,
    });
    wx.showNavigationBarLoading(); //显示页面加载中状态
    this.getsearchserch();
  },
  bindSearch: function () {
    var key = this.data.keyword;;
    this.getsearchserch();
  },
  researchserch: function (e) {
    this.setData({
      keyword: e.detail.value,
    });
  },
  bindfocus: function () {
    this.setData({
      isSearchFocus: true
    })
  },
  bindblur: function () {
    this.setData({
      isSearchFocus: false
    })
  },
  getsearchserch: function () {
    var _this = this; //获取报告列表
    let keys = this.data.keyword;
    wx.request({
      url: 'https://api.iresearch.cn/api/research/getresearch',
      data: {
        title: keys
      },

      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        "Content-Type": "application/json"
      }, // 设置请求的 header
      success: function (res) {
        wx.hideNavigationBarLoading();
        _this.setData({
          isHiddenLoading: true
        });
        if (res.data.length > 0) {
          _this.setData({
            'nlist.list': res.data,
            lastid: res.data[res.data.length - 1].Id,
            loadName: ''
          })

        } else {
          _this.setData({
            'nlist.list': [],
            loadName: "暂无搜索数据!"
          })
        }
        //this.data.reportlist=res.data;
      },

    })

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '研究观点',
      path: '/pages/research/research'
    }
  }
});