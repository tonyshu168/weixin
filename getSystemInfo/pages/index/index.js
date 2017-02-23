//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },

  getSystem: function(){
    wx.getSystemInfo({
      complete: function(data){
        console.log(data.model)
        console.log(data.pixelRatio)
        console.log(data.windowWidth)
        console.log(data.windowHeight)
        console.log(data.language)
        console.log(data.version)
        console.log(data.platform)
      }
    })
    wx.getNetworkType({
      success: function(data){
        console.log(data)
      }
    })
  },

  phoneCall: function(){
    wx.makePhoneCall({
      phoneNumber: "13058077609",

      success: function(msg){
        console.log(msg)
      }
    })
  }

})
