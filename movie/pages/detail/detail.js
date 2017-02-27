Page({
  data:{
    movieDetail: [],
    movieComment: [],
    movieThumbs: [],
    movieDesc: "",
    loading: 0,
    desc: 0
  },
  //页面初始化化
  onLoad: function(options){
    let self = this
    console.log(options)
    wx.request({
      url: "http://m.maoyan.com/movie/" + options.id + ".json",
      header: {"content-type": "application/json"},
      success: (data) => {
        self.setData({
          movieDetail: data.data.data.MovieDetailModel,
          movieComment: data.data.data.CommentResponseModel,
          loading: 1
        })
        let photos = self.data.movieDetail.photos
        for(let i=0; i < self.data.movieDetail.photos.length; i ++){
          photos[i] = photos[i].replace("/w.h/moive/", "/movie").replace("/w.h/mmdb/", "/mmdb/").replace(/.jpg(.*)/, ".jpg@1sc%7C180w_140h_1e_1c.webp")
        }
        self.setData({
          movieDesc: self.data.movieDetail.dra.replace(/<[^>]+>/g, ""),
          movieThumbs: photos
        })
      }
    })
  },
  onReady: function(){
    wx.setNavigationBarTitle({title: this.data.movieDetail.nm})
  },
  showDesc: function(){
    this.setData({desc: 1})
  },
  hideDesc: function(){
    this.setData({desc: 0})
  },
  showAlbum(e){
    wx.navigateTo({
      url: "../album/album?title=navigate&id=" + this.data.movieDetail.id + "&pid=" + e.target.dataset.index + ""
    })
  },
  buyTickets: function(){
    wx.showModal({
      title: "购票提示",
      content: "目前不支持购买",
      showCancel: 0,
      confirmColor: "#ff4d64"
    })
  }
})