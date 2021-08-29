// 罗马数字转整数
// 罗马数字包含以下七种字符: I， V， X， L，C，D 和 M。
//
// 字符          数值
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
var romanToInt = function (s) {
  const symbolValues = new Map();
  symbolValues.set('I', 1);
  symbolValues.set('V', 5);
  symbolValues.set('X', 10);
  symbolValues.set('L', 50);
  symbolValues.set('C', 100);
  symbolValues.set('D', 500);
  symbolValues.set('M', 1000);
  let ans = 0;
  const n = s.length;
  for (let i = 0; i < n; ++i) {
    const value = symbolValues.get(s[i]);
    if (i < n - 1 && value < symbolValues.get(s[i + 1])) {
      ans -= value;
    } else {
      ans += value;
    }
  }
  return ans;
}