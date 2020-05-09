/*
 * @Author: your name
 * @Date: 2020-04-16 15:51:27
 * @LastEditTime: 2020-04-19 20:08:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \京东首页\轮播图封装.js
 */
//可以简化的 自动播放 及 左右按键那里
//可以抽出一俩个函数出来  累了  不抽了
//参数形式
//$(".wrapper").slide({
//   imageArr: ["./img_03.jpg", "./img_02.jpg", "./img_01.jpg"],  图片数组 按顺序
//   list: $('.wrapper > .slide-items'),  必填项  
//   width: 500,   外层宽高
//   height: 300,
//   btn: true,    是否显示左右按钮
//   bottomIcon: true,   是否显示底部按钮
//   animateType: 'fade', 或者填 slide   运动形式
//   autoPlay: true,    是否自动播放
//   delay: 3000    延迟
// })

//HTML结构 记得打包 CSS   
// <div class="wrapper">
// <div class="slide-items"></div>   slide-items 是固定class
// <div class="slide-items"></div>
// <div class="slide-items"></div>
// </div>

(function () {
  $.fn.extend({
    slide: function (option) {
      var self = this;
      var swiper = new Swiper(option, self);
      swiper.init();
    },
  });

  //构造函数
  function Swiper(config, wrap) {
    this.wrap = wrap;
    this.imageArr = config.imageArr || [];
    this.list = config.list || [];
    this.len = this.list.length;
    this.width = config.width || "100%";
    this.height = config.height || "100%";
    this.btn = config.btn || config.btn == undefined ? true : false;
    this.bottomIcon =
      config.bottomIcon || config.bottomIcon == undefined ? true : false;
    this.animateType = config.animateType == "fade" ? "fade" : "slide";
    this.autoPlay =
      config.autoPlay || config.autoPlay == undefined ? true : false;
    this.delay = config.delay || 2000;
    this.timer = null;
    this.index = 0;
    this.lock = true;

    this.init = function () {
      this.createDom();
      this.auto();
      this.doubleBtn();
      this.icon();
      this.clickIcon();
      this.hoverIcon();
    };
  }

  //创建轮播图结构
  Swiper.prototype.createDom = function () {
    var slideItems = $(
      '<a href="#"><img  width="100%" height="100%" alt=""></a>'
    );
    var animateItems = $(
      '<a href="#"><img  width="' +
      this.width +
      '" height= "' +
      this.height +
      '" alt=""></a>'
    );
    var btnLeft = $('<button class="slide-btn slide-btn-left">&lt;</button>');
    var btnRight = $('<button class="slide-btn slide-btn-right">&gt;</button>');
    var slideIcon = $('<ol class="slide-icon"></ol>');
    var slideIconItems = $('<li class="slide-icon-items"></li>');
    var slideWrapper = $(
      '<div class="slide-inner" style="width:' +
      (this.len + 1) * this.width +
      "px; height:" +
      this.height +
      'px;position: absolute;"></div>'
    );
    //轮播图结构
    this.wrap.css({
      height: this.height,
      width: this.width,
    });
    for (var i = 0; i < this.len; i++) {
      $(slideIcon).append(slideIconItems.clone());
      if (this.animateType == "fade") {
        $(this.list[i]).append(slideItems.clone()).addClass("position-absolute");
      } else if (this.animateType == "slide") {
        $(this.list[i])
          .addClass("slide-items-fl")
          .append(animateItems.clone())
          .css({
            opacity: 1,
          });
      }
      $(this.list[i]).find("img").prop("src", this.imageArr[i]);
    }

    this.animateType == "slide" ?
      $(this.wrap).find(".slide-items").wrapAll(slideWrapper) &&
      $(this.wrap).find(".slide-inner").append($(this.list[0]).clone()) :
      "";
    this.btn ? this.wrap.append(btnLeft).append(btnRight) : "";
    this.bottomIcon ? this.wrap.append(slideIcon) : "";
    $(this.wrap).find(".slide-icon").children().eq(0).addClass("iconActive");
    $(this.wrap).find(".slide-items").eq(0).addClass("imgActive");
    //   console.log(this.wrap)
  };

  //自动播放
  Swiper.prototype.auto = function () {
    var self = this;
    if (this.animateType == "fade") {
      if (this.autoPlay) {
        this.timer = setInterval(function () {
          if (self.index < self.len - 1) {
            $(self.wrap).children().eq(self.index).removeClass("imgActive");
            $(self.wrap)
              .children()
              .eq(self.index + 1)
              .addClass("imgActive");
            self.index++;
          } else {
            self.index = 0;
            $(self.wrap)
              .children()
              .eq(self.len - 1)
              .removeClass("imgActive");
            $(self.wrap).children().eq(self.index).addClass("imgActive");
          }
        }, this.delay);
      }
    } else if (this.animateType == "slide") {
      if (this.autoPlay) {
        this.timer = setInterval(function () {
          slideLeft = -self.width * (self.index + 1);
          $(self.wrap)
            .find(".slide-inner")
            .animate({
                left: slideLeft,
              },
              "swing",
              function () {
                if (self.index < self.len) {
                  $(self.wrap)
                    .find(".slide-inner")
                    .children()
                    .eq(self.index)
                    .removeClass("imgActive");
                  $(self.wrap)
                    .find(".slide-inner")
                    .children()
                    .eq(self.index + 1)
                    .addClass("imgActive");
                  self.index++;
                } else {
                  self.index = 0;
                  $(self.wrap)
                    .find(".slide-inner")
                    .children()
                    .eq(self.len)
                    .removeClass("imgActive");
                  $(self.wrap)
                    .find(".slide-inner")
                    .children()
                    .eq(self.index)
                    .addClass("imgActive");
                }
                //用 animate 的回调来解决 最后一张跳转回第一张的问题
                if (self.index == self.len) {
                  $(self.wrap).find(".slide-inner").css({
                    left: 0,
                  });
                  self.index = 0;
                  self.index > self.len - 2 ?
                    (self.index = self.len - 2) :
                    self.index;
                }
              }
            );
        }, this.delay);
      }
    }
  };

  //左右按钮 hover 及 click事件
  Swiper.prototype.doubleBtn = function () {
    //hover
    var self = this;
    $(this.wrap).hover(
      function () {
        $(self.wrap).find(".slide-btn").css({
          background: "rgba(0,0,0,.5)",
        });
      },
      function () {
        $(self.wrap).find(".slide-btn").css({
          background: "rgba(0,0,0,.3)",
        });
      }
    );

    //click
    if (this.animateType == "fade") {
      $(this.wrap)
        .find(".slide-btn-left")
        .on("click", function () {
          //清除定时器
          clearInterval(self.timer);
          self.auto();
          //切换
          if (self.index == 0) {
            $(self.wrap).find(".imgActive").removeClass("imgActive");
            $(self.wrap)
              .find(".slide-items")
              .eq(self.len - 1)
              .addClass("imgActive");
            self.index = self.len - 1;
          } else {
            self.index -= 1;
            $(self.wrap)
              .find(".imgActive")
              .removeClass("imgActive")
              .prev()
              .addClass("imgActive");
          }
        });
      $(this.wrap)
        .find(".slide-btn-right")
        .on("click", function () {
          //清除定时器
          clearInterval(self.timer);
          self.auto();
          //切换
          if (self.index == self.len - 1) {
            $(self.wrap).find(".imgActive").removeClass("imgActive");
            $(self.wrap).find(".slide-items").eq(0).addClass("imgActive");
            self.index = 0;
          } else {
            self.index += 1;
            $(self.wrap)
              .find(".imgActive")
              .removeClass("imgActive")
              .next()
              .addClass("imgActive");
          }
        });
    } else if (this.animateType == "slide") {

      $(this.wrap)
        .find(".slide-btn-left")
        .on("click", function () {
          if (self.lock) {
            self.lock = false;
            clearInterval(self.timer);
            self.auto();
            if (self.index == 0) {
              $(self.wrap)
                .find(".slide-inner")
                .css({
                  left: -self.len * self.width,
                })
                .animate({
                    left: -(self.len - 1) * self.width,
                  },
                  "swing",
                  function () {
                    self.lock = true
                  }
                );
              self.index = self.len - 1;

            } else {
              self.index--;
              $(self.wrap)
                .find(".slide-inner")
                .animate({
                    left: -self.index * self.width,
                  },
                  "swing",
                  function () {
                    self.lock = true
                  }
                );
            }
          }

        });

      $(this.wrap)
        .find(".slide-btn-right")
        .on("click", function () {
          if (self.lock) {
            self.lock = false;
            clearInterval(self.timer);
            self.auto();
            if (self.index == self.len - 1) {
              $(self.wrap)
                .find(".slide-inner")
                .animate({
                  left: -self.len * self.width
                }, "swing", function () {
                  $(self.wrap).find(".slide-inner").css({
                    left: 0,
                  });
                  self.index = 0;
                  self.lock = true
                });
              self.index = self.len - 1;
            } else {
              self.index++;
              $(self.wrap)
                .find(".slide-inner")
                .animate({
                    left: -self.index * self.width,
                  },
                  "swing",
                  function () {
                    self.lock = true
                  }
                );
            }
          }

        });

    }
  };

  //小圆点auto
  Swiper.prototype.icon = function () {
    var self = this;
    setInterval(function () {
      $(self.wrap).find(".iconActive").removeClass("iconActive");
      $(self.wrap)
        .find(".slide-icon")
        .children()
        .eq(self.index)
        .addClass("iconActive");
    }, this.delay / 6);
  };


  //hover 的click和 hover的两个 动画处理是一摸一样的 懒得简化了就这样
  //小圆点click
  Swiper.prototype.clickIcon = function () {
    var self = this;
    $(this.wrap)
      .find(".slide-icon")
      .on("click", function (e) {
        clearInterval(self.timer);
        self.auto();
        self.index = $(e.target).index();
        if (self.animateType == "fade") {
          $(self.wrap).find(".imgActive").removeClass("imgActive");
          $(self.wrap).children().eq(self.index).addClass("imgActive");
        } else if (self.animateType == "slide") {
          $(self.wrap)
            .find(".slide-inner")
            .animate({
                left: -self.index * self.width,
              },
              "swing",
              function () {}
            );
        }
      });
  };

  //小圆点hover
  Swiper.prototype.hoverIcon = function () {
    var self = this;
    $(this.wrap)
      .find(".slide-icon").find(".slide-icon-items").hover(function (e) {
        e.stopPropagation();
        clearInterval(self.timer);
        self.auto();
        self.index = $(e.target).index();
        // console.log($(e.target))
        $(e.target).css({
          height: "0.5rem",
          width: "1.8rem",
          boxShadow: "0 0 0.5rem 0.1rem rgba(255, 255, 255)"
        })
        if (self.animateType == "fade") {
          $(self.wrap).find(".imgActive").removeClass("imgActive");
          $(self.wrap).children().eq(self.index).addClass("imgActive");
        } else if (self.animateType == "slide") {
          $(self.wrap)
            .find(".slide-inner")
            .animate({
                left: -self.index * self.width,
              },
              "swing",
              function () {}
            );
        }
      }, function (e) {
        e.stopPropagation();

        $(e.target).css({
          height: "0.4rem",
          width: "1.6rem",
          boxShadow: "0 0 0 0",
          // background: "rgb(255, 255, 255, 0.5)",
          float: "left",
          border: "1px solid #ccc",
          marginRight: "0.3rem",
          borderRadius: "5px",
          cursor: "pointer"
        })

      })
  }
}())
//老版本 只支持fade 且不在原型链上编程
// $.fn.extend({
//   slide: function (option) {
//     var self = this;
//     swiper(option, self);

