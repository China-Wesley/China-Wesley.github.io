function Render(config){
    this.loadingPic_1 = './plan1.gif';
    this.loadingPic_2 = './plan2.gif';
    this.loadingPic_3_gif = './plan3.gif';
    this.loadingPic_3_bottom = './plan3.png';
    this.starLight = './starLight.png';
    this.starDark = './starDark.png';

    this.addWrap = function(){
         var wrap = document.createElement('div');
         wrap.id = 'loader-placeholder',
         wrap.className = 'loader-placeholder-wrap',
         window.document.body.appendChild(wrap);
         return wrap;
    }

    this.setHtml = function(){
    }
    
    this.addLoading = function(){
        var wrap =  this.addWrap();
        wrap.innerHTML = this.setHtml()
        this.addStyle();
    }   

    this.addStyle = function(fig){
        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = fig;
        window.document.body.appendChild(style);

    }

    this.init = function(){
        var self = this;
        this.addLoading();
        window.addEventListener('load', function(){
            self.removeLoading();
        })
    }

    this.removeLoading = function(){
        var wrap = document.getElementById('loader-placeholder');
        window.document.body.removeChild(wrap);
    }
}
let obj = {
    name: '放置奇兵',
    icon: 'data:image/jpeg;base64,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',
    starNum: 3,
    gameType: '放置类',
    installNum: '1W+',
    gameDiscribe: 'a nubiplus game',
    style1: `* {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    
    .loader-placeholder-wrap {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 10000;
        background: #000;
        font-family: Arial, sans-serif;
    }
    
    .loading-pic {
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        width: 70%;
    }
    
    .loading-pic-wrap {
        position: relative;
        height: 81.5593%;
    }
    
    .app-wrap {
        box-sizing: border-box;
        position: fixed;
        bottom: 0;
        height: 18.4407%;
        width: 100%;
        border-top: 2px solid #91c21f;
    }
    
    .app-content {
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        width: 100%;
        height: 65%;
    }
    
    
    .app-icon {
        display: inline-block;
        height: 100%;
        border-radius: 15px;
        vertical-align: middle;
    }
    
    .app-details {
        display: inline-flex;
        flex-direction: column;
        vertical-align: middle;
        margin-left: 1%;
    }
    
    .app-name {
        margin-bottom: 1.65%;
        text-align: left;
        overflow: hidden;
        vertical-align: middle;
        white-space: nowrap;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        color: #fff;
        font-size: 1.4rem;
    }
    
    .star-wrap {
        overflow: hidden;
        position: relative;
        margin-bottom: 1%;
        width: 43.0666%;
        min-width: 110px;
        font-size: 0;
    }
    
    
    .star-light li,
    .star-dark li {
        display: block;
        float: left;
        width: 15%;
        margin-right: 6.25%;
        font-size: 0;
    }
    
    .star-light li img,
    .star-dark li img {
        width: 100%;
    }
    
    .star-dark li:nth-of-type(5),
    .star-light li:nth-of-type(5) {
        margin: 0;
    }
    
    .star-light {
        position: absolute;
        left: 0%;
    }
    
    .star-dark {
        display: inline-block;
    }
    
    .star-light {
        z-index: 1000;
    }
    
    .star-dark,
    .star-light {
        width: 100%;
    }
    
    .score-0 {
        left: -100%;
    }
    
    .score-1 {
        left: -85%;
    }
    
    .score-2 {
        left: -64%;
    }
    
    .score-3 {
        left: -42%;
    }
    
    .score-4 {
        left: -21%;
    }
    
    .score-5 {
        left: 0%;
    }
    
    
    @media only screen and (orientation: portrait) {
        .app-details {
            max-width: 68%;
        }
    
        .app-icon {
            max-width: 158px;
        }
    
        @media screen and (min-height: 811px) {
            .app-details {
                max-width: 64%;
            }
        }
    
        @media screen and (min-height: 1000px) {
            .app-details {
                max-width: 75%;
            }
    
    
            .star-wrap {
                min-width: 160px;
            }
    
            .app-name {
                font-size: 48px;
            }
    
            .star-wrap {
                width: 32.0666%;
            }
    
        }
    
    }
    
    
    @media only screen and (orientation: landscape) {
        .app-wrap {
            height: 28.93333%;
        }
    
        .loading-pic {
            width: 30%;
        }
    
    
        .loading-pic-wrap {
            height: 71.06666%;
        }
    
        .app-details {
            max-width: 55%;
            margin-left: 0.5%;
        }
    
        .star-wrap {
            width: 30.0666%;
        }
    
        .app-name {
            text-align: left;
        }
    
        @media screen and (min-width: 1000px) {
            .app-name {
                font-size: 2.6rem;
            }
    
            .loading-pic {
                width: 35%;
            }
    
            .app-content {
                height: 60%;
            }
        }
    }`,
    style2: `* {
        margin: 0;
        padding: 0;
        list-style: none;
      }
      
      .loader-placeholder-wrap {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 10000;
        background: #000;
        font-family: Arial, sans-serif;
      }
      
      .app-content {
        overflow: hidden;
        width: 100%;
        position: absolute;
        left: 50%;
        -webkit-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        transform: translateX(-50%);
        text-align: center;
      }
      
      .app-icon {
        display: block;
        width: 26%;
        max-width: 195px;
        border-radius: 12px;
        margin-bottom: 2.4737%;
        position: relative;
        left: 50%;
        -webkit-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        transform: translateX(-50%);
      }
      
      .app-name {
        margin: 0 auto;
        color: #fff;
        text-align: center;
        margin-bottom: 2.2489%;
        font-size: 1.5rem;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
      
        /* 最多两行文本 */
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      
      /* 星星 */
      .star-wrap {
        display: inline-block;
        overflow: hidden;
        position: relative;
        margin-bottom: 2.2489%;
        width: 33.0666%;
        font-size: 0;
      }
      
      
      
      .star-light li,
      .star-dark li {
        float: left;
        width: 15%;
        margin-right: 6.25%;
        font-size: 0;
      }
      
      .star-light li img,
      .star-dark li img {
        width: 100%;
      }
      
      .star-dark li:nth-of-type(5),
      .star-light li:nth-of-type(5) {
        margin: 0;
      }
      
      .star-light {
        position: absolute;
        left: 0%;
      }
      
      .star-dark {
        display: inline-block;
      }
      
      .star-light {
        z-index: 1000;
      }
      
      .star-dark,
      .star-light {
        width: 100%;
      }
      
      .score-0 {
        left: -100%;
      }
      
      .score-1 {
        left: -85%;
      }
      
      .score-2 {
        left: -64%;
      }
      
      .score-3 {
        left: -42%;
      }
      
      .score-4 {
        left: -21%;
      }
      
      .score-5 {
        left: 0%;
      }
      
      .app-span {
        margin: 0 auto;
        font-weight: 400;
        font-size: 14px;
        width: 80.06667%;
        text-align: center;
        color: rgba(180, 180, 180, 1);
      
        /* 单行 */
        overflow: hidden;
        vertical-align: middle;
        white-space: nowrap;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
      }
      
      .loading-pic {
        display: block;
        width: 59.952%;
        position: absolute;
        bottom: 0%;
        left: 50%;
        -webkit-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        transform: translateX(-50%);
        max-width: 449.64px;
      }
      
      @media only screen and (orientation: portrait) {
        .app-content {
          top: 27.886%;
        }
      
        .app-name {
          width: 66.2%;
        }
      
        /* 兼容iphone5*/
        @media screen and (max-width: 321px) {
          .app-name {
            font-size: 20px;
          }
      
          .app-span {
            font-size: 12px;
          }
        }
      
        /* 兼容ipad 及ipadpro*/
        @media screen and (min-width: 700px) {
          .app-content {
            top: 20.3333%;
          }
      
      
          .app-name {
            font-size: 48px;
          }
      
          .app-span {
            font-size: 30px;
          }
        }
      }
      
      @media only screen and (orientation: landscape) {
        .app-content {
          top: 15.3333%;
        }
      
        .app-icon {
          width: 14.6177%;
        }
      
        .star-wrap {
          width: 18.5%;
        }
      
        .star-wrap,
        .app-icon,
        .app-name {
          margin-bottom: 1.5%;
        }
      
        .app-name {
          width: 66%;
        }
      
        .loading-pic {
          width: 33%;
        }
      
        @media screen and (min-width: 811px) {
          .app-icon {
            width: 10.6177%;
          }
      
          .loading-pic {
            width: 29.7061%;
          }
        }
      
        @media screen and (min-width: 1000px) {
          .app-icon {
            width: 14.606%;
          }
      
          .app-name {
            font-size: 48px;
          }
      
          .app-span {
            font-size: 30px;
          }
      
      
          .loading-pic {
            width: 33.7061%;
          }
        }
      }`,
    style3: `* {
        margin: 0;
        padding: 0;
        list-style: none;
      }
      
      .loader-placeholder-wrap {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 10000;
        background: #000;
        font-family: Arial, sans-serif;
      }
      
      .app-content {
        overflow: hidden;
        width: 100%;
        position: absolute;
        top: 15%;
        left: 50%;
        -webkit-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        transform: translateX(-50%);
        text-align: center;
      }
      
      .app-icon {
        display: block;
        width: 27.3333%;
        max-width: 205px;
        border-radius: 12px;
        position: relative;
        left: 50%;
        -webkit-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        transform: translateX(-50%);
      }
      
      /* 加载动图区域 */
      .loading-logo {
        display: block;
        width: 65%;
        overflow: auto;
        margin: 0 auto;
        text-align: center;
        margin-bottom: 3.847%;
      }
      
      .app-name {
        margin: 0 auto;
        text-align: center;
        width: 81.8666%;
        font-size: 20px;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        margin-bottom: 4%;
      
      
      }
      
      
      
      .star-wrap {
        display: inline-block;
        position: relative;
        margin-bottom: 4%;
        width: 33.0666%;
        overflow: hidden;
        font-size: 0;
      }
      
      
      
      .star-light li,
      .star-dark li {
        display: block;
        float: left;
        width: 15%;
        margin-right: 6.25%;
        font-size: 0;
      
      }
      
      .star-light li img,
      .star-dark li img {
        width: 100%;
      }
      
      .star-dark li:nth-of-type(5),
      .star-light li:nth-of-type(5) {
        margin: 0;
      }
      
      .star-light {
        position: absolute;
        left: 0%;
      }
      
      /* 星星 */
      .star-dark {
        display: inline-block;
      }
      
      .star-light {
        z-index: 1000;
      }
      
      .star-dark,
      .star-light {
        width: 100%;
      }
      
      .score-0 {
        left: -100%;
      }
      
      .score-1 {
        left: -85%;
      }
      
      .score-2 {
        left: -64%;
      }
      
      .score-3 {
        left: -42%;
      }
      
      .score-4 {
        left: -21%;
      }
      
      .score-5 {
        left: 0%;
      }
      
      .app-span {
        font-weight: 400;
        font-size: 14px;
        width: 100%;
        text-align: center;
        color: rgba(180, 180, 180, 1);
      
        /* 单行 */
        overflow: hidden;
        vertical-align: middle;
        white-space: nowrap;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
      }
      
      .loading-footer {
        width: 30.2667%;
        position: absolute;
        bottom: 5.2474%;
        left: 50%;
        -webkit-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        transform: translateX(-50%);
      }
      
      @media only screen and (orientation: portrait) {
      
      
        /* 适配ipad 及 ipadpro */
        @media screen and (min-width: 700px) {
          .app-name {
            font-size: 40px;
          }
      
      
          .app-span {
            font-size: 28px;
          }
      
          .loading-logo {
            width: 55%;
          }
        }
      
        @media screen and (min-width: 1000px) {
          .app-name {
            font-size: 42px;
          }
        }
      }
      
      @media only screen and (orientation: landscape) {
        .app-content {
          width: 50%;
          top: 6.6667%;
        }
      
      
        .app-icon {
          max-width: 193px;
        }
      
        .loading-footer {
          width: 13.5%;
        }
      
        .app-name {
          font-size: 1.1rem;
          width: 100%;
        }
      
        .app-name,
        .star-wrap {
          margin-bottom: 3%;
        }
      
        /* 兼容iPhoneX */
        @media screen and (min-width: 811px) and (max-width: 950px) {
          .app-icon {
            width: 23.3333%;
          }
      
      
          .loading-logo {
            width: 55%;
          }
        }
      
        @media screen and (min-width: 1000px) {
          .app-icon {
            width: 193px;
          }
      
          .loading-logo {
            width: 80%;
          }
      
      
          .app-name {
            font-size: 33px;
          }
      
          .app-span {
            font-size: 20px;
          }
        }
      }`
}

