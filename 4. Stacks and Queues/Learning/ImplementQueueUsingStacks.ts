// https://leetcode.com/problems/implement-queue-using-stacks/description/
class MyStack1 {
    public stack: number[];

    constructor() {
        this.stack = [];
    }

    push(x: number) {
        this.stack.push(x);
    }

    pop() {
        return this.stack.pop();
    }

    top() {
        return this.stack[this.stack.length - 1];
    }

    isEmpty() {
        return this.stack.length === 0;
    }
}

class MyQueue1 {
    public S1;
    public S2;
    constructor() {
        this.S1 = new MyStack1();
        this.S2 = new MyStack1();
    }

    push(x: number): void {
        while(!this.S1.isEmpty()) {
            this.S2.push(this.S1.top());
            this.S1.pop();
        }

        this.S1.push(x);

        while(!this.S2.isEmpty()) {
            this.S1.push(this.S2.top());
            this.S2.pop();
        }
    }

    pop(): number | undefined {
        return this.S1.pop();
    }

    peek(): number {
        return this.S1.top();
    }

    empty(): boolean {
        return this.S1.stack.length === 0;
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */