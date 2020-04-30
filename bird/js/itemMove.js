/*
 * @Author: your name
 * @Date: 2020-04-28 20:07:50
 * @LastEditTime: 2020-04-29 15:31:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \像素鸟\js\itemMove.js
 */

/**
 * 元素要有宽、高、dom、速度(x,y)、位置(x,y)、
 */
class ItemMove {
  constructor(width, height, dom, xSpeed, ySpeed, left, top) {
    this.width = width;
    this.height = height;
    this.dom = dom;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
    this.left = left;
    this.top = top;
  }

  render() {
    this.dom.style.width = this.width + 'px';
    this.dom.style.height = this.height + 'px';
    this.dom.style.left = this.left + '%';
    this.dom.style.top = this.top + '%';

  }

  move(space) {
    const left = this.xSpeed * space;
    const top = this.ySpeed * space;
    this.left = this.left + left;
    this.top = this.top + top;
    if (this.onMove) {
      this.onMove();
    }
    this.render();
  }

}


// const move = new ItemMove(10);
