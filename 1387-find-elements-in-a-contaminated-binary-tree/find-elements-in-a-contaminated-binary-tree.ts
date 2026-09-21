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

class FindElements {
    private head: TreeNode;
    constructor(root: TreeNode | null) {
        let current = root;
        function valueChange(node, val){
            if(!node){
                return;
            }
            node.val = val;
            valueChange(node.left, val * 2 + 1)
            valueChange(node.right, val * 2 + 2)
        }
        valueChange(root, 0);
        this.head = root;
    }

    find(target: number): boolean {
        function traversal(node, target){
            if(!node){
                return false;
            }
            if(node.val === target)return true;
            return traversal(node.left, target) || traversal(node.right, target)
        }
        return traversal(this.head, target);
    }
}

/**
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */