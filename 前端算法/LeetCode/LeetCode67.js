// 二进制求和
// 给你两个二进制字符串，返回它们的和（用二进制表示）。
// 输入为 非空 字符串且只包含数字 1 和 0。
// 输入: a = "11", b = "1"
// 输出: "100"

function addBinary(a, b) {
  return (BigInt("0b" + a) + BigInt("0b" + b)).toString(2);
}