// function stepOne(cb){
//   console.log("step 1")
//   cb();
// }
// function stepTwo(cb){
//   console.log("step 2")
//   cb();
// }
// function stepThree(cb){
//   console.log("step 3")
//   cb();
// }
// stepOne(()=>{
//   stepTwo(()=>{
//     stepThree(()=>{
//       console.log("all completed");
      
//     })
//   })
// })





// Promise

// function stepOne(){
//   return new Promise(function(res,rej){
//     console.log("step 1");
//     res()
//   })
// }

// function steptwo(){
//   return new Promise(function(res,rej){
//     console.log("step 2");
//     res()
//   })
// }
// function stepThree(){
//   return new Promise(function(res,rej){
//     console.log("step 3");
//     res()
//   })
// }

// stepOne()
//   .then(steptwo)
//   .then(stepThree)
//   .then(function(){
//     console.log("done all steps")
// })



//1. Simulate a Food Delevery
//Task: Create a function orderFood that return a promise. It should resolve after 2 second with pizza 🍕 delevery!.

//Bonous: Add a chance to reject with "❎ Delevery failed!"


// function orderFood(){
//   return new Promise((res,rej)=>{
//     setTimeout(()=>{
//       let chance=Math.random() < 0.7;
//       if(chance) res();
//       else rej()
//     },2000)
//   });
// }

// orderFood()
// .then(function(){
//   console.log("🍕 Delevered!");
// })
// .catch(function(){
//   console.log("❌ Delevery Failed!");
// })

// try something
// function chargePhone(){
//   return new Promise((resolve,reject)=>{
//     let chance=Math.random() <0.7;
//     if(chance)resolve()
//     else reject()
//   })
// }

// chargePhone()
// .then(function(){
//   console.log("Phone charge Successfully!🔋")
//   setTimeout(()=>{
//     console.log("Unplug the charger 🔌");
//   },2000)

// })
// .catch(function(){
//   console.log("Failed Charging!❌")
//   setTimeout(()=>{
//     console.log("Please Check the charger connection. 🔌");
//   },2000)

// })


// 2. chained promise: user => posts => comments
//Task: Create getUser() => resolve with {id:1, name:"shamim"}
//getComments(postId) => resolves with comments
// chain them together using.then() and log the final output


// function getUser(){
//   return new Promise((res,rej)=>{
//     setTimeout(function(){
//       res({id:1, name:"Shamim"});
//     },1000)
//   });
// }

// function getPosts(userId){
//   return new Promise((res,rej)=>{
//     setTimeout(function(){
//       res(["title 1", "title 2"])
//     },1000);
//   });
// }


// function getComments(postId){
//   return new Promise((res,rej)=>{
//     setTimeout(function(){
//       res(["great post", "amazing content","you rocked"])
//     },1000);
//   });
// }

// getUser()
// .then(function(data){
//   console.log(data);
//   return getPosts(data.id);
// })
// .then(function(title){
//   console.log(title);
//   return getComments("ahhhs")
// })
// .then(function(cmts){
//   console.log(cmts);
// })

// .finally(function(){
//   console.log("all data Fatched");
// })




//fake API Deley
//task:
//write a function fakeAPICall(endpoint) that:
//accept a string like "users " or "posts"
//resolve with some dummy data after a random delay (1-3 sec)


function fakeAPICall(endpoint){
  const data={
    users: ["shamim","wasim","harsh"],
    posts: ["hey champs","great going everyone","lets build this"],
  };

  let delay=Math.random()*2000+1000;
  return new Promise(function(res,rej){
    setTimeout(function(){
      res(data[endpoint]);
    },delay)
  });
}

fakeAPICall("users")
.then(function(data){
  console.log(data);
})

fakeAPICall("posts")
.then(function(data){
  console.log(data);
})