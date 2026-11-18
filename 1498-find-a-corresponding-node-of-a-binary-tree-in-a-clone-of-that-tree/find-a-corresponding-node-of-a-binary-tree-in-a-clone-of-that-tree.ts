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

function getTargetCopy(original: TreeNode | null, cloned: TreeNode | null, target: TreeNode | null): TreeNode | null {
    let q1 = [original];
    let q2 = [cloned];
    while(q1.length > 0){
        let node = q1.shift();
        let cloneNode = q2.shift();
        if(node === target){
            return cloneNode
        }
        if(node.left)q1.push(node.left)
        if(node.right)q1.push(node.right)
        if(cloneNode.left)q2.push(cloneNode.left)
        if(cloneNode.right)q2.push(cloneNode.right)
    }
};