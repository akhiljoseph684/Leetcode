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

function deepestLeavesSum(root: TreeNode | null): number {
    let obj = {};
    let lastLevel = 0;
    const traversal = (node, level) => {
        if(!node)return;
        if(!node.left && !node.right){
            obj[level] = (obj[level] || 0) + node.val;
            if(level > lastLevel)lastLevel = level;
            return;
        }
        traversal(node.left, level + 1);
        traversal(node.right, level + 1);
    }
    traversal(root, 1);
    return obj[lastLevel];
};