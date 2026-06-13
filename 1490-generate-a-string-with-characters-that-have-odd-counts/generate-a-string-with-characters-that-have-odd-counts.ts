function generateTheString(n: number): string {
    let str: string = "ab";
    let output: string = "";
    for(let i: number = 0; i < n; i++){
        if(n % 2 === 0 && i < n - 1){
            output += str[0];
        }else{
            output += str[1];
        }
    }
    return output
};