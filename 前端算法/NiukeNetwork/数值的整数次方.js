// 给定一个double类型的浮点数base和int类型的整数exponent。求base的exponent次方。
// 保证base和exponent不同时为0。不得使用库函数，同时不需要考虑大数问题，也不用考虑小数点后面0的位数。
function Power(base, exponent) {
  if (base == 0 && exponent == 0)
    return false;
  if (base == 0) {
    return 0;
  } else {
    return Math.pow(base, exponent)
  }
}