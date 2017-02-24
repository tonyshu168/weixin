//index.js
//获取应用实例
var app = getApp()
var location = {
  latitude: 23.099994,
  longitude: 113.324520
}

Page({
  data: {
    markers: [{
      iconPath: "../../image/landmark.png",
      id: 0,
      latitude: location.latitude,
      longitude: location.longitude,
      width: 50,
      height: 50
    }]
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

    wx.getLocation({
      success: (data)=>{
        let location = {}
        location.latitude = data.latitude
        location.longitude = data.longitude
        
        that.setData({location: location})
        console.log(location)
      }
    })
  }
})


