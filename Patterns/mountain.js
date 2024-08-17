function print(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";
    let spaces1 = n - i;
    let stars1 = i;
    let stars2 = i - 1;

    for (let j = 1; j <= spaces1; j++) {
      str += "  ";
    }
    for (let j = 1; j <= stars1; j++) {
      str += "* ";
    }
    for (let j = 1; j <= stars2; j++) {
      str += "* ";
    }
    console.log(str);
  }
}

print(5);
