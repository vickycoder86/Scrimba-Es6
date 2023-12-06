//https://scrimba.com/learn/introtoes6/spread-operator-cPkavntv


//Spread Operator:-The JavaScript spread operator ( ... ) allows us to quickly copy all or part of an existing array
//or object into another array or object

//this can use for Array and object

//example with Arrays:- it[...spread] creats copy and if we change in original array no changes in new array(copy)

let contacts =["rahul","ritu","monika"]

let personalcontacts =[...contacts];

console.log(personalcontacts);//this will print  ['rahul', 'ritu', 'monika']

contacts.push("vijay");
console.log(contacts);//['rahul', 'ritu', 'monika', 'vijay'] new value is showing in old arrays
console.log(personalcontacts);//this will print  ['rahul', 'ritu', 'monika'] as copy not reference this will never change


//example with Object:-we can create new object and add(...)of old object so both will add in new object

let person ={
    name:"vijay",
    age:36,
    city:"udaipur"
}

let employee={
    ...person,//spread operater
    salary:45000
}

console.log(employee);//this will print "{name: 'vijay', age: 36, city: 'udaipur', salary: 45000}" rest value add from (...spread)