const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", () => {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  const input = readLine();
  console.log(input);
}
