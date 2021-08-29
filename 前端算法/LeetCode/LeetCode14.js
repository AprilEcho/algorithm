// 编写一个函数来查找字符串数组中的最长公共前缀。
// 如果不存在公共前缀，返回空字符串 ""。
var longestCommonPrefix = function (strs) {
  if (strs.length == 0) return "";
  const rows = strs.length;
  const cols = strs[0].length;
  for (let i = 0; i < cols; i++) {
    const firstChar = strs[0][i];
    for (let j = 1; j < rows; j++) {
      if (strs[j].length == i || strs[j][i] != firstChar) {
        return strs[0].substr(0, i)
      }
    }
  }
  return strs[0];
}