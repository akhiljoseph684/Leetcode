class ProductOfNumbers {
    private nums: number[];
    constructor() {
        this.nums = []
    }

    add(num: number): void {
        this.nums.push(num);
    }

    getProduct(k: number): number {
        let sum = 1;
        for(let i = this.nums.length - 1; i >= this.nums.length - k; i--){
            sum *= this.nums[i];
        }
        return sum;
    }
}

/**
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */