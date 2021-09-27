// 回文链表
// 给定一个链表的 头节点 head ，请判断其是否为回文链表。
// 如果一个链表是回文，那么链表节点序列从前往后看和从后往前看是相同的。

var isPalindrome = function(head) {
  let arr = [];
  while(head){
    arr.push(head.val);
    head = head.next;
  }
  let len = Math.floor(arr.length/2);
  for(let i = 0; i < len; i++){
    if(arr[i]!==arr[arr.length-1-i]) return false;
  }
  return true;
};