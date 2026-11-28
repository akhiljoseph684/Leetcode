function findArray(pref: number[]): number[] {
    let arr: number[] = Array(pref.length);

    arr[0] = pref[0];

    for(let i: number = 1; i < pref.length; i++){
        arr[i] = pref[i - 1] ^ pref[i];
    }
    return arr;
};