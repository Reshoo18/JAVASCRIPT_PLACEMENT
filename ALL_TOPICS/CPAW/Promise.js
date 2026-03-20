const getPromise=()=>{
    return new Promise((resolve,reject)=>{
         console.log("hello i am promise");
         //resolve("success");
         reject("some error");
    })
    
}

// THEN CATCH FUNCTION 
let promise=getPromise();
promise.then((res)=>{
 console.log(res)
})
promise.catch((err)=>{
    console.log(err)
})







