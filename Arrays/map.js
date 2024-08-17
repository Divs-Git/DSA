const arr = [1, 2, 3, 5, 6];

const resArr = arr.map((el) => el * 2);
console.log(resArr);

// Index -> second argument
function print(el, idx) {
  return `the el is ${el} at idx ${idx}`;
}
const res2 = arr.map(print);
console.log(res2);

// Custom Mapper
function CustomMapper(qrr, func) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(func(arr[i], i));
  }
  return res;
}

const value = CustomMapper(arr, print);
console.log(value);
