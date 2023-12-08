//https://www.youtube.com/watch?v=_i-uLJAh79U&t=650s


//Events:-the change in the state of an object is known as an event.

//Types of Events:-
//Mouse click Event:-(click,double click etc)
//Keyboard events:-(keypress,keyup,keydown)
//form Events:-(submit etc)
//print event and many

//syntax:

//node.event{
    //handle here
//}


let btn1 = document.querySelector("#btn1");
btn1.onclick = ()=>{
    console.log("button was clicked");
}

//Event Object:-it is a special object that has details about the event.
//all event handlers have access to the  event object's properties and methods.

//syntax
//node.event(e)=>{
    //handle here
//}

let btn2 = document.querySelector("#btn2")
btn2.onclick=(event)=>{
    console.log(event.type);//type is click
    console.log(event.target);
}

//Event listeners:-we can use this help with callback and arrow function ()=>{}

//Syntax:-node.addEventListener(event,callback)


let btn3 = document.querySelector("#btn3")
btn3.addEventListener("click",()=>{
    console.log("Events Listener button was clicked-1");//this will print after click "Events Listener button was clicked-1"

})

const handler3 = ()=>{
    console.log("Events Listener button was clicked-2");//this will print after click "Events Listener button was clicked-2"

}
btn3.addEventListener("click",handler3)

//Syntax:-node.removeEventListener(event,callback)

btn3.removeEventListener("click",handler3)//nothing will print removed "this will print after click "Events Listener button was clicked-2""

//Example:-change the background with toogle on click the button("change mode")

let modeButton = document.querySelector("#mode");
let currmood="light";//dark

modeButton.addEventListener("click", ()=>{
    if(currmood === "light"){
        currmood="dark";
        document.querySelector("body").style.backgroundColor="black";
        document.querySelector("body").style.color="white";
    }else{
        currmood="light";
        document.querySelector("body").style.backgroundColor="pink";
        document.querySelector("body").style.color="black";
    }

    console.log(currmood);
})