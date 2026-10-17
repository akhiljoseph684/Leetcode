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

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    let arr: number[][] = [];
    let current = head;
    let output = head;
    let i = 0;
    let j = 0;
    while(current){
        i++;
        if(!arr[j]){
            arr[j] = [];
        }
        arr[j].push(current.val);
        current = current.next;
        if(k === i){
            i = 0;
            j++;
        }
    }
    current = head;
    i = k;
    j = 0;
    while(current){
        i--;
        if(arr[j].length === k){
            current.val = arr[j][i];
        }
        current = current.next;
        if(i === 0){
            i = k;
            j++;
        }
    }
    return output;
};