function plan1(obj){
    Render.call(this, obj);
    this.setHtml = function(){
       var name = obj.name;
       var icon = obj.icon;
       var starNum = obj.starNum;
       var html = '';
       if (name && icon && starNum) {
        html += '<div class="loading-pic-wrap">' +
                         '<img id="loading-icon" class="loading-pic" src="' + this.loadingPic_1 + '" alt="" />' +
                    '</div>' +
                    '<div class="app-wrap">' +
                       '<div class="app-content">' +
                          '<img class="app-icon" src="'+ icon +'" alt=""/>' +
                          '<div class="app-details">' + 
                              '<span class="app-name">' + name + '</span>' +
                              '<div class="star-wrap">' + 
                                  '<ul class="star-light score-'+ starNum +'">' +
                                      '<li>' +
                                          '<img src="'+ this.starLight +'" alt="">' +
                                      '</li>' +
                                      '<li>' +
                                          '<img src="'+ this.starLight +'" alt="">' +
                                      '</li>' +
                                      '<li>' +
                                          '<img src="'+ this.starLight +'" alt="">' +
                                      '</li>' +
                                      '<li>' +
                                          '<img src="'+ this.starLight +'" alt="">' +
                                      '</li>' +
                                      '<li>' +
                                          '<img src="'+ this.starLight +'" alt="">' +
                                      '</li>' +
                                  '</ul>' +
                                  '<ul class="star-dark">' +
                                      '<li>' +
                                          '<img src="'+ this.starDark +'" alt="">' +
                                      '</li>' +
                                      '<li>' +
                                          '<img src="'+ this.starDark +'" alt="">' +
                                      '</li>' +
                                      '<li>' +
                                          '<img src="'+ this.starDark +'" alt="">' +
                                      '</li>' +
                                      '<li>' +
                                          '<img src="'+ this.starDark +'" alt="">' +
                                      '</li>' +
                                      '<li>' +
                                          '<img src="'+ this.starDark +'" alt="">' +
                                      '</li>' +
                                   '</ul>' +
                              '</div>' +
                          '</div>' +
                        '</div>' +
                    '</div>' 
      };
      return html;
    }
    this.addStyle(obj.style1);
    this.addLoading();

}

