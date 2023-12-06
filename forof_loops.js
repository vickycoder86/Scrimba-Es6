//https://scrimba.com/learn/introtoes6/for-of-loop-cdK4Muk

//For of loop:-this is a loop with using key 
// JavaScript for of loop makes it easy to loop through the elements without needing to handle the index or iteration logic
// which makes the code short and easier to understand.


//for(const i(variablename) of arrayname){
    //condition

//}

//Example1:-

let incomes =[12000,20000,40000];
let total =0;

for(const income of incomes){//here (income) in new variable name
     total+= income;
};
console.log(total);//this will print "72000"[12000+20000+40000]

//Example2:-

let fullname ="vijay";

for(const name of fullname){
    console.log(name);//this will print v,i,j,a,y
}


//Example3:-

const students = [ 
    { name: "John", city: "New York" },
    { name: "Peter", city: "Paris"},
    { name: "Kate", city: "Sidney" }
]

for(const student of students){
    console.log(`${student.name} lives in ${student.city}`);//this will print "John lives in New York",Peter lives in Paris",Kate lives in Sidney
}