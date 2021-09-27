// 两个链表的第一个重合节点
// 给定两个单链表的头节点 headA 和 headB ，请找出并返回两个单链表相交的起始节点。
// 如果两个链表没有交点，返回 null 。
//解题思路：
// 做这道题之前，我们先想象一个场景，两个人用一样的速度跑步，怎样才可以第一次相遇，那肯定是路程相同的时候啦，
// 所以这道题也是这个原理：
// 两个链表每次都走到下一个节点，当其中一个无路可走的时候，就跑到另一个链表的开头，继续走，这样两个人第一次相遇的时候就是两个链表的长度和。

var getIntersectionNode = function (headA,headB) {
  let curA = headA;
  let curB = headB;
  while ( curA != curB ){
    curA = curA == null ? headB : curA.next;
    curB = curB == null ? headA : curB.next;
  }
  return curA;
}

