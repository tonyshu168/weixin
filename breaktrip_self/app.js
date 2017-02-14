//app.js
App({
  systemInfo: null,
  onLaunch: function () {
    //加载app
    const SELF = this
    wx.getSystemInfo({
      success(res){
        console.log(res)
        SELF.systemInfo = res
      }
    })

    console.log("app launch...")
  },
  onShow: function(){
    //App显示
    console.log("app onshow...")
  },
  onHide: function(){
    //App显示
    console.log("app onHide...")
  }
})