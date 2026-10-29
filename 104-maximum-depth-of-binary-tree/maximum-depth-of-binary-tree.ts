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

function maxDepth(root: TreeNode | null): number {
    let greatest: number = 0;
    function traversal(root, depth){
        if(!root)return;
        if(greatest < depth)greatest = depth;
        if(root.left){
            traversal(root.left, depth + 1)
        }
        if(root.right){
            traversal(root.right, depth + 1)
        }
    }
    traversal(root, 1)
    return greatest
};