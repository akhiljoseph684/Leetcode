/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function averageOfSubtree(root: TreeNode | null): number {
    let count = 0;
    let queue = [root];
    while(queue.length > 0){
        let node = queue.pop();
        if(!node)break;

        if(isSame(node)){
            count++;
        }

        if(node.left){
            queue.push(node.left)
        }
        if(node.right){
            queue.push(node.right)
        }
    }
    function isSame(node){
        let val = node.val;
        let queue = [node];
        let sum: number = 0;
        let count: number = 0;
        while(queue.length > 0){
            let node = queue.pop();
            if(!node)break;

            sum += node.val;
            count++;
            if(node.left){
                queue.push(node.left)
            }
            if(node.right){
                queue.push(node.right)
            }
        }
        return val === Math.floor(sum / count)

    }
    return count;
};