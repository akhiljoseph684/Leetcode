function decrypt(code: number[], k: number): number[] {
    const arr: number[] = new Array(code.length).fill(0);
    if (k === 0) return arr;
    let sum = 0;

    if (k > 0) {
        for (let i = 1; i <= k; i++) {
            sum += code[i % code.length];
        }
        for (let i = 0; i < code.length; i++) {
            arr[i] = sum;
            sum -= code[(i + 1) % code.length];
            sum += code[(i + k + 1) % code.length];
        }
    } else {
        k = Math.abs(k);
        for (let i = code.length - k; i < code.length; i++) {
            sum += code[i];
        }
        for (let i = 0; i < code.length; i++) {
            arr[i] = sum;
            sum -= code[(i - k + code.length) % code.length];
            sum += code[i];
        }
    }
    return arr;
}