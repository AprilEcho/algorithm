// 101. 对称二叉树
// 给定一个二叉树，检查它是否是镜像对称的。
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  return isMirror(root, root);
};

function isMirror(t1, t2) {
  if (t1 == null && t2 == null) return true;
  if (t1 == null || t2 == null) return false;
  return (t1.val == t2.val) && isMirror(t1.right, t2.left) && isMirror(t1.left, t2.right)
}