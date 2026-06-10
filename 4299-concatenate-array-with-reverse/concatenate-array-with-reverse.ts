function concatWithReverse(nums: number[]): number[] {
    let rev: number[] = [...nums].reverse();
    return [...nums, ...rev]
};