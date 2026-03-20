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

//PROMISE CHAINING

// let p1=getData(1);
// p1.then((res)=>{
//     console.log(res);
//     console.log("Fetching data 2");
//     let p2=getData(2);
//     p2.then((res)=>{
//         console.log(res);
//         console.log("fetching data 3")
//         let p3=getData(3);
//         p3.then((res)=>{
//             console.log(res);
//         })
//     })
// })
  getData(1).then((res)=>{
    return getData(2).then((res)=>{
        return getData(3).then((res)=>{
            console.log(res)
        });
    })
  })




  const asyncFunc1=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("data1")
         resolve("success")
        },3000);
         
    })
}
const asyncFunc2=(dataId)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("data2")
         resolve("success")
        }, 3000);
         
})
}

//PROMISE CHAINING


    asyncFunc1().then((res)=>{
       console.log(res);
       console.log("FETCHING DATA 2");
     
       asyncFunc2().then((res)=>{
       console.log(res)
    })

    })
    