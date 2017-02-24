//index.js
//获取应用实例
/*
var app = getApp()
Page({
  data: {
    location: {
      latitude: 0.00,
      longitude: 0.00
    },
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

    wx.getLocationSync({
      success: (data)=>{
        console.log(data)
      }
    })
  }
})
*/
Page({
  data: {
    variable: 100,
    markers: [{
      iconPath: "../../image/landmark.png",
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 50,
      height: 50
    }],
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color:"#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      iconPath: '../../image/guanli.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  },

  clickfun: ()=>{
    this.setData({variable: 200})
  },

  onLoad: (options)=>{
    //页面加载
    let self = this
    wx.getLocation({
      success: (data)=>{
        console.log(data)
        //console.log(variable)
      }
    })
  }
  
})
