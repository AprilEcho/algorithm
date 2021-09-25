// 不含重复字符的最长子字符串
// 输入: s = "abcabcbb"
// 输出: 3
// 解释: 因为无重复字符的最长子字符串是 "abc"，所以其长度为 3。

var lengthOfLongestSubstring = function(s) {
  let max = 0;
  let str = '';
  for(let i=0;i<s.length;i++){
    let index = str.indexOf(s[i])
    if(index!==-1){
      str = str.substring(index+1)
    }
    str+=s[i];
    max = Math.max(max,str.length);
  }
  return max;
}