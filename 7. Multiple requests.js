/* 7. Multiple requests.
Create an asynchronous function that retrieves data from two different API endpoints: "https://
jsonplaceholder.typicode.com/todos/r and "https://jsonplaceholder.typicode.eom/posts/r'. The first API returns 
a to-do task, while the second API provides post details. The function should combine the results from both APIs 
and log them as an object, where the keys are "todo" and "post", and the corresponding values are the 
responses from the respective APIs. */
async function fetchData() {
  try {
    const todoPromise = fetch('https://jsonplaceholder.typicode.com/todos/1');
    const postPromise = fetch('https://jsonplaceholder.typicode.com/posts/1');

    const [todoResponse, postResponse] = await Promise.all([todoPromise, postPromise]);
    const todoData = await todoResponse.json();
    const postData = await postResponse.json();

    const combinedData = {
      todo: todoData,
      post: postData,
    };

    console.log(combinedData);
  } catch (error) {
    console.error(error);
  }
}

fetchData();
