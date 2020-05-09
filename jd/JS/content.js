/*
 * @Author: your name
 * @Date: 2020-04-19 19:27:32
 * @LastEditTime: 2020-04-22 10:30:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \京东首页\JS\content.js
 */

(function () {
  $(".fs-wrapper").slide({
    imageArr: [
      "../img/1.jpg.webp",
      "../img/2.jpg.webp",
      "../img/3.jpg.webp",
      "../img/4.jpg.webp",
      "../img/5.jpg",
      "../img/6.jpg",
      "../img/6.jpg.webp",
      "../img/7.jpg.webp",
    ],
    list: $(".fs-wrapper > .slide-items"),
    width: 590,
    height: 470,
    btn: true,
    bottomIcon: true,
    animateType: "fade",
    autoPlay: true,
    delay: 3000,
  });

  $(".fs-wrapper-1").slide({
    //   imageArr: ['../img/1.jpg.webp', '../img/2.jpg.webp', '../img/3.jpg.webp', '../img/4.jpg.webp', '../img/5.jpg', '../img/6.jpg', '../img/6.jpg.webp', '../img/7.jpg.webp'],
    list: $(".fs-wrapper-1 > .slide-items"),
    width: 190,
    height: 470,
    btn: true,
    bottomIcon: false,
    animateType: "fade",
    autoPlay: false,
    delay: 5000,
  });

  var menuList = [{
      titles: ["家用电器"],
      content: {
        tabs: ["家电馆", "镇乡专卖店", "家电服务"],
        subs: [{
            title: "电视",
            items: [
              "曲面电视",
              "超薄电视",
              "OLED电视",
              "4K超清电视",
              "55英寸",
              "65英寸",
              "电视配件",
              "曲面电视",
              "超薄电视",
              "OLED电视",
              "4K超清电视",
              "55英寸",
              "65英寸",
              "电视配件",
              "曲面电视",
              "超薄电视",
              "OLED电视",
              "4K超清电视",
              "55英寸",
              "65英寸",
              "电视配件",
            ],
          },
          {
            title: "空调",
            items: [
              "壁挂式空调",
              "柜式空调",
              "中央空调",
              "一级能效空调",
              "变频空调",
              "1.5匹空调",
              "以旧换新",
            ],
          },
        ],
      },
    },
    {
      titles: ["手机", "运营商", "数码"],
      content: {
        tabs: ["手机"],
        subs: [{
            title: "手机",
            items: [
              "曲面电视",
              "超薄电视",
              "OLED电视",
              "4K超清电视",
              "55英寸",
              "65英寸",
              "电视配件",
            ],
          },
          {
            title: "手表",
            items: [
              "壁挂式空调",
              "柜式空调",
              "中央空调",
              "一级能效空调",
              "变频空调",
              "1.5匹空调",
              "以旧换新",
            ],
          },
        ],
      },
    },
    {
      titles: ["电脑", "办公"],
      content: {
        tabs: ["家电馆", "镇乡专卖店", "家电服务"],
        subs: [{
            title: "电视",
            items: [
              "曲面电视",
              "超薄电视",
              "OLED电视",
              "4K超清电视",
              "55英寸",
              "65英寸",
              "电视配件",
            ],
          },
          {
            title: "空调",
            items: [
              "壁挂式空调",
              "柜式空调",
              "中央空调",
              "一级能效空调",
              "变频空调",
              "1.5匹空调",
              "以旧换新",
              "壁挂式空调",
              "柜式空调",
              "中央空调",
              "一级能效空调",
              "变频空调",
              "1.5匹空调",
              "以旧换新",
              "壁挂式空调",
              "柜式空调",
              "中央空调",
              "一级能效空调",
              "变频空调",
              "1.5匹空调",
              "以旧换新",
            ],
          },
        ],
      },
    },
    {
      titles: ["家居", "家具", "家装", "厨具"],
      content: {
        tabs: ["家居", "镇乡专卖店", "家电服务"],
        subs: [{
            title: "电视",
            items: [
              "曲面电视",
              "超薄电视",
              "OLED电视",
              "4K超清电视",
              "55英寸",
              "65英寸",
              "电视配件",
            ],
          },
          {
            title: "空调",
            items: [
              "壁挂式空调",
              "柜式空调",
              "中央空调",
              "一级能效空调",
              "变频空调",
              "1.5匹空调",
              "以旧换新",
              "壁挂式空调",
              "柜式空调",
              "中央空调",
              "一级能效空调",
              "变频空调",
              "1.5匹空调",
              "以旧换新",
              "壁挂式空调",
              "柜式空调",
              "中央空调",
              "一级能效空调",
              "变频空调",
              "1.5匹空调",
              "以旧换新",
            ],
          },
        ],
      },
    },
  ];

  function renderFsLeft() {
    var leftStr = [];
    var str = [];
    for (var i = 0; i < menuList.length; i++) {
      leftStr[i] = "";
      str[i] = "";
      for (var j = 0; j < menuList[i].titles.length; j++) {
        str[i] += `${menuList[i].titles[j] + "/"}`;
      }
      str[i] = str[i].slice(0, -1);
      leftStr[i] += `<li><a href="#">${str[i]}</a></li>`;
    }
    $(".fs-left-list").append(leftStr);
  }
  renderFsLeft();

  function renderHideMenu(data) {
    var tabs = data.tabs;
    var subs = data.subs;
    var menuNav = "";
    var list = "";
    var liStr = "";
    for (var i = 0; i < tabs.length; i++) {
      menuNav += `<li class="menu-nav-title">
      <a href="#">${tabs[i]}</a>
      <i class="iconfont">&#xe616;</i>
    </li>`;
    }
    for (var j = 0; j < subs.length; j++) {
      for (var k = 0; k < subs[j].items.length; k++) {
        liStr += `<li><a href="#">${subs[j].items[k]}</a></li>`;
      }
      list += `<div class="menu-list clearfix">
       <a href="#" class="list-div">${subs[j].title}
        <i class="iconfont">&#xe616;</i>
       </a>
       <ul class="list-ul">
       ${liStr}
       </ul>
       </div>
       `;
    }
    $(".menu-head").empty().append(menuNav);
    $(".menu-wrapper").empty().append(list);
  }
  var timer = null;
  $(".fs-left-list a").hover(
    function (e) {
      e.stopPropagation();
      $(".mouse-on").removeClass("mouse-on");
      $(e.target).addClass("mouse-on");
      $(".fs-menu").css({
        display: "block"
      });
      var index = $(e.target).parent().index();
      renderHideMenu(menuList[index].content);
    },
    function (e) {
      e.stopPropagation();
      timer = setTimeout(function () {
        $(e.target).removeClass("mouse-on");
      }, 500);
    }
  );
  $(".fs-menu").hover(function () {
    clearTimeout(timer);
  });
  $(".fs").hover(
    function () {},
    function () {
      $(".mouse-on").removeClass("mouse-on");
      $(".fs-menu").css({
        display: "none"
      });
    }
  );

  $('.active-nav').hover(function () {
    $('.serve-hide-content').css({
      top: 0
    })
  })
  var lock = null;
  $('.choice-nav').hover(function (e) {
    $('.choice-change').removeClass('choice-change');
    $(e.target).addClass('choice-change');
  }, function (e) {
    var target = e.target;
    lock = setTimeout(function () {
      $(target).removeClass('choice-change');
    }, 600)
  })

  $('.hf-form').hover(function () {
    clearTimeout(lock);
  }, function () {})

  $('.form-nav a').hover(function (e) {
    $('.form-nav-active').removeClass('form-nav-active');
    $(e.target).addClass('form-nav-active')
  }, function () {

  })

  $('.form-close').click(function () {
    $('.serve-hide-content').css({
      top: 280
    })
  })
})();
