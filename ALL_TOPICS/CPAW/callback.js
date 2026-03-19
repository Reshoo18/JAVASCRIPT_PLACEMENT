console.log("HELLO JS")
console.log("two")

setTimeout(()=>{
    console.log("Hello I am set timeOut")
},4000);

console.log("three")
console.log("four")

function sum(a,b){
    console.log(a+b);
}

function calculaor(a,b,sumCallBack){
  sumCallBack(a,b)
}

calculaor(1,2,sum)

const hello =()=>{
  console.log("Hello i am callback")
}

setTimeout(hello,4000)