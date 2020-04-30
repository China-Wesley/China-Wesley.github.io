/*
 * @Author: your name
 * @Date: 2020-04-28 21:03:07
 * @LastEditTime: 2020-04-29 20:00:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \像素鸟\js\land.js
 */
const land = document.getElementsByClassName("land")[0];
const landStyles = getComputedStyle(land);
const landWidth = parseFloat(landStyles.width);
const landHeight = parseFloat(landStyles.height);
let landTimer = null;
var auto = false;
class Land extends ItemMove {
  constructor() {
    super(landWidth, landHeight, land, -10, 0, 0);
  }

  onMove() {
    if (Math.abs(this.left) >= 100) {
      this.left = 0;
    }
  }
}


const landItem = new Land();

landTimer = setInterval(() => {
  if (auto) {
    landItem.move(16 / 1000)
  }
}, 16)
