function printNTo1(n:number):void {
    if(n === 1) {
        console.log(n);
        return;
    }

    console.log(n);
    printNTo1(n-1);
}

printNTo1(7)