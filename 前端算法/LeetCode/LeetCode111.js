// 111. 二叉树的最小深度
// 给定一个二叉树，找出其最小深度。
// 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
// 说明：叶子节点是指没有子节点的节点。
var minDepth = function (root) {
  if (root == null) return 0;
  if (root.left == null && root.right == null) return 1;
  let ans = Number.MAX_SAFE_INTEGER;
  if (root.left != null) {
    ans = Math.min(minDepth(root.left), ans);
  }
  if (root.right != null) {
    ans = Math.min(minDepth(root.right), ans);
  }
  return ans + 1;
}