function plan2(obj){
    Render.call(this, obj);
    this.setHtml = function(){
       var name = obj.name;
       var icon = obj.icon;
       var starNum = obj.starNum;
       var gameDiscribe = obj.gameDiscribe;
       var html = '';
       if(name && icon && starNum && gameDiscribe){
        html += '<div class="app-content">' +
                    '<img class="app-icon" src="'+icon+'" alt="" />' +
                    '<p class="app-name">'+ name +'</p>' +
                    '<div class="star-wrap">' + 
                      '<ul class="star-light score-'+ starNum +'">' +
                        '<li>' +
                            '<img src="'+ this.starLight +'" alt="">' +
                        '</li>' +
                        '<li>' +
                            '<img src="'+ this.starLight +'" alt="">' +
                        '</li>' +
                        '<li>' +
                            '<img src="'+ this.starLight +'" alt="">' +
                        '</li>' +
                        '<li>' +
                            '<img src="'+ this.starLight +'" alt="">' +
                        '</li>' +
                        '<li>' +
                            '<img src="'+ this.starLight +'" alt="">' +
                        '</li>' +
                     '</ul>' +
                     '<ul class="star-dark">' +
                        '<li>' +
                            '<img src="'+ this.starDark +'" alt="">' +
                        '</li>' +
                        '<li>' +
                            '<img src="'+ this.starDark +'" alt="">' +
                        '</li>' +
                        '<li>' +
                            '<img src="'+ this.starDark +'" alt="">' +
                        '</li>' +
                        '<li>' +
                            '<img src="'+ this.starDark +'" alt="">' +
                        '</li>' +
                        '<li>' +
                            '<img src="'+ this.starDark +'" alt="">' +
                        '</li>' +
                      '</ul>' +
                   '</div>' +
                   '<p class="app-span">'+ gameDiscribe +'</p>' +
                '</div>' +
                '<img class="loading-pic" src="'+ this.loadingPic_2 +'" alt="">'
    }

    return html ; 
    }
    this.addStyle(obj.style2);
    this.addLoading();

}

