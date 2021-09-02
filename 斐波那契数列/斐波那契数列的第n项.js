// 要求输入一个整数n，请你输出斐波那契数列的第n项（从0开始，第0项为0，第1项是1）。
function Fibonacci(n) {
  let arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2])
  }
  return arr[n]
}
