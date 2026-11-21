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

function invertTree(root: TreeNode | null): TreeNode | null {
    function traversal(root){
        if(!root)return;
        if(root.left && root.right){
            let temp = root.left;
            root.left = root.right;
            root.right = temp;
            traversal(root.left);
            traversal(root.right);
        }else if(root.left){
            root.right = root.left;
            root.left = null;
            traversal(root.right);
        }else if(root.right){
            root.left = root.right
            root.right = null;
            traversal(root.left);
        }
    }
    traversal(root);
    return root;
};