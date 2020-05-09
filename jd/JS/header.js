/*
 * @Author: your name
 * @Date: 2020-04-19 15:21:25
 * @LastEditTime: 2020-04-19 19:18:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \京东首页\JS\header.js
 */
(function () {
  var lock = true;
  $(".logo").hover(function () {
    if (lock) {
      lock = false;
      $(".header").find(".logo-img-gif").fadeIn().attr('src', 'https://img1.360buyimg.com/da/jfs/t1/30253/6/6736/94754/5c90a540Ec31f3ed4/54ccd706be3a4d43.gif?v="' + Math.random() + '"')
      setTimeout(function () {
        $(".header").find(".logo-img-gif").fadeOut()
        lock = true;
      }, 4000)
    }
  });

  //搜索框内容自动切换
  var arr = ['洗烘一体洗衣机', '饮水机 立式', '美孚一号'];
  setInterval(function () {
    $('.header-input').attr('placeholder', arr[Math.floor(Math.random() * 3)]);
  }, 2000);

  //搜索的下拉菜单
  var timer = null;
  //防抖
  $('.header-input').on('input', function () {
    var val = $(this).val();
    clearTimeout(timer);
    if (val) {
      timer = setTimeout(function () {
        getDate(val);
        $('.search-menu').show();
      }, 600);
    }
  }).focus(function () {
    var str = $('.header-input').val();
    if (str) {
      $('.search-menu').css({
        display: 'block'
      });
    }
  })
  //ajax
  function getDate(val) {
    $.ajax({
      type: 'GET',
      url: 'https://suggest.taobao.com/sug',
      data: {
        code: "utf-8",
        q: val,
        callback: 'jsonp1'
      },
      dataType: 'jsonp',
    })
  }
  //回调函数
  window.jsonp1 = function (data) {
    var data = data.result;
    var str = '';
    for (var i = 0; i < data.length; i++) {
      str += `<li><a href="#">${data[i][0]}</a></li>`
    }
    $('.search-list').empty().append(str);
  }

  //搜索框出现后 鼠标移入移出搜索框 是否消失
  var leaveHide = null;
  $('.search-menu').hover(function () {
    clearTimeout(leaveHide)
  }, function () {
    leaveHide = setTimeout(function () {
      $('.search-menu').hide();
    }, 500)
  })
}())



// https://suggest.taobao.com/sug?code=utf-8&q=%E8%A1%A3%E6%9C%8D&_ksTS=1587288827735_441&callback=jsonp442&k=1&area=c2c&bucketid=9
