// Write a function that takes in a non-empty array of integers that are sorted in ascending
// order and returns a new array of the same length with the squares of the original integers also sorted in ascending order.

const arr = [-10, -5, 0, 5, 10];
const arrSquared = arr
  .map((i) => i * i)
  .sort(function (a, b) {
    return a - b;
  });

// console.log(arrSquared);

// Given an array of positive integers representing the values of coins in your possession, write a function
// that returns the minimum amount of change (the minimum sum of money) that you CANNOT create.
// The given coins can have any positive integer value and aren't necessarily unique (i.e., you can have multiple coins of the same value).

//For example, if you’re given coins = [1, 2, 5], the minimum amount of change that you can’t create is 4. If you’re given no coins,
// the minimum amount of change that you can’t create is 1.

const coins1 = [1, 2, 5];
const coins2 = [5, 7, 1, 1, 2, 3, 22];
const coins3 = [1, 2, 3, 4, 5];
const coins4 = [1, 10, 3, 11, 6, 15];
const coins5 = [1, 1, 1, 1];

// 2nd problem - sol 1
const calChange = (coinsArr) => {
  if (!coinsArr?.length) throw "coins array can't be empty";
  coinsArr = coinsArr.sort(function (a, b) {
    return a - b;
  });
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

// next line should be uncommented only if method calChange() will be tested, otherwise in line 38 the forEach() method will stop the Node's exceution  
// calChange(coins2);

// 2nd problem - sol 2
function calChangeO1(coinsArr) {
  if (!coinsArr?.length) throw "coins array can't be empty";
  coinsArr = coinsArr.sort(function (a, b) {
    return a - b;
  });
  // 1st - store arr length, arr SUM and create a Bools Array that has only it's index [0] value as TRUE assuming the SUM
  // will be always a correct change calculation
  let coinsArrLength = coinsArr.length;
  let coinsArrSum = coinsArr.reduce((a, b) => a + b);
  let arrOfBooleans = new Array(coinsArrSum++).fill(false);
  arrOfBooleans[0] = true;

  // 2nd - iteration through index count and for each value do a reverse interation on "arrOfBooleans"
  for (let i = 0; i < coinsArrLength; i++) { // from 0 to arrLength--
    for (let j = coinsArrSum; j >= coinsArr[i]; j--) { // reverse iteration from SUM value to current Coin value
      if (arrOfBooleans[j - coinsArr[i]]) { // checking if the position exists
        arrOfBooleans[j] = true;
      }
    }
  }
  // 3rd search for a False value inside arrOfBooleans the Index will be the value that couldn't be calculated
  for (let i = 1; i < coinsArrSum; i++) {
    if (!arrOfBooleans[i]) {
      console.log(i);
      return i;
    }
  }
  // 4th if there's no False value inside the arrOfBooleans then the next non calulable value will be the Sum of all values plus 1
  console.log("out of arrOfBooleans: ", coinsArrSum++);
  return coinsArrSum++;
}

calChangeO1(coins1);
calChangeO1(coins2);
calChangeO1(coins3);
calChangeO1(coins4);
calChangeO1(coins5);

// problems source
//github.com/ldiazssj3/js-challenge/blob/main/README.md
