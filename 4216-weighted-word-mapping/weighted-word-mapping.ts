function mapWordWeights(words: string[], weights: number[]): string {
    let str: string = "";
    for(let i: number = 0; i < words.length; i++){
      let num: number = 0;
      for(let j: number = 0; j < words[i].length; j++){
        num += weights[words[i].charCodeAt(j) - 97];
      }
      let n: number = num % 26;
      str += String.fromCharCode(122 - n)
    }
    return str;
};