// console & Basic Operation quation
///////////////////////////////////////////////
// Q log "hello, javascript"

// console.log("Hello World");
// console.warn('hello world');
// console.error('hello world');
// console.info("hello world");
// console.table({name:"shamim",age:22});

//Q perform 35*2-(10/2)+ 7 and log the results.
// console.log(35 * 2 - 10 / 2 + 7);

//Q log the data type of "123",123,true,and null using typeof
// console.log(typeof "123");//string
// console.log(typeof 123);//number
// console.log(typeof true);//boolean
// console.log(typeof "null")//"" string
// console.log(typeof null)//object
//typeof datatag naam ke concept pe work krti hain

//Q write  a program that swaps the values of two letiable

// let a = 12;
// let b = 13;
// let c;

// c = a;
// a = b;
// b = c;

// console.log(a,b);
// console.log(b,c);
// console.log(c,a);

// var a = 12;
// var b = 13;

// [a,b] = [b,a]

// console.log(a,b);

// var a = 12; //25
// var b = 13;

// a = a + b; //25
// b= a-b; // 12
// a= a+b// 37

//Q use console.group() to organize logs into a group

// console.group("aaj ka hisab");
// console.log("daal chaawal 50");
// console.log("neebu paani 20");
// console.log("paani puri 50");
// console.groupEnd(); // console pr hmesa open hi rhega refresh krne pr

// console.groupCollapsed("aaj ka hisab");
//     console.log("daal chaawal 50");
//     console.log("neebu paani 20");
//     console.log("paani puri 50");
// console.groupEnd(); // refresh krne pr collaps rhega




// console.groupCollapsed("API call data");
//     console.log("request send.....");
//     console.log("request recieved.....");
//     console.log("request prompt.....");
//     console.error("request error.....");
// console.groupEnd();
// console.groupCollapsed("facebook user data");
//     console.log("request send.....");
//     console.log("request recieved.....");
//     console.log("request prompt.....");
//     console.error("request error.....");
// console.groupEnd();




// console.groupCollapsed("API call data");
//     console.groupCollapsed("API call data");
//     console.log("hui");
//     console.groupEnd();
//     console.log("request send data....");
//     console.log("request received....");
//     console.log("request prompt...");
//     console.error("request error...");
// console.groupEnd();
// console.groupCollapsed("Facebook user data");
//     console.log("request send data....");
//     console.log("request received....");
//     console.log("request prompt...");
//     console.error("request error...");
// console.groupEnd();

// variables & Data types Question

//////////////////////////////////////
// Q declare a const object, modify its properties and log the updates object

// const obj ={
//     name:"shamim",
//     age:22,
//     email:"shamim@gmail.com"
// };

// obj.age=32;
// console.log(obj);

//constant se aap value nahi kr skte ho update kr skte ho value ke andr ki cheeje 

// const arr=[1,2,3,4];

// // arr=12// change nhi krega
// arr.pop();

// const obj = {
//     name:"shamim",
//     age:22,
//     email:"test@example.com"
// };

// obj.email = "huihui"; //age change na ho eske liye  ham freeze laga dete hai


// const obj = {
//     name:"shamim",
//     age:22,
//     email:"test@example.com"
// };

// Object.freeze(obj);
// obj.name="shami"

//Q convert "50"(string) into a number using 3 different methods

// Number("50");
// parseInt("50")
// +"50"

// typeof("");
//typeof("")=string ,+("50")=nuber

// Q check if "javascript"contains "script" without using .including()


// let str = "javascript";
// console.log(str.includes("script")); //method  ko use nhi krna Q ke according

// let str = "javascript";
// str.indexOf("script");//console pr check krne ke liye 
// console.log(str.indexOf("script") !== -1); method 1

// if(str.indexOf("script") === -1){
//     console.log(false);
// }
// else{
//     console.log(true);
// }
