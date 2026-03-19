let promise=new Promise((resolve,reject)=>{
    console.log("hello i am promise");
    resolve("success");
    //reject("some error");
})


function getData(dataId,getNextData){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log("data",dataId);
        resolve("success")
        if(getNextData){
            getNextData();
        }
    },3000)
    })
}