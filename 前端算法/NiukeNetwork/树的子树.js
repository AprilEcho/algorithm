// 输入两棵二叉树A和B，判断B是不是A的子结构。(约定空树不是任意一个树的子结构)
//
// B是A的子结构， 即 A中有出现和B相同的结构和节点值。
// ac地址：https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof/
// 原文地址：https://xxoo521.com/2020-01-13-subtree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */

var isSubStructure = function(A, B) {
  // 题目约定：约定空树不是任意一个树的子结构
  if (!A || !B) {
    return false;
  }

  return (
    isSubTree(A, B) ||
    isSubStructure(A.left, B) ||
    isSubStructure(A.right, B)
  );
};

function isSubTree(pRoot1, pRoot2) {
  // B树遍历完了，说明B是A的子结构
  if (!pRoot2) {
    return true;
  }
  // A遍历完了，但是B还没有遍历完，那么B肯定不是A的子结构
  if (!pRoot1) {
    return false;
  }

  if (pRoot1.val !== pRoot2.val) {
    return false;
  }

  return (
    isSubTree(pRoot1.left, pRoot2.left) &&
    isSubTree(pRoot1.right, pRoot2.right)
  );
}
