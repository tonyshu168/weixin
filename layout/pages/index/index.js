//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    //数据
  },
  onLoad: function(options){
    //页面加载载
    console.log("index onload...")
  },
  onReady: function(){
    //页面渲染
    console.log("index onReady...")
  },
  onShow: function(){
    //页面显示
    console.log("index onShow...")
  },
  onHide: function(){
    //页面隐藏
    console.log("index onHide...")
  },
  onUnload: function(){
    console.log("index onUnload...")
  }
})
