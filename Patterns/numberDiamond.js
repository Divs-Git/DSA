/*
1 2 3 4 5 6 7
 2 3 4 5 6 7
  3 4 5 6 7
   4 5 6 7
    5 6 7
     6 7
      7
     6 7
    5 6 7
   4 5 6 7
  3 4 5 6 7
 2 3 4 5 6 7
1 2 3 4 5 6 7   
*/

function print(n) {
  // upper half
  for (let i = 1; i <= n; i++) {
    let spaces = i - 1;
    let str = "";
    for (let i = 1; i <= spaces; i++) {
      str += " ";
    }
    let num = i;
    while (num <= n) {
      str += num + " ";
      num++;
    }
    console.log(str);
  }
  // lower half
  for (let i = 1; i <= n - 1; i++) {
    let spaces = n - i - 1;
    let str = "";
    for (let i = 1; i <= spaces; i++) {
      str += " ";
    }
    let num = n - i;
    while (num <= n) {
      str += num + " ";
      num++;
    }
    console.log(str);
  }
}

print(7);
