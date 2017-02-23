//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    latitude: null,
    longitude: null,
    speed: null,
    accuracy: null,
    show: 0
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
  
  getPosition: function(){
    wx.getLocation({
      type: "wgs84",
      
      success: function(data){
        let location = {
          latitude: data.latitude,
          longitude: data.longitude
        }

        wx.chooseLocation({
          latitude: location.loatitude,
          longitude: location.longitude,
          success: function(res){
            console.log(res)
          }
        })
      }
      /*
      success: function(data){
        let point = {
          latitude: data.latitude,
          longitude: data.longitude
        }
        wx.openLocation({
          latitude: point.latitude,
          longitude: point.longitude,
          scale: 5
        })
      }
      */
    })
  }
})
