/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let current = head;
    let str1 = `${current.val}`;
    let str2 = `${current.val}`;
    while(current.next){
      current = current.next;
      str1 += current.val;
      str2 = `${current.val}${str2}`
    }
    return str1 === str2;
};