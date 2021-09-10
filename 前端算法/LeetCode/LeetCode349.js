// 两个数组的交集
// 给定两个数组，编写一个函数来计算它们的交集。
// 输入：nums1 = [1,2,2,1], nums2 = [2,2]
// 输出：[2]

var intersection = function (nums1,nums2) {
  return [...new Set(nums1.filter(item=>nums2.includes(item)))]
}