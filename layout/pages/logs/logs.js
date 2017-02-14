//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  },
  onReady: function(){
    //页面渲染
    console.log("logs onReady...")
  },
  onShow: function(){
    //页面显示
    console.log("logs onShow...")
  },
  onHide: function(){
    //页面隐藏
    console.log("logs onHide...")
  },
  onUnload: function(){
    console.log("logs onUnload...")
  }
})
