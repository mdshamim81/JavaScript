//rest parameter

// function abcd(a,b,c,...rest){
//     console.log(a,b,c,rest);
// }
// abcd(1,2,3,4,5,6,7,8,9);

//hoisting -> js mein variable and fnc unko js declaration wala part top pe move kr dete hain, aur isey hm kahte hain hoisting

// console.log(a);
// var a=12;

//life -> immediately invoked fnc expression
// (function abcd(){
// //immediately invoked function expression
// })();

// (function abcd(){
//     console.log('hello world')
// })();

// var ans=(function abcd(){
//     var a=12;
//     console.log(a)
//     return a;
// })();

// var ans=(function abcd(){
//     var a=12;
//     return{
//         set: function(val){
//             a=val;
//         },
//         get: function(){
//             console.log(a);
//         }
//     }
// })();
// ans.set(32);
// ans.get();

// var shery=(function sherylibrary(){
//     var lolo=12;
//     return{
//         imageEffect: function(){
//             console.log("image effect")
//         },
//         mouseFollower: function(){
//             console.log("mouse follower")
//         },
//     };
// })();
// shery.mouseFollower();
//hofs -> higher order function
//ek aisa function  jo yaa to return kare function nahin to accept kare function in parameter, ya fir dono

// function abcd(){
//     return function(){
//         console.log("hehehehe");
//     }
// }
// abcd()();

// function abcd(){
//     return function(){
//         return function(){
//             console.log("heyheyhey");
//         }
//     };
// }
// abcd()()();

// function abcd(){
//     return function(){
//         console.log("heyheyhey");
//     };
// }
// var ans=abcd();
// ans();
// console.log(abcd());

// function abcd(fnc){
//     fnc();
// }

// abcd(function(){
//     console.log("hehehehe");
// })

// function abcd(val){
//     val();
// }

// abcd(function(){
//     console.log("heyheyheyhey")
// })


//cb fnc
// kisi function mein jo function pass hote hain call krte waqt usey  cb fnc kahte hain.
//agr ek function mein parameter mein tumne fnc pass kiya jo pass kiya wo hain cb nad jisme kiya wp hain hofs
// function abcd(val){

// }

// abcd(function(){

// });

//first class fnc ->first class fnc ek darja hain jo ki js mein  fncs komila hian, is darje mein kaha jaata hain ki fncs ko app value ki tarah use kr skte ho.

// var a = function(){

// } ;


// function abcd(val){

// }
// abcd (function(){

// })

// global scope

// var a = 12;

// function abcd(){
//     console.log(a);
// }

//local scope

// function abcd(){
//     var a = 12;
// }

//closures -> ek concept hain jismein fnc return krta hain ek aur fnc and returned fnc mein aap use krte ho parent function ka koe dataz

function abcd(){
    var a = 12;
    return function(){
        console.log(a);
    }
}
// var ans = abcd();
// ans();

abcd ()();