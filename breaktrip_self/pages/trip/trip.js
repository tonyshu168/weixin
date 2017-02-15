// pages/trip/trip.js
const api = require("../../utils/api.js");

const app = getApp();
Page({
  data:{
    trip: {},
    options: null,
    windowWidth: 0
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    const self = this;
    const id = options.id;
    self.setData({options, windowWidth: app.systemInfo.windowWidth});
    wx.showToast({
      title: "正在加载",
      icon: "loading",
      duration: 10000,
    })
    api.getTripInfoByID({
      query: {
        tripId: id,
      },
      success: (res) => {
        const trip = res.data;
        self.setData({trip})
        wx.hideToast();
      }
    })
  },
  onReady:function(){
    // 页面渲染完成
    const self = this;
    wx.setNavigationBarTitle({title: self.data.options.name})
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },

  viewWaypoint(e) {
    const self = this;
    const ds = e.currentTarget.dataset;
    wx.navigatoTo({
      url: "../waypoint/waypoint?waypointId=${ds.waypoint}&tripId=${self.data.trip.id}"
    })
  },
  gotoUser(e) {
    const userId = e.target.dataset.id;
    wx.navigateeTo({ url: "../user/user/?id=${userId}"})
  }
})