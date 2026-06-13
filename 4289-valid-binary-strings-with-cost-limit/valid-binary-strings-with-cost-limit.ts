function generateValidStrings(n: number, k: number): string[] {
    let i: number = 0;
    let arr: string[] = [];
    function isValid(binary) {
        binary = binary.padStart(n, "0");
        let cost: number = 0;
        for(let i: number = 0; i < binary.length - 1; i++){
            if(binary[i] === "1" && binary[i + 1] === "1"){
                return {valid: false};
            }
            if(binary[i] === "1")cost += i
        }
        if(binary[binary.length - 1] === "1")cost += binary.length - 1;
        return {
            valid: true,
            cost,
            binary
        }
    }
    while(true){
        let value = i.toString(2);
        if(value.length > n){
            return arr;
        }
        let res = isValid(value);
        if(res.valid && res.cost <= k){
            arr.push(res.binary)
        }
        i++;
    }
};