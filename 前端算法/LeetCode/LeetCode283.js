// 移动零
// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
var moveZeroes = function (nums) {
  let i = 0
  let j = 0
  while (i < nums.length - j) {
    if (nums[i] === 0) {
      nums.splice(i, 1)
      nums.push(0)
      j++
      continue
    }
    i++
  }
};