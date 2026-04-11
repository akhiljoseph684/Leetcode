/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let arr = [];
    let current = head;
    let dummy = new ListNode(0)
    let output = dummy;
    while(current){
      if(!arr.includes(current.val)){
        arr.push(current.val);
        dummy.next = current;
        dummy = dummy.next;
      }
      current = current.next;
    }
    dummy.next = null;
    return output.next;
};