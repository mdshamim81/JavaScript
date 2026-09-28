// var arr = [1, 2, 3, 4];

// arr.forEach(function(value){
// console.log(value);
// })

// var arr= [1,2,3,4];

// arr.forEach(function(chacha){
//     console.log(chacha);
// })

// map loop krta hain and har baar returned value ko ek naya array mein push krdeta hain
//map -> naya array mein returned value daalo
// var arr = [1, 2, 3, 4];

// var ans = arr.map(function (value) {
//   return 12;
// });

///////////////////////////////////
//filter -> naya array mein true returned value daloo
// var arr=[1,2,3,4];

// var ans=arr.filter(function(value){
//     return true;
// })
// var ans= arr.filter(function(value){
//     return false;
// })

// var ans= arr.filter(function(value){
//     return value>2;
// })
// var ans= arr.filter(function(value){
//     return value===3;
// })

//reduce -> ek array se koe ek value banao

// var arr= [1,2,3,4];

// var ans=arr.reduce(function(accumulator,key){
//     return accumulator+key;
// },0);

// var arr=[1,2,3,4];
// var ans=arr.reduce(function(acc,value){
//     return acc*value;
// },1)

//Q create an array of 5 numbers and log the sum  using .includes();
// var arr=[1,2,3,4,5];
// var ans=arr.reduce(function(accunulator,value){
//     return accunulator+value;
// },0)
// console.log(ans);

//Q write a for loop to print numbers from 10 to 1 reverse
//10-1 -> reverse

// var i = 10;
// while (i > 0) {
//   console.log(i);
//   i--;
// }

//Q use a while loop to print multiples of 3 to 30.
//var i =3;
// while(i<31){
//     console.log(i)
//     i+=3;  //i++ esme 1 ek value badhta hain, i+= 2; esme i ka jo value hoga usme 2 add ho kr badhega
// }

//Q write program to calculate the sum of numbers from 1 to 100 using  a loop
// var sum =0;
// for(var i=1; i<101; i++){
//     sum= sum +i;
// }
// console.log(sum)

//Q use a for o loop to iterate over the string "javscript".
// var str="javascript";

// for(var i of str){
//     console.log(i);
// }

// var str="shamim"
// for(var i of str){
//     console.log(i)
// }

//Q remove duplicate value from an array

var arr = [1, 1, 1, 1, 3, 3, 4, 2, 2, 2, 1, 1, 1];

var ans=[...new Set(arr)]