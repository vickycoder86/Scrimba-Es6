//https://www.youtube.com/watch?v=hFLXE5-JCcs
//https://www.youtube.com/watch?v=LfWUkoNHPWc

//async await:-async and await make promises easier to write"
//async makes a function return a Promise
//await makes a function wait for a Promise


//Example-1

const getdata = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let rollNo=[1,3,5,7,9];
        resolve(rollNo);
        // reject('Error while communicating')


    },3000)

})


async function getnewData(){
    const rollnumberData = await getdata;
    console.log(rollnumberData);
}

getnewData();

//Example-2

let promises = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let API =true;
        if(API){
            resolve("Prmoises resolved")
        }else{
            reject("Promise not fullfilled")
        }

    },5000)

})

async function check(){
    let data = await promises;
    console.log(data);
    

}
check();