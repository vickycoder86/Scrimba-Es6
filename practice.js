//Example-2

let promises = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let API =false;
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