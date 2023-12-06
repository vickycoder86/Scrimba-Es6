//https://scrimba.com/learn/introtoes6/rest-operator-c7vdPsZ


//rest operator:-The rest operator in javaScript allows a function to take an indefinite number of arguments and bundle them in an array,
//thus allowing us to write functions that can accept a variable number of arguments
//The rest operator in javaScript was introduced in ES6 (or ES2015) to handle function parameters efficiently and easily.
//indefinate number of arguments ko array main bundle kar deta hain

function add(...nums){
    console.log(nums);
};

add(5,12,25,15,20);//this will print [5, 12, 25, 15, 20] as bundle array

