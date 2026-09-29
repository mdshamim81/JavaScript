// hoisting -> variable and function are hoisted whch mean there declaration is move on the top of code
// var a;
// console.log(a);
// a=12;

//types in js
// primitive and reference
// primitive = number, string , null,undefined, boolean
// reference = {} [] () jisme bracket ho usko reference
// aisi koe bhi value jisko  copy krne pr real copy nhi hota balki us mein value ka reference pass ho jata hain, use hm reference value kahte hain ur jiska copy krne par real copy ho  jaaye wo value primitive type value hoti hain.

// var a=12;
// var b=a;

// b=b+2;

// var a= [12,13];
// var b=a;
// b.pop();

// var a =[1,2,3,4];
// var b=a;
// b.pop();

//conditionals - if else else-if
// jab bhi baat agr magar pr aayegi ya fir baat aayegi aisa hua to ye karo waise hua to wo karo
// if(true) or if(false)

// if (11 > 12) {
// } 
// else if (12 > 13) {
// }
// else if(1>16){

// } 
// else{

// }


// let name ="shamim";
// let age=22;
// age= 30;
// console.log(name,age);



// const acc=1234;

// // acc=23;
// console.log(acc);



//old tarika
// var a= 10;
// var a=20;
// if(true){
//   var a=20;
// }

// function fun(){
//   var c =20;
// }
// var a =30;
// console.log(a);


// let name ="shamim";
// let age=22;
// if(true){
//   let c=90;
// }
// age=30;
// console.log(name ,age);

// premitive data type
// number,string, boolean,  null, bigint, symbol 
// number
// let a=10;
// let b=1.4;

// console.log(a,b);
// console.log(typeof b)


// // String
// let c="STRIKE is coming";
// let d= "shamim";
// console.log(c,d)

// //boolean

// let login=true;
// let f=false;
// console.log(login,f);
// //undefined

// let user;
// console.log(user);


// //bigint
// let num=2343435456467643520445n;
// console.log(num);
// console.log(typeof num)


// //null
// let weather=null;
// console.log(weather);
// console.log(typeof weather)
//symbol

// const id1=Symbol("id1");
// const id2=Symbol("id1");
// // console.log(id2);

// console.log(id2==id1);

//non premitive data type
//array, object, function

// let arr=[11,12,"shamim", true];
// console.log(arr);

//object
//shamim 122313 22 gen
let user={
  name:"shamim",
  account:122313,
  age:22,
  category:'gen'
}


// function add(){
//   console.log("hello");
// }
// add();

let s=function add(){
  console.log("hello");
}
// console.log(s);
s();