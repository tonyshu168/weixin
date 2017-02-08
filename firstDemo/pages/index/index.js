Page({
    data: {
        title: "weixin的内容",
        text: "这里是内容",
        news: ["aaa", "bbb", "ccc", "ddd"],
        show: 1
    },
    onLoad: function(options){
        //页面加载完毕
        console.log("loading success!!!")
    },
    onReady: function(){
        //页面渲染完毕
    },
    onLaunch: function(){
        //
    },
    onShow: function(){
        //
    },
    onHide: function(){
        //
    },
    onUnload: function(){

    },

    primaryClick: function(){
        var isShow = this.data.show

        console.log("按钮被点击了。。。")
        this.setData({text: "这里是新的内容", show: !isShow})
    }
})