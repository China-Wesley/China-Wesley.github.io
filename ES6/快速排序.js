// function quickSort2(arr, begin, end) {
//   if (begin >= end - 1) return;
//   var left = begin;
//   var right = end;
//   do {
//     do left++; while (left < right && arr[left] < arr[begin]);
//     do right--; while (right > left && arr[right] > arr[begin]);
//     if (left < right) swap(arr, left, right)
//   } while (left < right);
//   var swapPoint = left == right ? right - 1 : right;
//   swap(arr, begin, swapPoint);
//   quickSort2(arr, begin, swapPoint);
//   quickSort2(arr, swapPoint + 1, end);
// }



let arr = [1, 5, 9, 6, 3, 5, 7];


function quickSort(arr, begin, end) {
  if (arr == null || arr.length == 0) {
    return [];
  }
  if (begin >= end - 1) return;
  let left = begin;
  let right = end;
  do {
    do {
      right--
      //记住 这里的判断条件是 为了能让他循环 
    } while (right > left && arr[right] > arr[begin]);
    do {
      left++
    } while (left < right && arr[left] < arr[begin]);
    if (left < right) {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
    }
  } while (left < right)
  //
  let index = left == right ? right - 1 : right;
  let t = arr[begin];
  arr[begin] = arr[index];
  arr[index] = t;
  quickSort(arr, begin, index);
  quickSort(arr, index + 1, end);
}

quickSort(arr, 0, arr.length - 1)
console.log(arr);


function demo() {
  let a = 0,
    left = 3;
  do {
    a++, left--
  } while (left > 0);
  return a;
}

console.log(demo())
