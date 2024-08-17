function gcd(a, b) {
  //   let ans = 1;
  //   for (let i = 2; i <= Math.min(a, b); i++) {
  //     if (a % i == 0 && b % i == 0) ans = i;
  //   }
  //   return ans;
  while (a > 0 && b > 0) {
    if (a > b) a = a % b;
    else if (b > a) b = b % a;
  }
  if (a == 0) return b;
  if (b == 0) return a;
}

console.log(gcd(7, 11));
