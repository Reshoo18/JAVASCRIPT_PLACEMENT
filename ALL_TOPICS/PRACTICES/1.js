// let price = "499"
// let qt ="2"


// let Nprice=Number(price)

// let Nqt=Number(qt)


// let Total=Nprice * Nqt

// console.log(Total)
// console.log(typeof(Total))


//   let age=" 23 years"
//   let price="499.99"

//   let onlyAge=parseInt(age)
//   let onlyPrice=parseFloat(price)
  
//   console.log(onlyAge)
//   console.log(typeof(onlyAge))
//   console.log(onlyPrice)
//   console.log(typeof(onlyPrice))


// let x = "0";
// let y = 0;
// let z = "hello";
// let w = "";


// let BoolX=Boolean(x)
// let Booly=Boolean(y)
// let Boolz=Boolean(z)
// let Boolw=Boolean(w)

// console.log(BoolX)

// console.log(Booly)

// console.log(Boolz)

// console.log(Boolw)


// let marks = "85";
// let bonus = 5;


// let Nmarks=Number(marks)
// let TotalMarks=Nmarks + bonus

// console.log(TotalMarks)
// console.log(typeof(TotalMarks))

// let userInput = "100";
// let actualValue = 100;

//   console.log(userInput == actualValue)
//   console.log(userInput === actualValue)

// let a = 20;
// let b = 6;

// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)
// console.log(a%b)

// let marks = 78;

// if(marks > 90){
//     console.log("A")
// }else if(marks >70 ){
//     console.log("B")
// }else if(marks >60){
//     console.log("C")
// }else if(marks > 50){
//     console.log("D")
// }else if(marks >= 40){
//     console.log("E")
// }else{
//     console.log("fail")
// }



// let age = 23;


// if(age > 18 && age < 60){
//     console.log("you  are eligible")
// }



// let age = 65;
// let premium = true;

// if(age >=18 && age<60 || premium ){
//     console.log("premium avail")
// }


// let isLoggedIn = false;

// if(!isLoggedIn){
//     console.log("please login")
// }



// let isLoggedIn = true;
// let age = 20;
// let isAdmin = false;


// if(isLoggedIn && (age >=18 )|| isAdmin){
//     console.log("Access guranted")
// }

// let marks = 75;

// let result = marks >=40 ? "pass":"fail"

// console.log(result)



let age = 25;
let isLoggedIn = true;
let isAdmin = false;
let hasPremium = true;


if((isLoggedIn && age>=18 )||isAdmin ||(hasPremium && age>=18)){
    console.log("Access guranted")
}else{
   console.log("Access denied")
}

