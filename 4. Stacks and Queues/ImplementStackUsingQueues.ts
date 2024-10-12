// https://leetcode.com/problems/implement-stack-using-queues/description/
class MyQueue {
    public queue: number[];
    constructor() {
        this.queue = [];
    }

    push(x: number) {
        this.queue.push(x);
    }

    peek() {
        return this.queue[0];
    }

    pop() {
        return this.queue.shift();
    }

    size() {
        return this.queue.length;
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}
class MyStack {
    public Q;
    constructor() {
        this.Q = new MyQueue();
    }

    push(x: number): void {
        let s = this.Q.queue.length;
        this.Q.push(x);
        for(let i = 0 ; i < s ; i++) {
            this.Q.push(this.Q.peek());
            this.Q.pop();
        }
    }

    pop(): number | undefined {
        return this.Q.pop();
    }

    top(): number {
        return this.Q.peek()
    }

    empty(): boolean {
        return this.Q.queue.length === 0;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */