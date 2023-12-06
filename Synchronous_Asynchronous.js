//https://www.youtube.com/watch?v=m6E5mjwLaZQ

//Synchronous and Asynchronous in JavaScript:-Synchronous happens at same time and Asynchronous doesn't happens at same time.

//Synchronous happens at same time.As the name suggests synchronous means to be in a sequence,
//i.e. every statement of the code gets executed one by one
//jab tak ek kaam khatam nahi ho jata aap dusra kaam nahi kar sakte hain


console.log("hello-1");
console.log("hello-2");
//this will print hello1 and hello 2 in step by step line by line
//hello-1
//hello-2



// Asynchronous :-Asynchronous doesn't happens at same time.
//Asynchronous code allows the program to be executed immediately where the synchronous code will block
//further execution of the remaining code until it finishes the current one.
//Functions running in parallel with other functions are called asynchronous
//Asynchronous code request dosen't block the other code
//at that time user can perform another operation also


function greeting1(){
    setTimeout(()=>{
        console.log("hello-1 is printing");

    },5000)
    
}

function greeting2(){
    console.log("hello-2 is printing");
}

greeting1();
greeting2();
//in this condition 1st "hello-2 is printing" and after 5 sec delay hello-1 is printing means this will not affect the rest code


