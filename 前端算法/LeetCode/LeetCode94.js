// 二叉树的中序遍历
//给定一个二叉树的根节点 root ，返回它的 中序 遍历。
var inorderTraversal = function(root) {
  const res = [];
  const stk = [];
  while (root || stk.length) {
    while (root) {
      stk.push(root);
      root = root.left;
    }
    root = stk.pop();
    res.push(root.val);
    root = root.right;
  }
  return res;
};