//   }
// })

// function swiper(config, wrap) {

//   //   wrap.appendTo('body');
//   var imageArr = config.imageArr || [];
//   var list = config.list || [];
//   var len = list.length;
//   var width = config.width || "100%";
//   var height = config.height || "100%";
//   var btn = config.btn || config.btn == undefined ? true : false;
//   var bottomIcon = config.bottomIcon || config.bottomIcon == undefined ? true : false;
//   var animateType = config.animateType || config.animateType == undefined ? "fade" : "slide";
//   var autoPlay = config.autoPlay || config.autoPlay == undefined ? true : false;
//   var delay = config.delay || 2000;

//   var slideItems = $('<a href="#"><img  width="100%" height="100%" alt=""></a>');
//   var btnLeft = $('<button class="slide-btn slide-btn-left">&lt;</button>');
//   var btnRight = $('<button class="slide-btn slide-btn-right">&gt;</button>');
//   var slideIcon = $('<ol class="slide-icon"></ol>');
//   var slideIconItems = $('<li class="slide-icon-items"></li>');

//   console.log(imageArr)
//   //轮播图结构
//   wrap.css({
//     height: height,
//     width: width
//   })

//   for (var i = 0; i < list.length; i++) {
//     $(list[i]).append(slideItems.clone());
//     $(slideIcon).append(slideIconItems.clone());
//     $(list[i]).find('img').prop("src", imageArr[i]);
//   }
//   btn ? wrap.append(btnLeft).append(btnRight) : '';
//   bottomIcon ? wrap.append(slideIcon) : '';
//   $(wrap).find('.slide-icon').children().eq(0).addClass('iconActive')
//   $(wrap).find('.slide-items').eq(0).addClass('imgActive')

