function decimalToBinary(n) {
  let ans = "";
  while (n) {
    if (n % 2 == 0) {
      ans = "0" + ans;
    } else {
      ans = "1" + ans;
    }
    n = Math.floor(n / 2);
  }
  return ans;
}

console.log(decimalToBinary(35));
