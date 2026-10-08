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

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    console
    let arr1 = [];
    let arr2 = [];
    let output: ListNode | null = null;
    let check: boolean = false;
    while(headA || headB){
        if(headA){
            arr1.push(headA);
            headA = headA.next;
        }
        if(headB){
            arr2.push(headB);
            headB = headB.next;
        }
    };
    let i: number = arr1.length - 1;
    let j: number = arr2.length - 1;
    if(arr1[0] === arr2[0])return arr1[0]
    while(i >= 0 && j >= 0){
        if(arr1[i] !== arr2[j]){
            return arr1[i + 1] ? arr1[i + 1] : null;
        }
        i--;
        j--;
    }
    if(i >= 0){
        return arr1[i + 1]
    }
    if(j >= 0){
        return arr2[j + 1]
    }
    return null;
};
