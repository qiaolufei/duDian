var postsData = require('../../data/movie_data.js')
Page({

  data: {},
  
  onLoad: function () {
    this.data.postList = postsData.postList
    this.setData({
      postList: postsData.postList
    });
  },

  onPostTap: function (event) {
    var postId = event.currentTarget.dataset.postid;
    wx.navigateTo({
      url: "hot_movie/hot_movie?id=" + postId
    })
  },

  onSwiperTap: function (event) {
    var postId = event.target.dataset.postid;
    wx.navigateTo({
      url: "hot_movie/hot_movie?id=" + postId
    })
  },

})