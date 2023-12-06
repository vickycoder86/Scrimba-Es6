//https://scrimba.com/learn/introtoes6/destructuring-objects-caZ6yQC9


//Destructuring objects:-Object destructuring is a useful JavaScript feature to extract properties from objects and bind them to variables

const player = {
    playerName :"vijay jain",//key
    club:"mohan bagan",//key
    address:{
        city:"udaipur"
    }
};

const {playerName, club}=player;//here we destructuring objects takes property
console.log(`${playerName} is playing for ${club}`);//this will print "vijay jain is playing for mohan bagan"

const player1 = {
    name1 :"vijay jain",
    club:"mohan bagan",
    address:{
        city:"udaipur"
    }
};
const{name1,address:{city}}=player1;

console.log(`${name1} is live in ${city}`);//this will print "vijay jain is live in udaipur"

//Destructuring Arrays:-we can destructuring arrays is going index by index number(0 to nth) seqences

let names =["vijay","kumar","jain"];

let[firstname,middlename,lastname]=names;

console.log(firstname);//this will print "vijay"
console.log(lastname);//this will print "jain"
console.log(firstname+middlename);//this will print "vijaykumar"