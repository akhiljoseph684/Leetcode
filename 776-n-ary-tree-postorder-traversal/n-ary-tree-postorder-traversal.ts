/**
 * Definition for node.
 * class _Node {
 *     val: number
 *     children: _Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

function postorder(root: _Node | null): number[] {
    if(!root)return []
    let arr: number[] = [];
    function traversal(children){
        if(children.length === 0)return;
        for(let i: number = 0; i < children.length; i++){
            if(children[i]){
                traversal(children[i].children);
                arr.push(children[i].val);
            }
            
        }
    }
    traversal(root.children);
    arr.push(root.val)
    return arr;
};