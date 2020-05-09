/*
 * @Author: your name
 * @Date: 2020-04-21 17:14:37
 * @LastEditTime: 2020-04-22 10:38:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \京东首页\JS\kill.js
 */
(function () {
  var endTime = new Date("2020-4-21 20:00:00");
  var span1;
  var span2;
  var span3;
  setInterval(function () {
    var nowTime = new Date().getTime();
    var range = endTime.getTime() - nowTime;
    span1 = Math.floor(range / 1000 / 60 / 60) >= 10 ? Math.floor(range / 1000 / 60 / 60) : '0' + Math.floor(range / 1000 / 60 / 60);
    span2 = Math.floor(range / 1000 / 60 % 60) >= 10 ? Math.floor(range / 1000 / 60 % 60) : '0' + Math.floor(range / 1000 / 60 % 60);
    span3 = Math.floor(range / 1000 % 60) >= 10 ? Math.floor(range / 1000 % 60) : '0' + Math.floor(range / 1000 % 60);
    $('.second').children().eq(0).text(span1);
    $('.second').children().eq(1).text(span2);
    $('.second').children().eq(2).text(span3);

  }, 1000)
  $('.strong').text((endTime.getHours() > 1 ? endTime.getHours() : '0' + endTime.getHours()) + ':' + (endTime.getSeconds().length > 1 ? endTime.getSeconds() : '0' + endTime.getSeconds()));



  $('.kill-slide-1').slide({
    imageArr: [, ],
    list: $('.kill-slide-1 > .slide-items'),
    width: 804,
    height: 260,
    btn: true,
    bottomIcon: false,
    animateType: 'slide',
    autoPlay: false,
    delay: 3000
  })
  $('.kill-slide-2').slide({
    imageArr: ["../img/6.jpg.webp", "../img/4.jpg.webp"],
    list: $('.kill-slide-2 > .slide-items'),
    width: 195,
    height: 260,
    btn: false,
    bottomIcon: true,
    animateType: 'slide',
    autoPlay: true,
    delay: 2000
  })
}())
