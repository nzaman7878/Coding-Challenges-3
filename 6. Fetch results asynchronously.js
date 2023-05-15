/* 6. Fetch results asynchronously.
Write a function that asynchronously fetches data from an API
[ https://jsonplaceholder.typicode.eom/todos/l ]and logs the result to the console. */

async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchData();
