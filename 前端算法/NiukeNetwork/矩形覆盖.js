// 我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。请问用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，从同一个方向看总共有多少种不同的方法？
function rectCover(number) {
  // write code here
  if (number == 0) {
    return 0
  }
  var arr = [1, 1]
  for (var i = 2; i <= number; i++) {
    arr[i] = arr[i - 1] + arr[1 - 2];
  }
  return arr[number]
}

module.exports = {
  rectCover: rectCover
};