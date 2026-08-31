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

function nodesBetweenCriticalPoints(head: ListNode | null): number[] {
    let current: ListNode | null = head.next;
    let prev: number = head.val; 
    let next: number = null; 
    let arr: number[] = [];
    let i: number = 2
    let minDis: number = Infinity;
    while(current){
        next = current?.next?.val || null;
        let val: number = current.val
        if(next){
            if(prev < val && val > next){
                arr.push(i)
                if(arr.length >= 2 && minDis > i - arr[arr.length - 2]){
                    minDis = i - arr[arr.length - 2]
                }
            }
            if(prev > val && val < next){
                arr.push(i)
                if(arr.length >= 2 && minDis > i - arr[arr.length - 2]){
                    minDis = i - arr[arr.length - 2]
                }
            }
        }
        current = current.next;
        prev = val;
        i++;
    }
    return arr.length >= 2 ? [minDis, arr[arr.length - 1] - arr[0]] : [-1, -1]
};