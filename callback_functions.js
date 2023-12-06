//JavaScript | Beginning to Mastery Complete Tutorial (Part 1)
//https://www.youtube.com/watch?v=chx9Rs41W6g&t=16389s
// 06:05:54

//https://www.youtube.com/watch?v=1zCXuwjEsNs&t=237s

//callback functions:-when we use any Function as input accept and call  in any other function is called callback functions
//A callback is a function that is passed as an argument to another function
//in this example we use myfunc2 as input function of myfunc so [myFunc(myfunc2)]

//we create callback as input in function resetpassword so we can reuse it and put many function name


//Example1:-
function greetings(){
    console.log("hello welcome to my page");
  }
  
  function resetPassword (id,password,callback){
    console.log(`your userid is ${id} and your new Password is  ${password} is reset sucessfully`);
    callback();
  }
  
  resetPassword("vijay",1234,greetings);
  //your userid is vijay and your new Password is  1234 is reset sucessfully
  //hello welcome to my page
  
  function login(){
    console.log("you can login now!");
  }
  
  function resetPassword1 (id,password,callback){
    console.log(`your userid is ${id} and your new Password is  ${password} is reset sucessfully`);
    callback();
  }
  resetPassword1("sanjay",1234,login);
  //this will print your "userid is sanjay and your new Password is  1234 is reset sucessfully"
  //you can login now!

  
  //Exapmle2:-
  function myfunc2() {
    console.log("hello can i am main file");
  }
  
  function myFunc(callback) {
    callback();
  }
  
  myFunc(myfunc2); //this will print "hello can i am main file"
  
  //Example-3:-
  
  function sayhello(){
      console.log("hello world");
  }
  
  function printfile(print){
      console.log("here this can also print");
      print();
  }
  
  printfile(sayhello);//this will print "hello world"
  
  