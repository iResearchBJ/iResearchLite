
// 页面
Page({
    data: {
      url: ''
    },
    onLoad(options) {
      let types = options.types,url;

      if (types == 'app'){
        let AppID = options.AppID;
        let AppTID = options.AppTID;

        this.setData({ 
          title:"移动APP指数_艾瑞数据",
          UrlOptions: `AppID=${AppID}&AppTID=${AppTID}&types=app`
        });

        url = `https://api.iresearch.cn/h5/app_wx/appdetails.html?id=${AppID}&tid=${AppTID}`;
      } 
      else if (types == 'pc'){
        let PCID = options.PCID;
        let PCKID = options.PCKID;
        let PCTID=options.PCTID;

        this.setData({
          title: "PC Web指数_艾瑞数据",
          UrlOptions: `PCID=${PCID}&PCKID=${PCKID}&PCTID=${PCTID}&types=pc`
        });

        url = `https://api.iresearch.cn/h5/app_wx/pcdetails.html?id=${PCID}&kid=${PCKID}&tid=${PCTID}`;
      }
      else if(types=='channel'){
        let channelID = options.channelID;

        this.setData({
          title: "移动渠道指数_艾瑞数据",
          UrlOptions: `channelID=${channelID}&types=channel`
        });

        url = `https://api.iresearch.cn/h5/app_wx/channeldetails.html?id=${channelID}`;
      }
      else if (types =='wxdata'){
        let wxdataID = decodeURIComponent(options.wxdataID);

        this.setData({
          title: "新媒体指数_艾瑞数据",
          UrlOptions: `wxdataID=${wxdataID}&types=wxdata`
        });
        
        url = `https://api.iresearch.cn/h5/app_wx/WxdataDetails.html?id=${wxdataID}`;
      }
      else if (types == 'research'){
        let researchID = options.researchID;

        this.setData({
          title: "艾瑞咨询",
          UrlOptions: `researchID=${researchID}&types=research`
        });
        
          url = "https://api.iresearch.cn/h5/html/" + researchID + ".html?" + new Date().getTime();
        
        
      }
          
      this.setData({ url: url })
    },
  onShareAppMessage: function () {
    var _title = this.data.title;
    var UrlOptions = this.data.UrlOptions;
    return {
      title: _title,
      path: '/pages/indexDetails/indexDetails?' + UrlOptions
    }
  }
    
});



