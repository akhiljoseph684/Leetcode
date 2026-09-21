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

function createBinaryTree(descriptions: number[][]): TreeNode | null {
    let obj = {};
    let parents = {}
    let child = {}
    for(let i: number = 0; i < descriptions.length; i++){
        let root =  descriptions[i][0];
        let key = descriptions[i][1];
        parents[root] = true
        child[key] = true
        if(obj[root]){
            let node = obj[root];
            let left = undefined;
            let right = undefined;
            if(descriptions[i][2] === 1){
                if(obj[key]){
                    left = obj[key]
                    node.left = left
                }else{
                    left = new TreeNode(descriptions[i][1])
                    node.left = left
                    obj[left.val] = left;
                }
            }

            if(descriptions[i][2] === 0){
                if(obj[key]){
                    right = obj[key]
                    node.right = right
                }else{
                    right = new TreeNode(descriptions[i][1])
                    node.right = right
                    obj[right.val] = right
                }
            }
        }else{
            let left = undefined;
            let right = undefined;
            if(descriptions[i][2] === 1){
                if(obj[key]){
                    left = obj[key]
                }else{
                    left = new TreeNode(descriptions[i][1])
                    obj[left.val] = left
                }
            }

            if(descriptions[i][2] === 0){
                if(obj[key]){
                    right = obj[key]
                }else{
                    right = new TreeNode(descriptions[i][1])
                    obj[right.val] = right
                }
            }

            let newNode = new TreeNode(root, left, right)
            obj[root] = newNode;
        }
    }
    for(let parent in obj){
        if(!child[parent])return obj[parent]
    }
};