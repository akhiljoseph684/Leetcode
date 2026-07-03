function findDegrees(matrix: number[][]): number[] {
    let arr: number[] = [];
    for(let i: number = 0; i < matrix.length; i++){
        let num: number = 0;
        for(let j: number = 0; j < matrix[i].length; j++){
            num += matrix[i][j]
        }
        arr.push(num)
    }
    return arr;
};