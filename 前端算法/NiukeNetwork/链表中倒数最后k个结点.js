// 输入一个链表，输出一个链表，该输出链表包含原链表中从倒数第k个结点至尾节点的全部节点。
// 如果该链表长度小于k，请返回一个长度为 0 的链表。
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
  let fast = head;
  let low = head;
  let n = 0 ;
  while(fast){
    fast = fast.next;
    if(n>=k){
      low = low.next;
    }
    n++;
  }
  return low;
};