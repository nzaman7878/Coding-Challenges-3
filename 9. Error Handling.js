/* 9. Error Handling
Write a JavaScript program that uses the Fetch method to retrieve data from an API, and then handles errors 
that may occur. For example, you could use the API at https://jsonplaceholder.typicode.com/posts/l23456789 
to simulate an error, and then display an error message on the webpage. */

fetch('https://jsonplaceholder.typicode.com/posts/l23456789')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => {
    console.error('Error fetching data:', error);
    // check if document is defined before displaying error message
    if (typeof document !== 'undefined') {
      const errorMessage = document.createElement('p');
      errorMessage.textContent = 'Error fetching data';
      document.body.appendChild(errorMessage);
    }
  });
