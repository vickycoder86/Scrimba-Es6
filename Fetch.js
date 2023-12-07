//https://scrimba.com/learn/introtoes6/introduction-fetch-cGmgQQf8

//Fetch:- JavaScript fetch() method is used to request data from a server.
//  The request can be of any type of API that returns the data in JSON or XML.
//The fetch() method requires one parameter, the URL to request, and returns a promise.

//RESTFul API - https://jsonplaceholder.typicode.com/

fetch("https://jsonplaceholder.typicode.com/comments/1")
  .then((response) => response.json())
  .then((data) => console.log(data));
  //{postId: 1, id: 1, name: 'id labore ex et quam laborum', email: 'Eliseo@gardner.biz', body: 'laudantium enim quasi est quidem magnam voluptate …utem quasi\nreiciendis et nam sapiente accusantium'}

fetch("https://jsonplaceholder.typicode.com/photos/1")
  .then((response) => response.json())
  .then((data) => console.log(data));
  //{albumId: 1, id: 1, title: 'accusamus beatae ad facilis cum similique qui sunt', url: 'https://via.placeholder.com/600/92c952', thumbnailUrl: 'https://via.placeholder.com/150/92c952'}

  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response=>response.json())
  .then(data=>console.log(data))
  //{userId: 1, id: 1, title: 'delectus aut autem', completed: false}

  fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response=>response.json())
  .then(data=>console.log(data))



  const URL = "https://jsonplaceholder.typicode.com/photoss/1";

  fetch(URL)
  .then(response=>{
    return response.json();
  })
  .then(data=>{
    console.log(data);
  })
  

  