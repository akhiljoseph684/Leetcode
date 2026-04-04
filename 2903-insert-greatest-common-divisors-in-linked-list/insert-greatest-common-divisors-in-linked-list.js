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
var insertGreatestCommonDivisors = function(head) {
    if(!head.next)return head;
    function gcd(val1, val2){
        let len = val1 > val2 ? val2 : val1;
        for(let i = len; i > 0; i--){
            if(val1 % i === 0 && val2 % i === 0)return i
        }
    }
    let current = head;
    while(current.next){
        let num = gcd(current.val, current.next.val)
        let newNode = new ListNode(num);
        newNode.next = current.next
        current.next = newNode;
        current = newNode.next;
    }
    return head
};