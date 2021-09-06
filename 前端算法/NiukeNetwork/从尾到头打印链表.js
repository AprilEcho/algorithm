// 输入一个链表的头节点，按链表从尾到头的顺序返回每个节点的值（用数组返回）。
// 输入：
// {1,2,3}
// 返回值：
// [3,2,1]
function printListFromTailToHead(head) {
  const stk = [];
  if (head === null) return []
  if (head && head.val)
    stk.push(head.val);
  while (head.next!==null){
    head = head.next;
    stk.push(head.val);
  }
  return stk.reverse()
}