//   //轮播图动画
//   $(wrap).hover(function () {
//     $(wrap).find('.slide-btn').css({
//       background: "rgba(0,0,0,.5)"
//     })
//   }, function () {
//     $(wrap).find('.slide-btn').css({
//       background: "rgba(0,0,0,.3)"
//     })
//   });

//   //左右按钮播放
//   var index = 0;
//   if (animateType == 'fade') {
//     $(btnLeft).on('click', function () {
//       clearInterval(timer)
//       if (autoPlay) {
//         timer = setInterval(function () {
//           if (index < len - 1) {
//             $(wrap).children().eq(index).removeClass('imgActive')
//             $(wrap).children().eq(index + 1).addClass('imgActive');
//             index++;
//           } else {
//             index = 0;
//             $(wrap).children().eq(len - 1).removeClass('imgActive')
//             $(wrap).children().eq(index).addClass('imgActive');
//           }
//         }, delay)
//       }
//       if (index == 0) {
//         $(wrap).find('.imgActive').removeClass('imgActive');
//         $(wrap).find('.slide-items').eq(len - 1).addClass('imgActive');
//         index = len - 1;
//       } else {
//         index -= 1;
//         $(wrap).find('.imgActive').removeClass('imgActive').prev().addClass('imgActive')
//       }

