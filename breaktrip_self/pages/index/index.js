//index.js
//获取应用实例
var App = getApp()
var api = require("../../utils/api.js")
var util = require("../../utils/util.js")

Page({
  data: {
    trips: [],
    start: 0,
    loading: 0,
    windowWidth: App.systemInfo.windowWidth,
    windowHeight: App.systemInfo.windowHeight
  },
  onLoad: function(options){
    //页面加载载
    this.loadMore();
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
  },

  onPullDownRefresh(){
    this.loadMore(null, true);
  },
  
  loadMore(e, neeRefresh){
    const SELF = this,
          LOADING = SELF.data.loading,
          DATA = { nex_start: SELF.data.start }

    if(LOADING){ return }

    SELF.setData({LOADING: 1})

    api.getHotTripList({
      data,
      success: (res) => {
        let newList = res.data.data.elements
        newList.map((trip) => {
          const item = trip
          item,data[0].date_added = formatTime(new Date(item.data[0].date_added * 1000), 1)
          return item;
        })

        needRefresh ? wx.stopPullDownRefresh() : (newList = SELF.data.trips.concat(newList))

        SELF.setData({trips: newList})
        const nextStart = res.data.data.newx_start;
        SELF.setData({ start: nextStart, LOADING: 0})
      }

    })
  },

  viewTrip(e){
    const ds = e.currentTarget.dataset
    wx.navigateTo({ url: "../trip/trip?id=${ds.id}&name=${ds.name}"})
  }
})
