function fibonacci(n) {
  /*
    斐波那契：由0和1开始，之后的斐波那契数列每一项都等于前两项之和。
    斐波那契数列前两项都是1，所以判断n是否等于1或者2，如果是则直接返回1
    斐波那契数列示例：1、1、2、3、5、8、13、21、34
  */
  n = n && parseInt(n);
  if (n == 1 || n == 2) {
    return 1;
  }
  // 使用arguments.callee实现递归
  return arguments.callee(n - 2) + arguments.callee(n - 1);
}

let sum = fibonacci(8)
console.log(sum) // 21