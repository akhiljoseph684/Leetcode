function maxNumberOfFamilies(n: number, reservedSeats: number[][]): number {
    let obj = {};
    let num: number = 0;
    for(let i: number = 0; i < reservedSeats.length; i++){
        let row: number = reservedSeats[i][0];
        let col: number = reservedSeats[i][1];
        obj[row] = (obj[row] || []);
        obj[row].push(col);
    }
    let rowCount : number = 0;
    for(let row in obj){
        let check: boolean = true;
        if(!obj[row].includes(2) && !obj[row].includes(3) && !obj[row].includes(4) && !obj[row].includes(5)){
            num++;
            check = false;
        }
        if(!obj[row].includes(6) && !obj[row].includes(7) && !obj[row].includes(8) && !obj[row].includes(9)){
            num++;
            check = false;
        }
        if(check && (!obj[row].includes(4) && !obj[row].includes(5) && !obj[row].includes(6) && !obj[row].includes(7))){
            num++;
        }
        rowCount++;
    }
    num += (n - rowCount) * 2
    return num;
}