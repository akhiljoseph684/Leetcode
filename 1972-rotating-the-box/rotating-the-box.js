/**
 * @param {character[][]} boxGrid
 * @return {character[][]}
 */
var rotateTheBox = function(boxGrid) {
    let arr = [];
    for(let i = 0; i < boxGrid.length; i++){
      let dot = [];
      let hash = [];
      let star = [];
      let ar = []
      for(let j = 0; j  < boxGrid[i].length; j++){
        if(boxGrid[i][j] == '*'){
          star.push('*')
          ar.push(...dot, ...hash, ...star)
          dot = [];
          hash = [];
          star = [];
        }else if(boxGrid[i][j] == '#')hash.push('#');
        else dot.push('.')
      }
      ar.push(...dot, ...hash, ...star)
      boxGrid[i] = ar;
    }
    for(let i = 0; i < boxGrid[0].length; i++){
      let ar = [];
      for(let j =  boxGrid.length - 1; j >= 0; j--){
        ar.push(boxGrid[j][i])
      }
      arr.push(ar)
    }
    return arr;
};