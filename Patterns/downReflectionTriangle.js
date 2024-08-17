function print(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= n - i + 1; j++) {
      str += "* ";
    }
    console.log(str);
  }
}

print(5);
