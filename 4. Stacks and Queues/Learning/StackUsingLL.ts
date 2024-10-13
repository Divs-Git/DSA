export class Node {
    data: number;
    next: Node | null;

    constructor(data: number) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    private top: Node | null ;
    private size: number;

    constructor() {
        this.top = null;
        this.size = 0;
    }

    push(x:number) : void {
        const node = new Node(x);
        node.next = this.top;
        this.top = node;
        console.log('Element is pushed')
        this.size++;
    }

    pop(): number | undefined | null {
        if(this.top === null) {
            console.log('Stack is empty');
            return null;
        }

        const x = this.top?.data;
        this.top  = this.top?.next;
        this.size--;
        return x;
    }

    peek(): number | undefined {
        if (this.top === null) {
            console.log('Stack is empty');
        }
        return this.top?.data;
    }

    isEmpty(): boolean {
        return this.top === null;
    }

    print(): void {
        let curr  = this.top;
        let str = '';
        while (curr) {
            str += (curr.data + '->');
            curr = curr.next;
        }
        console.log(str)
    }
}

const stk = new Stack();
stk.push(10);
stk.push(20);
stk.push(30);
stk.push(40);
console.log(stk.pop())
console.log(stk.peek())
console.log(stk.isEmpty())
stk.print();