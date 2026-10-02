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

// var arr=[1,2,3,4,5,6,7,8,98,31243];
// var ans=arr.sort((a,b)=>b-a);

//reverse and array without using .reverse{}

// var arr=[1,2,3,4,5,6,7,8,98,345423];
// var arr2=[];
// for(var i = arr.length-1; i>=0; i--){
//   arr2.push(arr[i]);
// }

// find the most frequent element in an array

var arr = [3, 4, 1, 3, 4, 6, 7];
var obj={};
arr.forEach(function (val) {

  //simple method
  // if(obj[val] ===undefined){
  //   obj[val]=1;
  // }
  // else{
  //   obj[val]++;
  // }

//smart rule
  obj[val]===undefined ? (obj[val]=1): obj[val]++;
});
