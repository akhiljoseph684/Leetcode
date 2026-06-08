function removeTrailingZeros(num: string): string {
    for(let i: number = num.length - 1; i >= 0; i--){
        console.log(num[i])
        if(num[i] != "0"){
            return num.slice(0, i + 1)
        }
    }
    return ""
};