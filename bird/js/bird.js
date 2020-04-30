/*
 * @Author: your name
 * @Date: 2020-04-28 21:09:13
 * @LastEditTime: 2020-04-30 16:35:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \像素鸟\js\bird.js
 */
const bird = document.getElementsByClassName("bird")[0];
const birdStyles = getComputedStyle(bird);
const birdWidth = parseFloat(birdStyles.width);
const birdHeight = parseFloat(birdStyles.height);
const birdLeft = parseFloat(birdStyles.left);
const birdTop = parseFloat(birdStyles.top);
const note = document.getElementsByClassName('note')[0];
const clickBody = document.getElementsByTagName('body')[0];
let birdTimer = null;
//给鸟加个锁
let lock = true;

class Bird extends ItemMove {
  constructor() {
    super(birdWidth, birdHeight, bird, 0, 100, birdLeft, birdTop);
    this.a = 1350;
  }

  render() {
    this.dom.style.top = this.top + 'px';
    this.dom.style.width = this.width + 'px';
    this.dom.style.height = this.height + 'px';
    // console.log(1)
  }
  move(space) {
    // this.a += 0.7
    this.ySpeed += this.a * space;
    const top = space * this.ySpeed;
    this.top = this.top + top;
    //判断是否到达底边
    if (this.top >= document.body.clientHeight * 0.725) {
      this.top = document.body.clientHeight * 0.75
      window.removeEventListener('click', bind, false)
      window.removeEventListener('keydown', bind, false)
      clearInterval(birdTimer);
      clearInterval(landTimer);
      clearInterval(skyTimer);
      clearInterval(postTimer);
      auto = false;
      over.style.display = "block";
      overScore.innerHTML = "score：" + score;
    }
    if (this.top <= 0) {
      this.top = 0;
    }
    if (hitLock) {
      clearInterval(birdTimer);
    }
    this.render()

  }
}
const flyBird = new Bird();
console.log(flyBird.top)
//绑定点击和键盘事件
window.addEventListener('click', bind, false)
window.addEventListener('keydown', bind, false)
clickBody.addEventListener('click', bind, false)

function bind(e) {
  if (e.code == 'Space' || e.type == 'click') {
    if (lock) {
      note.style.display = 'none';
      auto = true;
      birdFly = true;
      lock = false;
      clearInterval(birdTimer)
      birdTimer = setInterval(() => {
        flyBird.move(16 / 1000);
        lock = true;
      }, 16)
    }
    flyBird.ySpeed = jump;
  }
}
let fly = 4;
setInterval(() => {
  if (auto) {
    fly += 45;
    if (fly >= 99) {
      fly = 4;
    }
    flyBird.dom.style.backgroundPosition = fly + '%';
  }
}, 200)
