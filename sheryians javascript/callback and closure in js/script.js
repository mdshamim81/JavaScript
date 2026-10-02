//callback hofs closures
//callback -> ek aisa function jo app kisi aur function me pass krte ho future mein chalane ke liye

// function abcd(fn){
//   fn();
// }
// abcd(function(){})//collback

// hofs -> ek aisa function jo accecpt kre doosra function in parameter ya fir return kare ek aur function , aisa fnc ko kahte hain hofs (higher order fn)

// function abcd(){
//   return function(){

//   }
// }
// abcd();


//closures -> ek aisa function jo return kare doosra function and jo fnc return hua hin wo use kare parent fnc ka koi variable

// function abcd(){
//   let a =12;
//   return function (){
//     console.log|(a);
//   }
// }


// function abcd(){
//   let a =15;
//   return function(){
//     console.log(a)
//   }
// }

//create a function that takes another funtion as an arguments and calls it after 3 secound (hofs + callback)

// function callerfnc(fn){
//   setTimeout(fn,3000);
// }
// callerfnc(function(){
//   console.log("hey")
// })

// function abcd(fn){
//   setTimeout(fn,3000);
// };
// abcd(function(){
//   console.log("shamim");
// });

//implement your own version of `.map()` as a higher order function.

// var arr=[1,2,3,4,5];

// var ans=arr.map(function(value){
//   return value+2;
// });


//ek function banao jo ki accept kare array and accept kare ki kya chalana hain har value par.

// var arr=[1,2,3,4,5];

// function mapkicopy(arr,fnc){
//   var newarr=[];
//   for(var i=0; i<arr.length; i++){
//     newarr.push(fnc(arr[i]));
//   }
//   return newarr;
// }

// var ans=mapkicopy(arr,function(value){
//   return value+3;
// });



// var arr=[2,3,4,5,6];

// function shamim(arr,fn){
//   var newarrr=[];
//   for(var i=0; i<arr.length; i++){
//     newarrr.push(fn(arr[i]));
//   }
//   return newarrr;
// }

// var ans=shamim(arr,function(value){
//   return value+5;
// });


//write a function that uses closure to create a counter.

// function abcd(){
//   let def=0;
//   return function(){
//     console.log(def)
//   };
// };

// function counter(){
//   let count=0;
//   return function (){
//     count++;
//     console.log(count);
//   };
// }

// var makecount = counter();
// makecount()
// makecount()
// makecount()
// makecount()
// makecount()


// function counter(){
//   let count=1;
//   return function (){
//     count++;
//     console.log(count);
//   }
// }

// var fn=counter();
// fn()
// fn()
// fn()
// fn()

//implement a function that limits how many times another function can be called (closure+HOF).

// function fnlimiter(fn,limit){
//   let totalcalled=0;
//   return function(){
//     if(totalcalled<limit){
//       totalcalled++;
//       fn();
//     };
//   };
// };

// let limiter=fnlimiter(function (){
//   console.log("hey");
// },3);
// limiter();
// limiter();
// limiter();
// limiter();
// limiter();

//implement a function that limits how many times another function can be called (closure+HOF).
function fnlimiter(fn,limit){
  let total=0;
  return function(){
    if(total< limit){
      total++;
      fn();
    }
    else{
      console.error("Limit reached buy Pro pack for more Limit!");
    };
  };
};



let limiter=fnlimiter(function(){
  console.log ("hey shamim");
},4);
limiter();
limiter();
limiter();
limiter();
limiter();

