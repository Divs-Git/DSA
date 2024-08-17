function fib(n) {
  if (n == 0) {
    console.log(0);
    return;
  }
  if (n >= 1) {
    console.log(0);
    console.log(1);
  }
  let a = 0;
  let b = 1;
  for (let i = 2; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
    console.log(b);
  }
}

fib(3);
