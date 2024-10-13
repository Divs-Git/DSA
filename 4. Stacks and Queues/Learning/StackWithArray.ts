class stack {
    private size: number;
    private arr: number[];
    private top: number;

    constructor() {
        this.size = 1000;
        this.arr = new Array(this.size);
        this.top = -1;
    }

    push(x:number) : void {
        this.top++;
        this.arr[this.top] = x;
    }

    pop() : number | null {
        if(this.top === -1) {
            console.log('Stack is empty');
            return null;
        }
        const x = this.arr[this.top];
        this.arr[this.top] = -Infinity
        this.top--;
        return x;
    }

    topElement(): number  | null  {
        if (this.top === -1) {
            console.log('Stack is empty');
            return null;
        }

        return this.arr[this.top];
    }

    sizeOfStack(): number  {
        return this.top + 1;
    }
}

const st = new stack();
st.push(10);
st.push(20);
st.push(30);
st.push(40);
console.log(st)
console.log(st.pop())
console.log(st.topElement());
// st.push(50)
console.log(st.sizeOfStack());
console.log(st)
