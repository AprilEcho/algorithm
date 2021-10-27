// 104. 二叉树的最大深度
var maxDepth = function (root) {
  if (!root) {
    return 0
  } else {
    let left = maxDepth(root.left);
    let right = maxDepth(root.right);
    return Math.max(left, right) + 1
  }
}