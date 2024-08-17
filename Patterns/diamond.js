function print(n) {
  for (let i = 1; i <= 2 * n - 1; i++) {
    let str = "";
    if (i <= n) {
      let spaces = n - i;
      let stars1 = i;
      let stars2 = i - 1;
      for (let j = 1; j <= spaces; j++) {
        str += "  ";
      }
      for (let j = 1; j <= stars1; j++) {
        str += "* ";
      }
      for (let j = 1; j <= stars2; j++) {
        str += "* ";
      }
    } else {
      let spaces = i - n;
      let stars1 = 2 * n - i;
      let stars2 = 2 * n - i - 1;
      for (let j = 1; j <= spaces; j++) {
        str += "  ";
      }
      for (let j = 1; j <= stars1; j++) {
        str += "* ";
      }
      for (let j = 1; j <= stars2; j++) {
        str += "* ";
      }
    }
    console.log(str);
  }
}

print(5);
