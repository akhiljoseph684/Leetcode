/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  let x = 0;
  let y = 0;
    for(let i = 0; i < board.length; i++){
      let col = [];
      let row = [];
      let square = [];
      let a = x;
      let b = y;
      for(let j = 0; j < board[i].length; j++){
        if(col.includes(board[i][j]) || row.includes(board[j][i]) || square.includes(board[a][b])){
          return false;
        }
        if(board[a][b] !== '.')square.push(board[a][b])
        if(board[i][j] !== '.')col.push(board[i][j]);
        if(board[j][i] !== '.')row.push(board[j][i]);
        b++;
        if(j % 3 === 2){
          a++;
          b = y;
        }
      }
      y += 3;
      if(i % 3 === 2){
        x += 3
        y = 0;
      }
      
    }
    return true;
};