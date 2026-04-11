/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let current = head;
    let output = head;
    let size = 0;
    while(current){
        size++;
        current = current.next;
    }
    if(size === 1)return output.next
    current = head;
    if(size === n){
        current.val = current.next.val;
        current.next = current.next?.next
        return output;
    }
    let i = 0;
    while(i < size - n - 1){
        i++;
        current = current.next;
    }
    current.next = current.next?.next
    return output;
};