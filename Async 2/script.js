//async js
//code 2 pakar ka hota hain -> sync async
//sync code turant chalta hain 
//async code bad me chalta hain


//async code  sabse pahle jaata hai webAPIs pe, jab waha per ye resolve ho jata hain tab  ye code jat hain callback queue and fir event loop check krta hain thread mein call stack khali hua ya nhi and agr hua to mein thread  un stack  pr rh rhe execution context ko execute krta hain


// sync => call stack => main thread execution
//async =>webAPI => callback queue => (call stack empty) => call stack =>main thread

//callback hell(pyramid doom)

// function getDetails(name,){
//   setTimeout(function(){
//     console.log("sending the request to instagram...");
    
//   },1000);
//   setTimeout(function(){
//     console.log("fetching data...");
    
//   },3000);
//   setTimeout(function(){
//     ()
    
//   },6000)
// }

// getDetails("shamimahmad", function(){
//   console.log("data saved in gallery.");
  
// });



// function doSomething(){
// ()
// }
// doSomething(fuunction(){

// })

//koe function ko chalate waqt ye batana dena kaam krne ke bad kon sa function chalana hain


// function stepOne(){
//   console.log("step 1");
//   ();
// }

// function stepTwo(){
//   console.log("step 2");
//   ();
// }

// function stepThree(){
//   console.log("step 3");
//   ();
// }

// stepOne(()=>{
//   stepTwo(()=>{
//     stepThree(()=>{
//       console.log("all steps completed.")
//     });
//   });
// });




// function getUser1(){
//   console.log("Shamim")
//   ()
// }
// function getUser2(){
//   console.log("Wasim")
//   ()
// }
// function getUser3(){
//   console.log("Maksud")
//   ()
// }

// getUser1(()=>{
//   getUser2(()=>{
//     getUser3(()=>{
//       setTimeout(function(){
//         console.log("All users done.");
//       },2000);
//     })
//   }) 
// })




//promises


// const pr=new Promise(function(res,rej){
//   console.log("instagram jaao data  laao");
//   console.log("instagram mein data collect ho rha hain");
//   console.log("instagram mein data mein error nahi  aaya")
//   console.log("instagram data...");
//   res()
// })

// pr.then(function(){
//   console.log("resolved");
  
// }).catch(function(){
//   console.log("rejected")
// });




//callback hell esse bachne ke liye ham parameter ke under  ko hata dete hain
// function stepOne(){
//   console.log("stepOne");
//   ()
// }
// function stepTwo(){
//   console.log("stepTwo")
//   ()
// }
// function stepThree(){
//   console.log("stepThree")
//   ()
// }

// stepOne(()=>{
//   stepTwo(()=>{
//     stepThree(()=>{
//       console.log("All Step Done")
//     })
//   })
// })


//aise hota

function stepOne(){
  return new Promise(function(res, rej){
    console.log("step 1");
    res();
  })
}
function stepTwo(){
  return new Promise(function(res,rej){
  console.log("step 2")
  res();
  })
}
function stepThree(){
  return new Promise(function(res,rej){
    console.log("step 3")
    res();
  })
}

stepOne()
.then(stepTwo)
.then(stepThree)
.then(function(){
  console.log("All step done");
})