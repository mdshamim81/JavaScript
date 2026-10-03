console.log(Math.ceil(10.4));// 11 rounds up,  ceil fn ko upper range pe kekr jata hn
console.log(Math.ceil(10.0));//11

console.log(Math.floor(10.7))//10 rounds down, esme lower range pr lkr jata hain
console.log(Math.floor(9.9))//9
console.log(Math.floor(10));//10

console.log(Math.round(10.5))//11 rounds to the nearest integer, round jo hota hian wo ceil ke tarah behave krta hain agr .5 se .9 tak rhega
console.log(Math.round(8.4))// 8 esme agr .5 se kam rha to wo floor ke trh behave krega

console.log(Math.abs(-8))// +8 absolute value negative value ko positive me dena

console.log(Math.trunc(10.7678676847387968479678456));//10 removes the decimal, trunk ek fn decimal ke baad jitna bhi number hain esko hata deta hain

console.log(Math.pow(5,2));// x to the power of y,  power 5^2=25

console.log(Math.sqrt(36));//6 square root return krke deta hin
console.log(Math.sqrt(40))//6.324555320336759

console.log(Math.cbrt(27));3 //cuberoot ka ans deta hain
console.log(Math.cbrt(64));//4

console.log(Math.max(10,67,32))//67 max me jo sbse bara number hoga usko dikhayega
console.log(Math.min(10,67,32))//10 min me jo sabse kam number ki value hogi usko dikhayega

console.log(Math.random());// randoms number to, 0 to 1 ke bich random number dega

// let a=243.434535432454;
// console.log(a.toFixed(2));//243.43  formats number to n decimal place,
// console.log(a.toFixed(5));//243.43454

//Q calculate compound interest

// let p = Number(prompt("Enter principle"));
// let r = Number(prompt("Enter a rate"));
// let t = Number(prompt("Enter a time"));

//cp = a - p;
/*
 A = p*(1+r/100)^t
 CP= A - p
*/
// console.log(p*Math.pow(1+r/100,t)-p);
console.log(p*Math.pow((1+r/100),t)-p);

// function compoundInterest(p,r,t){
//   let amount=p*Math.pow((1+r/100),t);
//   return amount.toFixed(3);
// }
// console.log(compoundInterest(100,5,3));//

//Q generate otp 4digit:

// console.log(Math.floor(Math.random() * 9000 + 1000)); //0 to 9000
//1000 to 10000
//8.9+10000=80000.9

// function generateOTP(){
//   return Math.floor(1000+Math.random()*9000);
// }
// console.log(generateOTP());

//Q Area of triangle(heron's formula)
// let a = Number(prompt("Enter a first number"));
// let b = Number(prompt("Enter a secound number"));
// let c = Number(prompt("Enter a third number"));

// // s=semi parimeter
// // s=(a+b+c)/2;
// // sqrt of s * (s - a) * (s - b) * (s - c);

// if(a+b <= c || a+c<= b || c+b<=a){
//   console.log("not possible")
// } else{
//   let s=(a+b+c)/2;
//   console.log(Math.sqrt(s*(s-a)*(s-b)*(s-c)));
// }

//Q circumference of circle
let r=Number(prompt("Enter your number"));
console.log(2*Math.PI*r);

//if else

if (10 > 9 && 10 < 7) {
  console.log("hello world");
} else if (18 > 5) {
  console.log("me to chal rha hu");
} else {
  console.log("me to chalunga");
}

// let a = Number(prompt("Enter first number"));
// let b = Number(prompt("Enter secound number"));

// if (a > b) console.log(a + "is greatest");
// else console.log(b + " is greatest");


// let a=Number(prompt("Enter number"));
// if(a % 2 == 0){
//   console.log("even");
// }else{
//   console.log("odd")
// }



let age=Number(prompt("Enter your age"));
let name=(prompt("Enter your name"));
if(age>=18){
  console.log(name +" yes, you are a valid voter")
}else{
  console.log(name +", No! you are not a valid voter")
}




let a =Number(prompt("Enter first number"));
let b =Number(prompt("Enter secound number"));
let c =Number(prompt("Enter third number"));

if(a>b)(
  console.log(a , "is greatest number")
) 
else if(b>c){
  console.log(b , "is greatest number")
} else{
  console.log(c , "is greatest number")
}

