const arr = [1, 2, 3, 4, 5];

function sum(previousSum, currElement) {
  console.log(`${previousSum} -> ${currElement}`);
  return (previousSum += currElement);
}

const res = arr.reduce(sum);
console.log(res);

// Real life use case
// Total sum from cart

const cart = [
  { price: 10000, name: "Iphone" },
  { price: 400, name: "backCover" },
  { price: 300, name: "Glass" },
];

function totalSum(previousSum, currValue) {
  let total = previousSum.price + currValue.price;
  return { price: total };
}

const res2 = cart.reduce(totalSum);
console.log(res2.price);
