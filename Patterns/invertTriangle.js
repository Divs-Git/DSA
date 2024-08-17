function print(n) {
  for (let i = 1; i <= n; i++) {
    let space = n - i;
    let stars = i;
    let str = "";
    for (let j = 1; j <= space; j++) {
      str += "  ";
    }
    for (let j = 1; j <= i; j++) {
      str += "* ";
    }
    console.log(str);
  }
}

print(5);
