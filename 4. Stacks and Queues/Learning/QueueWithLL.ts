import {Node} from "./StackUsingLL";

class Queue {
    private start: Node | null;
    private end: Node | null;
    private size: number;

    constructor() {
        this.start = null;
        this.end = null;
        this.size = 0;
    }

    push(x:number) : void {
        const node = new Node(x);
        if(this.start === null) {
            this.start = node;
            this.end = node;
        } else {
            if(this.end) {
                this.end.next = node;
            }
            this.end = node;
        }
        this.size++;
    }

    pop(): number | null {
        if(this.start === null) {
            console.log('Queue is empty');
            return null;
        }

        const x = this.start.data;
        this.start = this.start.next;
        if(this.start === null) {
            this.end = null;
        }
        this.size--;
        return x;
    }

    peek(): number | null {
        if(this.end === null) {
            console.log('Queue is empty');
            return null
        }

        return this.end.data;
    }

    getSize() {
        return this.size;
    }

    print() {
        let curr: Node | null | undefined = this.start;
        let str = ''
        while(curr) {
            str += (curr.data + '->');
            curr = curr.next;
        }
        console.log(str)
    }
}

const queue = new Queue();
queue.push(10);
queue.push(20);
queue.push(30);
queue.push(40);
console.log(queue.pop())
queue.print()