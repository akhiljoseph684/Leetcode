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
var deleteMiddle = function(head) {
    if(!head.next)return null;
    if(!head.next.next){
        head.next = null;
        return head;
    }
    let slow = head;
    let fast = head;
    while(fast?.next){
        fast = fast.next.next;
        slow = slow.next
    }
    slow.val = slow.next?.val;
    slow.next = slow.next?.next;
    return head;
};