/* 5. Greeting Promise.
You need to write a function that takes a name as input and returns a promise that resolves with a greeting 
message. The function should greet the person using their name, with a message in the format "Hello, {name}!".
For example, if the input to the function is "Mithun", the promise should resolve with the string "Hello, Mithun!". */

function greetWithName(name) {
  return new Promise((resolve, reject) => {
    if (typeof name !== "string") {
      reject(new Error("Name must be a string"));
    } else {
      const greeting = `Hello, ${name}!`;
      resolve(greeting);
    }
  });
}
greetWithName("Mithun")
  .then(greeting => console.log(greeting))
  .catch(error => console.error(error));
