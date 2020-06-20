/*
 * @Author: your name
 * @Date: 2020-04-27 22:26:55
 * @LastEditTime: 2020-04-27 22:31:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JS jQuery 源码\HTML 5\work.js
 */
this.onmessage = function (e) {
  //   console.log(e)
  var result = 0;
  for (let i = 0; i < e.data.num; i++) {
    result += 1;
  }
  this.postMessage(result)
}
