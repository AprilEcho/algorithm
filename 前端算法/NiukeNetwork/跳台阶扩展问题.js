// 一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶(n为正整数)总共有多少种跳法。
function jumpFloorII(number) {
  // write code here
  if (number === 0) return 0
  return Math.pow(2, number - 1)
}

module.exports = {
  jumpFloorII: jumpFloorII
};