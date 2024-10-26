function print1ToN(n: number):void {
  if (n === 1) {
    console.log(n);
    return;
  }

  print1ToN(n - 1);
  console.log(n);
}

print1ToN(7);
