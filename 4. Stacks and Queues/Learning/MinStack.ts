/**
 * https://leetcode.com/problems/min-stack/
 * TC: O(1) | S.C: O(2*n)
 */
// @ts-ignore
class MinStack {
    public stack:[number,number][];
    constructor() {
        this.stack = [];
    }

    push(val: number): void {
        let min !: number;
        if(this.stack.length === 0) {
            min = val;
        } else {
            min = Math.min(val,this.stack[this.stack.length - 1][1]);
        }
        this.stack.push([val,min])
    }

    pop(): void {
        if (this.stack.length > 0) {
            this.stack.pop();
        }
    }

    top(): number {
        return this.stack[this.stack.length - 1][0];
    }

    getMin(): number {
        return this.stack[this.stack.length - 1][1];
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */


/**
 * TC: O(1) | SC: O(n)
 */
// @ts-ignore
class MinStack {
    public stack: number[];
    public min: number;
    constructor() {
        this.stack = [];
        this.min = Infinity;
    }

    push(val: number): void {
        if(this.stack.length === 0) {
            this.min = val;
            this.stack.push(val);
        } else {
            if(val > this.min) this.stack.push(val);
            else {
                this.stack.push(2*val - this.min);
                this.min = val;
            }
        }
    }

    pop(): void {
        if(this.stack.length === 0) return;
        const x = this.stack[this.stack.length - 1];
        this.stack.pop();
        if(x < this.min) {
            // switches back to previous minimum
            this.min = 2 * this.min - x;
        }
    }

    top(): number {
        if(this.stack.length === 0) return -1;
        const x = this.stack[this.stack.length - 1];
        if(this.min < x) return x;
        return this.min;
    }

    getMin(): number {
        return this.min;
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */