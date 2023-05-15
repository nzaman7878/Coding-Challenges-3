/* 1. Double using callback.
Write a function that takes in an array of integers and a callback function, and returns a new array where each 
element is doubled using the callback. */

function doubleUsingCallback(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

function double(num) {
  return num * 2;
}

const arr = [1, 2, 3, 4, 5];
const doubledArr = doubleUsingCallback(arr, double);
console.log(doubledArr); 
