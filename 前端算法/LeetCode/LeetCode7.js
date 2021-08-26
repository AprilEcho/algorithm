// 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
// 如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。
// 假设环境不允许存储 64 位整数（有符号或无符号）。
var reverse = function (x) {
  if (x >= 0) {
    x= x.toString().split('').reverse().join('');
  }
  else{
    x=-x;
    x=-(x.toString().split('').reverse().join(''));
  }
  if (x>=Math.pow(2,31)||x<Math.pow(-2,31)) return 0;
  else return x;
}

console.log(reverse(123456789))