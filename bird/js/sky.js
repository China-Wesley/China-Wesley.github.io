/*
 * @Author: your name
 * @Date: 2020-04-28 20:22:18
 * @LastEditTime: 2020-04-29 15:38:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \像素鸟\js\sky.js
 */
const sky = document.getElementsByClassName("sky")[0];
const skyStyles = getComputedStyle(sky);
const skyWidth = parseFloat(skyStyles.width);
const skyHeight = parseFloat(skyStyles.height);
let skyTimer = null;
var auto = false;
class Sky extends ItemMove {
  constructor() {
    super(skyWidth, skyHeight, sky, -10, 0, 0, 0);
  }

  onMove() {
    if (Math.abs(this.left) >= 100) {
      this.left = 0;
    }
  }
}


const skyItem = new Sky();

skyTimer = setInterval(() => {
  if (auto) {
    skyItem.move(16 / 1000)
  }
}, 16)
