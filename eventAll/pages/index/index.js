Page({
  data: {

  },

  onLoad: function(options){
    //加载页面
  },
  onReady: function(){
    //页面渲染
  },
  onShow: function(){
    //页面显示
  },
  onHide: function(){
    //页面隐藏
  },
  onUnload: function(){
    //页面关闭
  },

  handleTap1: function(e){
    console.log(e.currentTarget);
  },
  handleTap2: function(e){
    console.log(e.currentTarget);
  },
  handleTap3: function(e){
    console.log(e);
  },
  handleTap4: function(e){
    e.target.dataset.dataText === 2;
    console.log("dataset")
  }
})