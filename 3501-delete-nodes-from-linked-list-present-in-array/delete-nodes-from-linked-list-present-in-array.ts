function modifiedList(nums: number[], head: ListNode | null): ListNode | null {
    const set = new Set(nums);
    while(head && set.has(head.val)){
        head = head.next;
    }
    let curr = head;
    while(curr && curr.next){
        if(set.has(curr.next.val)){
            curr.next = curr.next.next;
        }else{
            curr = curr.next;
        }
    }
    return head;
};