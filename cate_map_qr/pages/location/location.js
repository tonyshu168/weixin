// pages/location/location.js
Page({
  data:{},
  onLoad:function(options){
    /*
    wx.chooseImage({
      count: 1,
      sizeType: ['origin', "compressed"],
      sourceType: ["album","camera"],
      success: function(data){
        var temFilePaths = data.tempFilePaths;
      }
    })
    */
    wx.scanCode({
      success: (res) => {
        console.log(res)
      }
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})