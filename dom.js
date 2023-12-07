//https://www.youtube.com/watch?v=7zcXPCt8Ck0&t=3111s

//DOM:-Document Object Model
//when a web page is loaded,the borwser creats a dom of the page
//Dom html code ko java script ek andar access karna ka tarika hain
//like a tree(node)
//Window=>document==>html==>1.head=>meta/meta/title/link   2.body =>img/h1/p/div

//Dom Manipulation:-

//Select with id:-it return id unique

let heading =document.getElementById("heading");//h1 ki value return karega
console.log(heading);

//Select with class:-it return HTML collection very simliar to array

let param = document.getElementsByClassName("para");
console.log(param);//this will print HTMLCollection(2)

//Select with tag:- it return HTML collections

let mytag = document.getElementsByTagName("p");
console.log(mytag);//this will print HTMLCollection(1)

//Query Selector:-  document.querySelector("myid/ myclass / tag") and it return Node list

let firstelement = document.querySelector("p")
console.log(firstelement);
console.dir(firstelement)//this will print p.para() ka 1st element

let firstclasselement = document.querySelector(".para")//we have to  use class with .classname
console.log(firstclasselement);
console.dir(firstclasselement)

let firstidelement = document.querySelector("#heading");//we have to  use id  with #idname
console.log(firstidelement);
console.dir(firstidelement)


//Query Selector all:-  document.querySelectorAll("myid/ myclass / tag") and it return Node list

let allelement = document.querySelectorAll("p");
console.log(allelement);//this will give all NodeList
console.dir(allelement)

//tagName:-return tag for element nodes it show tag name (button/para/anchor)

//firstidelement.tagName in console

//innerText:-it returns the text contentof the element and all its children
//innerHTML =it returns the plain text or HTML contents in the element