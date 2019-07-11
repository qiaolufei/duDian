var postsData = require('../../data/movie_data.js')
var postsData = require('../../data/music_data.js')
var postsData = require('../../data/novel_data.js')

Page({
  onTap1: function (event) {
    wx.navigateTo({
      url: '../movie/movie',
    })
  },
  

  onTap2: function (event) {
    wx.navigateTo({
      url: '../music/music',
    })
  },


  onTap3: function (event) {
    wx.navigateTo({
      url: '../novel/novel',
    })
  },

  onTap4: function () {
    wx.navigateTo({
      url: '../movie/hot_movie/hot_movie',
    })
  },

  onTap5: function () {
    wx.navigateTo({
      url: '../music/hot_music/hot_music',
    })
  },

  onTap6: function () {
    wx.navigateTo({
      url: '../novel/hot_novel/hot_novel',
    })
  },

});