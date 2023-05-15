/* 2. String Manipulation.
Write a function "manipulateString" that takes in a string and converts the characters to uppercase letters. The 
function should return a callback function "logstring" that logs the sentence "The manipulated string is:" along 
with the manipulated string or the new string to the console.
// Expected Output:
manipulateString("hello, world!", logString); 
// The manipulated string is: HELLO, WORLD! */

function manipulateString(str) {
  const manipulatedStr = str.toUpperCase();
  function logString() {
    console.log(`The manipulated string is: ${manipulatedStr}`);
  }
  return logString;
}

function logString() {
  console.log(`The manipulated string is: ${manipulatedStr}`);
}

manipulateString("hello, world!")(logString); 
// Output: The manipulated string is: HELLO, WORLD!
