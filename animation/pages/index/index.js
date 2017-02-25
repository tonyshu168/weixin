//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    animationData: []
  },
  //事件处理函数
  bindViewTap: function() {
    var animation = wx.createAnimation({
      duration: 1500,
      timingFunction: "linear",
      delay: 0,
      tranformOrigin: "50% 50% 0",
    })

    //animation.rotate(90).scale(2).translateY(50).step()
    animation.matrix(1, 2, 0, 2, 50, 50).step()

    this.setData({animationData: animation.export()})
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
  }
})
