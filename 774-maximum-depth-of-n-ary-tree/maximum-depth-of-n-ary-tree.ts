/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     children: _Node[]
 * 
 *     constructor(val?: number, children?: _Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = (children===undefined ? [] : children)
 *     }
 * }
 */


function maxDepth(root: _Node | null): number {
    if(!root)return 0;
    let greatest: number = 0;
    function traversal(children, depth){
        if(greatest < depth){
            greatest = depth;
        }
        for(let i: number = 0; i < children.length; i++){
            if(children[i]){
                traversal(children[i].children, depth + 1);
            }
        }
    }
    traversal(root.children, 1);
    return greatest;
};