/**
 Do not return anything, modify arr in-place instead.
 */
function duplicateZeros(arr: number[]): void {
    let a: number[] = [...arr];
    let i: number = 0;
    let j: number = 0;
    while(true){
        arr[j] = a[i];
        j++;
        if(a[i] === 0){
            if(j >= a.length)break;
            arr[j] = 0;
            j++;
        }
        if(j >= a.length)break;
        i++;
    }
};