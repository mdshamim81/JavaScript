// console.error("hello");

// JS Data Types

// -premetive
//      -Number(10,10.5, 10.5555)
//      -String('a',"shamim", 'typistclub')
//      -Boolean(true,false)
//      -undefined
//      -Symbol
//      -BigInt

// -reference
//      -Array
//      -Object
//      -Function

// var a = '10';

// console.log(a)

// var num1 = prompt('Enter yuor Number 1');
// var num2 = prompt('Enter your number 2');
// var real1 = Number(num1);
// var real2 = Number(num2);
// console.log(real1 + real2);

// var num1=Number(prompt('enter your number 1'));
// var num2= Number(prompt('enter your nuber 2'));

// console.log(num1+num2);

// if(10>15){
//     console.log('condition is true');
// }
// else{
//     console.log('Condition is false')
// }

// if(1<0){
//     console.log('hello')
// } else{
//     console.log('nachooo')
// }

// var a=20;
// var b=20;
// if(a==b){  //compare
//     console.log("yes");
// } else{
//     console.log("no")
// }
//ask a user his age and check if he is adult or not

// let age = Number(prompt("Enter your age"));

// console.log(age)
// if(age>=18){
//     console.log('you can go to vote');
//     alert("wow i can vote now!")
// }
// else{
//     console.log('ghar pr rho bachho');
//     alert("sorryy");
// }

// var a = 10;
// var b = 100;
// if(a == b){
//     console.log('yes');
// } else{
//     console.log('no')
// }

//ask a user his age and check if he is adult or not

// var age = Number(prompt('Enter your age'));

// if (age>=18) {
//     console.log('you can vote')
// } else{
//     console.log('you can not vote ')
// }

// var marks = Number(prompt("enter your marks"));

// if (marks > 90) {
//   console.log("You got A+ Grade");
// } else if (marks > 80) {
//   console.log("You got A Grade");
// } else if (marks > 70) {
//   console.log("You got B+ Grade");
// } else if (marks > 60) {
//   console.log("You got B Grade");
// } else if (marks > 50) {
//   console.log("You got C+ Grade");
// } else if (marks > 40) {
//   console.log("You got C Grade");
// } else {
//   console.log("failed");
// }

//banary operator
//&& true=1 or false=0
//&& (*) multiplicatin pr kam krta hian
// 0 0 = 0
// 0 1 = 0
// 1 0 = 0
// 1 1 = 1

// || (+) plus pr kam krta hian
// 0 0 = 0
// 0 1 = 1
// 1 0 = 1
// 1 1 = 1

// var age = 1;

// if(age>18 && age<60){
//     console.log('you can vote')
// } else{
//     console.log('you can not vote')
// }

// var a=10;
// var b='10';
// if (a==b){   //== : compare krta hain value
//     console.log('condition true')
// } else{
//     console.log('condition false')
// }

// var a=10;
// var b='10';
// if (a===b){   //=== : compare krta hain value ur datatype ko
//     console.log('condition true')
// } else{
//     console.log('condition false')
// }

// var a=10;
// var b=10;
// if (a!=b){   //!= : not equale to
//     console.log('condition true')
// } else{
//     console.log('condition false')
// }

// ask a user his bijli ke units and if it is greater then 100 unit then calculate on the basic of 10rs  per unit if more  than 50 units than calculate on the basic of 8 rs per unit and if les calculate on 5 rs 5 rs per unit

// var unit = Number(prompt("Enter Units"));

// var bill;

// if (unit > 100) {
//   bill = unit * 10;
// } else if (unit > 50) {
//   bill = unit * 8;
// } else {
//   bill = unit * 5;
// }
// console.log('Your bill:', bill , 'Rupees' );

// var a = 100;
// console.log(a>10? 'hello':'not hello')

// var a=10;
// var b=2;
// a>b?console.log('hello guys'):console.log('not hello guys');
// loops

// var a=0;
// while(a<10){
//     console.log('hello');
//     a++
// }

// var a=1;

// while(a<=100){
//     console.log('sorry',a);
//     a++
// }

// var a=1;

// do{
//     console.log('hello');
//     a++
// } while(a<100)

for (var a = 10; a > 0; a--){
    console.log(a);
}
