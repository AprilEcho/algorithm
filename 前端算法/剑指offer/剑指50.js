// 第一个只出现一次的字符
// 在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。
//
// 示例 1:
//
// 输入：s = "abaccdeff"
// 输出：'b'
// 示例 2:
//
// 输入：s = ""
// 输出：' '

var firstUniqChar = function (s) {
  for (let i = 0; i < s.length; i++) {
    k = s.indexOf(s[i]);
    e = s.indexOf(s[i], k + 1);
    if (e == -1) return s[i];
  }
  return " ";
};
