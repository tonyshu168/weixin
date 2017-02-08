//app.js
App({
  data:{
    userInfo: unll,
    rankLoaded: false  //排行榜忆加载
  }
  onLaunch: function(){
    var app = this;
    //登录
    nami.login(() => {
      nami.getUserInfo((userInfo) => {
        console.log("已获取数据", userInfo);
        app.data.userInfo = userInfo;
      },
      () => {
        console.log("用户拒绝提供信息");
      });
    });
  }
})