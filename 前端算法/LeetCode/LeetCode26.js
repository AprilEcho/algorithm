// 删除有序数组中的重复项
// 给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。
// 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
var removeDuplicates1 = function (nums) {
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length
}

var removeDuplicates2 = function (nums) {
  let preIndex = 0, currentIndex = 1;
  while (currentIndex < nums.length) {
    if (nums[preIndex] !== nums[currentIndex]) {
      nums[preIndex + 1] = nums[currentIndex];
      preIndex++
    }
    currentIndex++
  }
  return preIndex + 1;
}