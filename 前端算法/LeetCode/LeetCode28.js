// 实现 strStr() 函数。
// 给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）。
// 如果不存在，则返回  -1 。
// 输入：haystack = "hello", needle = "ll"
// 输出：2

var strStr = function(haystack, needle) {
  //滑动窗口,以needle.length为窗口大小,步长为一
  if(haystack===''&&needle=="")return 0;
  let step = needle.length;
  for(let i =0 ;i<haystack.length;i++){
    if(haystack.substr(i,step) == needle){
      return i;
    }
  }
  return -1;
};