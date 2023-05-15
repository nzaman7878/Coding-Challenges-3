/* 3.  Age in Days.
Write a JavaScript function called agelnDays that accepts an object containing a person's first name, last 
name, and age in years as input. The function should concatenate the first and last name into a single string 
and store it in a variable called fullName. It should then calculate the person's age in days and store it in a 
variable called agelnDays.
The agelnDays function should then return a callback function that logs a message to the console. The 
message should include the person's full name and age in days, and should be in the format: "The person's full 
name is [full name] and their age in days is [age in days]."
Note that the agelnDays function should not log the message to the console directly, but should instead return 
a callback function that can be used to log the message at a later time.
// Expected Output. 
ageInDays(person, logResult);
// The person's full name is Mithun S, and their age in 
days is 7300. */


function ageInDays(person, callback) {
  const fullName = `${person.firstName} ${person.lastName}`;
  const ageInDays = person.age * 365;
  function logResult() {
    console.log(`The person's full name is ${fullName} and their age in days is ${ageInDays}.`);
  }
  return logResult;
}
function logResult() {
  console.log(`The person's full name is ${fullName} and their age in days is ${ageInDays}.`);
}

const person = {
  firstName: "Mithun",
  lastName: "S",
  age: 20
};
const logAgeInDays = ageInDays(person, logResult);
logAgeInDays(); 
