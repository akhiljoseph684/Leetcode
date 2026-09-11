class BrowserHistory {
    private arr: string[];
    private currentIndex: number;
    constructor(homepage: string) {
        this.arr = [homepage];
        this.currentIndex = 0;
    }

    visit(url: string): void {
        this.arr.splice(this.currentIndex + 1, Infinity, url);
        this.currentIndex = this.arr.length - 1
    }

    back(steps: number): string {
        let index = Math.max(0, this.currentIndex - steps)
        let val = this.arr[index];
        this.currentIndex = index
        return val
    }

    forward(steps: number): string {
        let index = Math.min(this.arr.length - 1, this.currentIndex + steps)
        let val = this.arr[index];
        this.currentIndex = index
        return val
    }
}