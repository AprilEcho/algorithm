/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
// 重建二叉树
// 给定某二叉树的前序遍历和中序遍历，请重建出该二叉树并返回它的头结点。
function reConstructBinaryTree(pre, vin) {
  // write code here
  if (pre.length === 0 || vin.length === 0) {
    return null;
  }

  var index = vin.indexOf(pre[0]);
  var left = vin.slice(0, index);
  var right = vin.slice(index + 1);
  return {
    val: pre[0],
    left: reConstructBinaryTree(pre.slice(1, index + 1), left),
    right: reConstructBinaryTree(pre.slice(index + 1), right)
  }

}

module.exports = {
  reConstructBinaryTree: reConstructBinaryTree
};

