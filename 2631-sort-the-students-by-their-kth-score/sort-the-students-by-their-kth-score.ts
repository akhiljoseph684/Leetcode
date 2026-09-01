function sortTheStudents(score: number[][], k: number): number[][] {
    let arr = [];
    let output: number[][] = []
    for(let i: number = 0; i < score.length; i++){
        arr.push({
            index: i,
            val: score[i][k]
        })
    }
    arr.sort((a, b) => b.val - a.val)
    for(let i: number = 0; i < arr.length; i++){
        output.push(score[arr[i].index])
    }
    return output;
};