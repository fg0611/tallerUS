//github.com/ldiazssj3/js-challenge/blob/main/README.md

// Write a function that takes in a non-empty array of integers that are sorted in ascending
// order and returns a new array of the same length with the squares of the original integers also sorted in ascending order.

const arr = [-10, -5, 0, 5, 10];
const arrSquared = arr
  .map((i) => i * i)
  .sort(function (a, b) {
    return a - b;
  });

console.log(arrSquared);

// Given an array of positive integers representing the values of coins in your possession, write a function
// that returns the minimum amount of change (the minimum sum of money) that you CANNOT create.
// The given coins can have any positive integer value and aren't necessarily unique (i.e., you can have multiple coins of the same value).

//For example, if you’re given coins = [1, 2, 5], the minimum amount of change that you can’t create is 4. If you’re given no coins,
// the minimum amount of change that you can’t create is 1.

const coins1 = [1, 2, 5];
const coins2 = [5, 7, 1, 1, 2, 3, 22];

const calChange = (coinsArr) => {
  if (!coinsArr?.length) throw "coins array can't be empty";
  let sum = 1;
  coinsArr.forEach((c) => {
    if (c <= sum) {
      console.log("ok: ", sum);
      sum += c;
    } else {
      throw `couldn't calculate change for value = ${sum}`;
    }
  });
};

calChange(coins2);
