/*
 * @Author: your name
 * @Date: 2020-04-29 16:22:30
 * @LastEditTime: 2020-04-30 11:37:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \像素鸟\js\game.js
 */
const allPost = document.getElementsByClassName('post');
const _bird = document.getElementsByClassName('bird')[0];
const maxScore = document.getElementsByClassName('max')[0];
const overScore = document.getElementsByClassName('score')[0];
var postActiveUp = document.getElementsByClassName('active Up');
var postActiveBottom = document.getElementsByClassName('active Bottom');
var hitLock = false;
var over = document.getElementsByClassName('over')[0];
const screen = document.getElementsByTagName('body')[0];
let screenWidth = screen.clientWidth;
var score = 0;
var scoreTimer = null;

function hit(bird, up, down) {
  const _birdOffset = bird.offsetLeft + bird.clientWidth;
  const _birdTop = bird.offsetTop;
  let upHeight;
  let upset;
  let downHeight;
  let downSet;
  if (up) {
    upHeight = up.offsetTop + up.clientHeight;
    upset = up.offsetLeft;
  }

  if (down) {
    downHeight = down.offsetTop;
    downSet = down.offsetLeft;
  }


  if (upset <= screen.clientWidth * 0.18 && upset >= screen.clientWidth * 0.12) {
    clearTimeout(scoreTimer)
    scoreTimer = setTimeout(() => {
      score++
      maxScore.innerHTML = score;
    }, scoreDelay)
  }


  if ((_birdOffset >= upset && _birdTop <= upHeight) || ((_birdOffset >= downSet) && (_birdTop + bird.clientHeight) >= (downHeight * 0.99))) {
    auto = false;
    window.removeEventListener('click', bind, false)
    window.removeEventListener('keydown', bind, false)
    hitLock = true;
    clearTimeout(scoreTimer)
    overScore.innerHTML = "score：" + score;
  }
}

setInterval(() => {
  if (!hitLock) {
    hit(_bird, postActiveUp[0], postActiveBottom[0]);
  }
  if (hitLock) {
    over.style.display = "block";
  }

}, 8)

over.addEventListener('click', function () {
  window.location.reload()
})
