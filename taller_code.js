// Write a function that takes in a non-empty array of integers that are sorted in ascending order and returns a new array of the same length with the squares of the original integers also sorted in ascending order.

const array = [-10, -5, 0, 5, 10];
const arraySquared = array
  .map((i) => i * i)
  .sort(function (a, b) {
    return a - b;
  });

console.log(arraySquared);

//For example, if you’re given coins = [1, 2, 5], the minimum amount of change that you can’t create is 4. If you’re given no coins, the minimum amount of change that you can’t create is 1.

const coins = [1, 2, 5];
let sum = 1;

coins.forEach((c) => {
  if ((sum = c)) {
    sum = +c;
  } else {
    return;
  }
});
