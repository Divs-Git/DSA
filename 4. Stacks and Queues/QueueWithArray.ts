class Queue {
    private size: number;
    private arr: number[];
    private start: number;
    private end: number;
    private capacity: number = 4;

    constructor() {
        this.size = 0;
        this.arr = new Array(this.capacity);
        this.start = -1;
        this.end = -1;
    }

    push(x:number) : void {
        if(this.size === this.capacity) {
            console.log('Queue is full')
            return;
        }
        if(this.start === -1 && this.end === -1) {
            this.start = 0;
            this.end = 0;
        } else {
            this.end = (this.end + 1) % this.capacity;
        }

        this.arr[this.end] = x;
        this.size++;
    }

    top(): number | null {
        if(this.size === 0) {
            console.log('Queue is empty');
            return null;
        }

        return this.arr[this.start];
    }

    pop(): number | null {
        if(this.size === 0) {
            console.log('Queue is empty');
            return null;
        }

        const x = this.arr[this.start];
        this.start = (this.start + 1) % this.capacity;
        this.size--;
        if (this.size === 0) {
            this.start = -1;
            this.end = -1;
        }

        return x;
    }

    sizeOfQueue(): number {
        return this.size;
    }
}

const queue = new Queue();
queue.push(10);
queue.push(20);
queue.push(30);
queue.push(40);
queue.push(40);
console.log(queue.top())
queue.pop();
queue.push(40);
console.log(queue)