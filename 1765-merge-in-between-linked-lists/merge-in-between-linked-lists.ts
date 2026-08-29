/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeInBetween(list1: ListNode | null, a: number, b: number, list2: ListNode | null): ListNode | null {
    let output: ListNode | null = list1;
    let start: ListNode | null = list1;
    let end: ListNode | null = list1;
    let current2: ListNode | null = list2;
    for(let i: number = 0; i < a - 1; i++){
        start = start?.next
    }
    for(let i: number = 0; i < b; i++){
        end = end?.next
    }
    start.next = list2;
    while(current2.next){
        current2 = current2.next;
    }
    if(current2){
        current2.next = end.next
    }

    return output;
};