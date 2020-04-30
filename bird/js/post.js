/*
 * @Author: your name
 * @Date: 2020-04-29 11:35:14
 * @LastEditTime: 2020-04-30 13:50:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \像素鸟\js\post.js
 */
const contain = document.getElementsByClassName('contain')[0];
const active = document.getElementsByClassName('active')[0];

class Post {
  constructor(height, dom, left, top, bottom) {
    this.bottom = bottom;
    this.top = top;
    this.height = height;
    this.dom = dom;
    this.left = left;
  }

  render() {

    this.dom.style.height = this.height + '%';
    this.dom.style.left = this.left + '%';
    if (this.top == 0) {
      this.dom.style.top = this.top + '%';
    } else if (this.bottom == 22) {
      this.dom.style.bottom = this.bottom + '%';
    }
    contain.appendChild(this.dom);
    if (this.left <= -30) {
      this.dom.remove();
    }
    if (this.left <= much && this.left >= less) {
      this.dom.classList.add('active');
    } else {
      this.dom.classList.remove('active');

    }
  }
  move() {
    setInterval(() => {
      if (auto) {
        this.left -= 40 / 1000;
        this.render();
      }
    }, 0)
  }
}


function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

const body = document.getElementsByTagName('body')[0];
const strapWidth = body.clientWidth;
let delay,
  much,
  less,
  ph,
  cut;
//23 26
var scoreDelay;
var jump;
var earthA;
if (strapWidth >= 1136) {
  delay = 1300;
  much = 18;
  less = 11;
  scoreDelay = 350;
  jump = -380;
  earthA = 1350;
} else if (strapWidth >= 960 && strapWidth <= 1136) {
  delay = 1600;
  much = 18;
  less = 10;
  scoreDelay = 450;
  jump = -380;
  earthA = 1350;
} else if (strapWidth >= 720 && strapWidth <= 960) {
  delay = 2000;
  much = 19;
  less = 9;
  scoreDelay = 450;
  jump = -380;
  earthA = 1350;
} else if (strapWidth >= 540 && strapWidth <= 720) {
  delay = 2500;
  much = 20;
  less = 7;
  scoreDelay = 450;
  jump = -380;
  earthA = 1350;
} else if (strapWidth <= 540) {
  delay = 3500;
  much = 25;
  less = 2;
  scoreDelay = 750;
  jump = -220;
  earthA = 350;
}

// iphone7 = 2%    , 7plus = 2%  iphone X = 2%

var postTimer = null;
postTimer = setInterval(() => {
  if (auto) {
    const pair = new CreatePair()
    pair.create();
  }

}, delay)


class CreatePair {
  constructor() {
    this.upHeight = random(10, 35);
    this.downHeight = (60 - this.upHeight);
    this.upDom = document.createElement('div')
    this.upDom.className = 'post Up';
    this.downDom = document.createElement('div')
    this.downDom.className = 'post Bottom';
    this.up = new Post(this.upHeight, this.upDom, 110, 0);
    this.down = new Post(this.downHeight, this.downDom, 110, 1, 22);
  }
  create() {
    this.up.render();
    this.down.render();
    this.up.move();
    this.down.move();
  }
}
