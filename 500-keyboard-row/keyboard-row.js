/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
  let output = []
    let keys1 = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
    let keys2 = [
  'Q','W','E','R','T','Y','U','I','O','P',
  'A','S','D','F','G','H','J','K','L',
  'Z','X','C','V','B','N','M'
]
    for(let i = 0; i < words.length; i++){
        let num = 0;
      for(let j = 0; j < words[i].length; j++){
        let n = 0;
        let index = keys1.findIndex(x => x === words[i][j]);
        if(index < 0){
          index = keys2.findIndex(x => x === words[i][j]);
        }
        if(j === 0){
          if(index < 10){
            num = 1;
          }else if(index < 19){
            num = 2
          }else{
            num = 3
          }
        }
        if(index < 10){
          n = 1;
        }else if(index < 19){
          n = 2
        }else{
          n = 3
        }
        console.log(num, n, words[i])
        if(num !== n)break;
        if(j === words[i].length - 1)output.push(words[i])
      }
    }
    return output;
};