function plan3(obj){
    Render.call(this, obj);
    this.setHtml = function(){
       var name = obj.name;
       var icon = obj.icon;
       var starNum = obj.starNum;
       var gameType = obj.gameType;
       var installNum = obj.installNum;
       var html = '';
       if(name && icon && starNum && gameType && installNum){
        html += '<div class="app-content">' +
                    '<img class="app-icon" src="'+ icon +'" alt=""/>' +
                    '<img class="loading-logo" src="'+ this.loadingPic_3_gif +'">' +
                    '<p class="app-name">'+ name +'</p>' + 
                    '<div class="star-wrap">' + 
                      '<ul class="star-light score-'+ starNum +'">' +
                      '<li>' +
                          '<img src="'+ this.starLight +'" alt="">' +
                      '</li>' +
                      '<li>' +
                          '<img src="'+ this.starLight +'" alt="">' +
                      '</li>' +
                      '<li>' +
                          '<img src="'+ this.starLight +'" alt="">' +
                      '</li>' +
                      '<li>' +
                          '<img src="'+ this.starLight +'" alt="">' +
                      '</li>' +
                      '<li>' +
                          '<img src="'+ this.starLight +'" alt="">' +
                      '</li>' +
                     '</ul>' +
                     '<ul class="star-dark">' +
                      '<li>' +
                          '<img src="'+ this.starDark +'" alt="">' +
                      '</li>' +
                      '<li>' +
                          '<img src="'+ this.starDark +'" alt="">' +
                      '</li>' +
                      '<li>' +
                          '<img src="'+ this.starDark +'" alt="">' +
                      '</li>' +
                      '<li>' +
                          '<img src="'+ this.starDark +'" alt="">' +
                      '</li>' +
                      '<li>' +
                          '<img src="'+ this.starDark +'" alt="">' +
                      '</li>' +
                     '</ul>' +
                    '</div>' +
                    '<p class="app-span">类别：'+ gameType +'. 下载量：' + installNum +'</p>' +
                '</div>' + 
                '<img class="loading-footer" src="'+ this.loadingPic_3_bottom +'" alt="" />'
    }

    return html ; 
    }
    this.addStyle(obj.style3);
    this.addLoading();

}

plan3(obj)



