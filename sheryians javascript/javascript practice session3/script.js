// var arr=[1,1,1,1,1,1,12,2,2,3,3,4,5,5,6,7,2,3,4];
// var ans=[...new Set(arr)];
// console.log(ans);

// var arr=[3,1,4,3,1,4,2,5];

// var ans=arr.sort(function(a,b){
//   return a-b; //ascending order
// });
// console.log(ans)

// var arr=[3,1,4,3,1,4,2,5];
// var ans = arr.sort(function(a,b){
//   return b-a; //descending order
// })
// console.log(ans)

//unique [3,1,4,2,5]
// var arr = [1,2,3,4,4,555,6,3,2,222,3,2,34,4,5,6,7,54,33,5, 6,788,8,9,9]

// var ans=[...new Set(arr)];
// var newarr=ans.sort(function(a,b){
//   return b-a;
// });

// console.log(newarr[ 1])

// var arr = [
//   1, 2, 3, 4, 4, 555, 6, 3, 2, 222, 3, 2, 34, 4, 5, 6, 7, 54, 33, 5, 6, 788, 8,
//   9, 9,
// ];

// console.log( [...new Set(arr)].sort(function (a, b) {
//   return b - a;
// })[1]);
//sort array descending order[]
// var arr=[1,2,3,4,5,6,7,8,98,31243];
// var ans=arr.sort(function(a,b){
//   return b-a;
// })


var arr=[1,2,3,4,5,6,7,8,98,31243];
var ans=arr.sort((a,b)=>b-a);


//1st  arr[1]
