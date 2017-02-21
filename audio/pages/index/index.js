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

    wx.pauseBackgroundAudio()
    wx.getBackgroundAudioPlayerState({
      success: function(res){
        console.log(res)
      }
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

    wx.playBackgroundAudio({
      dataUrl: "http://localhost/红色高跟鞋.mp3",
      title: "红色高跟鞋",
      coverImgUrl: "",
      success: function(data){
        console.log(data)
      },
      fail: function(data){
        console.log(data)
      }
    })
  },
  onReady: function(){

  }
})
