// 有效的回文
// 给定一个字符串 s ，验证 s 是否是 回文串 ，只考虑字母和数字字符，可以忽略字母的大小写。
// 本题中，将空字符串定义为有效的 回文串 。

// 输入: s = "A man, a plan, a canal: Panama"
// 输出: true
// 解释："amanaplanacanalpanama" 是回文串

var isPalindrome = function (s) {
  const arr = s.toLowerCase().match(/[\da-z]/gi) || []
  return arr.join('') === arr.reverse().join('')
}