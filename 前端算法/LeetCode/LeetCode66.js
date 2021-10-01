// 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。
// 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
// 你可以假设除了整数 0 之外，这个整数不会以零开头。

// 输入：digits = [1,2,3]
// 输出：[1,2,4]
// 解释：输入数组表示数字 123。
function plusOne(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    // 从后往前遍历，每次若继续遍历，说明有进位情况产生
    digits[i]++;
    digits[i] %= 10;
    // 若余10后为零，说明已进位，进行下一次循环，若不为零，直接得出结果数组
    if (digits[i] !== 0) return digits;
  }
  // 若进行到这一步，说明全部都进位了，原数组为长为digits.length的全为9的数组，如[9, 9, 9]等
  // 则现在的digits数组全为零，然后需要最高位进一
  digits.unshift(1)
  // 也可 return [1, ...digits]; 但会多一些内存，所以选择unshift之后再return
  return digits;
}