//     })
//     $(btnRight).on('click', function () {
//       clearInterval(timer)
//       if (autoPlay) {
//         timer = setInterval(function () {
//           if (index < len - 1) {
//             $(wrap).children().eq(index).removeClass('imgActive')
//             $(wrap).children().eq(index + 1).addClass('imgActive');
//             index++;
//           } else {
//             index = 0;
//             $(wrap).children().eq(len - 1).removeClass('imgActive')
//             $(wrap).children().eq(index).addClass('imgActive');
//           }
//         }, delay)
//       }
//       if (index == len - 1) {
//         $(wrap).find('.imgActive').removeClass('imgActive');
//         $(wrap).find('.slide-items').eq(0).addClass('imgActive');
//         index = 0;
//       } else {
//         index += 1;
//         $(wrap).find('.imgActive').removeClass('imgActive').next().addClass('imgActive')
//       }

//     })
//   }

//   //自动播放
//   var timer = null;

//   if (autoPlay) {
//     timer = setInterval(function () {
//       if (index < len - 1) {
//         $(wrap).children().eq(index).removeClass('imgActive')
//         $(wrap).children().eq(index + 1).addClass('imgActive');
//         index++;
//       } else {
//         index = 0;
//         $(wrap).children().eq(len - 1).removeClass('imgActive')
//         $(wrap).children().eq(index).addClass('imgActive');
//       }
//     }, delay)
//   }
//   console.log(timer);

// }
