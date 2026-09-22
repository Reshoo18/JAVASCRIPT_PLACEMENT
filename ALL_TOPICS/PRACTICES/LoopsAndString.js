// for (let i = 1; i <= 10; i++) {
//     console.log(i)
// }\



// for(let i=1;i<=20;i++ ){
//     if(i%2!=0){
//         console.log(i)
//     }
// }


// let n = 50;
// let sum =0
// for (let i=1;i<=50;i++){
//     if(i%3==0){
       
//        sum+=i
  
//        console.log(sum)
//     }
// }



// let n = 100;


// for(let i =1;i<n;i++){
//    if((i%3==0||i%5==0)&&(i%15!=0)){
//   console.log(i)
//    }
   
// }



// for (let i = 1; i <= 10; i++) {

//     for (let j = 1; j <= 10; j++) { 
        
//         console.log(i + " x " + j + " = " + (i * j));

       
//     }

// }



// let count=0
// for(let i=2;i<100;i++){
   
  
//     if(((i==2||i==3||i==5||i==7)||(i%2!=0)&&(i%3!=0)&&(i%4!=0)&&(i%5!=0)&&(i%6!=0)&&(i%7!=0)&&(i%8!=0)&&(i%9!=0))){
//       console.log(i)
//       count++

//     }
    
// }
// console.log("total count",count)



// // fibonnaci series
// let sum=0
// let a=0
// let b=1
// for(let i=1;i<=15;i++){
//   console.log(a)
// sum += a
//   let next=a+b
//   a=b
//   b=next

 
 

// }
//  console.log("Total sum",sum)
  let num=123456
for(let i=0;i<6;i++){
  
    let Ldig= num % 10
  
   num= Math.floor(num/10)
   console.log(Ldig)
}