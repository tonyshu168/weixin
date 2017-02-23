//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    storage: ["too", "scorll", "bool"],
    storageValue: null
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
  onReady: function(){
    //加载
  },
  onShow: function(){
    //渲染
  },
  onHide: function(){
    //隐藏
  },
  onUnload: function(){
    console.log("Unload")
  },

  setStorage: function(){
    wx.setStorage({
      key: "user",
      data: "张无忌",

      success: function(){
        console.log("save succ!!!")
      },
      fail: function(res){
        console.log(res)
      }
    })
  },

  printStorage: function(){
    var self = this
    wx.getStorage({
      key:"user",

      success: function(data){
        console.log(data.data)
        self.setData({storageValue: data.data})
      }
    })
  }
})
