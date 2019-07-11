var postsData = require('../../../data/movie_data.js')

var app = getApp();
Page({
  data: {
    isPlayingMusic: false
  },
  onLoad: function (option) {
    var postId = option.id;
    this.data.currentPostId = postId;
    var postData = postsData.postList[postId];
    this.setData({
      postData: postData
    })

    var postsCollected = wx.getStorageSync('posts_collected')
    if (postsCollected) {
      var postCollected = postsCollected[postId];
      if (!postCollected) {
        postsCollected[postId] = false;
        wx.setStorageSync('postsCollected', postsCollected)
      }
      else {
      this.setData({
        collected: postCollected
      })
    }
    }
    else {
      var postsCollected = {};
      postsCollected[postId] = false;
      wx.setStorageSync('posts_collected', postsCollected);
    }
  }
  
})