//https://scrimba.com/learn/introtoes6/default-params-cGmbPwSy

//Default Params:-Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed.

const leadSinger =(artist="vijay")=>{
    console.log(`${artist} is the lead singer of cold play`);
}

leadSinger();//this will print "vijay is the lead singer of cold play" beacuse no value in given in function so bydefault vijay will show
leadSinger("sonu nigam")//this will print "sonu nigam is the lead singer of cold play" beacuse we give value(sonu nigam )in function call