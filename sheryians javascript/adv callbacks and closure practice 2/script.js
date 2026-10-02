// create a function that take a callbacks and executes it after every `n` second indefinitelty

// function baarbaarchalo(fn,time){
// setInterval(fn,time*1000);
// };

// baarbaarchalo(function(){
//   console.log("hello");
// },2);

//implement a function that return a function  with a present greeting (closure0).
// function greetkaro(greeting){
//   return function(name){
//     console.log(`${greeting} ${name}`);
//   }
// }

// var greetingfnc=greetkaro("hello");
// greetingfnc("shamim");
// greetingfnc("wasim");
// greetingfnc("ahmad");

// var spanishfnc=greetkaro("hola!");
// spanishfnc("shamim");



// function greetSetup(greeting){
//   return function(name){
//     console.log(`${greeting} ${name}`)
//   }
// }

// var indianGreeter=greetSetup("Namaste")
// indianGreeter("shamim")
// var spanishgreeter=greetSetup("hola !");
// spanishgreeter("wasim")


// implement a function that take a callback and only executes it once (HOF+closure).

// function abcd(cb){
//   return function(){
//     cb();
//   }
// }
// var newfnc=abcd (function(){
//   console.log("some code which should be executed");
// });
// newfnc();
// newfnc();     // this is wrong becouse more time execute.
// newfnc();
// newfnc();


// function onlyOnces(cb){
//   let executed=false;
//   return function (){
//     if(!executed){
//       executed=true;
//       cb();
//     }
//     else{
//       console.error("Already executed once")
//     }
//   }
// }
// var newfnc=onlyOnces(function(){
//   console.log("run");
// });
// newfnc();
// newfnc();
// newfnc();




// function OnlyOnceCaller(fn){
//   let executed=false;
//   return function(){
//     if(! executed){
//       executed=true;
//       fn();
//     }
//     else{
//       console.error("doosri baar nahi chalega")
//     }
//   }
// }

// var newfnc=OnlyOnceCaller(function(){
//   console.log("chal gya ")
// })
// newfnc();
// newfnc();
// newfnc();



//implement a function that throttles another function (HOF+ closure).

// function throt(fn, delay){
//   let lastcall=0;
//   return function(){
//     let current=Date.now();
//     if(current-lastcall >=delay){
//       lastcall=current;
//       fn();
//     }
//   }
// }

// var newfnc=throt(function(){
//   console.log("will run in 2 secounds")
// },2000)
// newfnc();

