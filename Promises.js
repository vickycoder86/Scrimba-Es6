//https://scrimba.com/learn/introtoes6/promises-cRDZ29H4

//Promises:-In JavaScript, a Promise is an object that will produce a single value some time in the future.
//If the promise is successful, it will produce a resolved value,//
//but if something goes wrong then it will produce a reason why the promise failed.

//A Promise is in one of these states:

//pending: initial state, neither fulfilled nor rejected.
//fulfilled: meaning that the operation was completed successfully.handle by then().
//rejected: meaning that the operation failed.handle by catch()

//Example1:-
const buyflightTicket=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const error =false;

            if(error){
                reject("Sorry your payment was not successful")
            }else {
                resolve("Thank you, your payment was successful")
            }
        }, 3000)

    })
}

buyflightTicket()
.then((success)=> console.log(success))
.catch((error)=>console.log(error));

//Example-2

const userdata=new Promise((resolve,reject)=>{
    const error= false;

    if(error){
        reject("505-data not found")
    }else{
        resolve({firstname:'vijay',age:35,city:'udaipur'})
    }

})
userdata
.then((success)=>console.log(success))
.catch((error)=>console.log(error))


//Example-3
                            //(callback function)
const getdata = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let rollNo=[1,3,5,7,9];
        resolve(rollNo);
        // reject('Error while communicating')


    },3000)

})
 getdata
 .then((success)=>{
    console.log(success);
 }).catch((error)=>{
    console.log(error);
 })


