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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    if(lists.length === 0) return null;
    let arr: number[] = [];
    for(let i: number = 0; i < lists.length; i++){
        let current = lists[i];
        while(current){
            arr.push(current.val);
            current = current.next;
        }
    }
    arr.sort((a, b) => a - b);
    if(arr.length === 0)return null;
    let current = new ListNode(arr[0]);
    let output = current;
    for(let i: number = 1; i < arr.length; i++){
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return output
};