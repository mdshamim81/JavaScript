// function getUserInfo(){
//   return new Promise(function(res,rej){
//     res({id:1,name:"harsh"})
//   });
// }

// function getUserPics(id){
//   return new Promise(function(res,rej){
//     res(["pica","pic2"])
//   });
// }
// getUserInfo().then(function(data){
//   console.log(data);
//   return getUserPics(data.id)
// })
// .then (function(data){
//   console.log(data);
  
// })


// function getUserInfo(){
//   return new Promise(function(res,rej){
//     setTimeout(function(){
//       res({id:1, name:"shamim"})
//     },1000)
//   })
// }


// function getUserPics(id){
//   return new Promise(function(res,rej){
//     setTimeout(function(){
//       res(["pic1","pic2"]);
//     },2000)
//   })
// }
// getUserInfo().then(function(data){
//   console.log(data);
//   return getUserPics(data.id);
// })
// .then(function(data){
//   console.log(data);
// })



// fetch("https://api.github.com/users/mdshamim81")
// .then(res=> res.json())
// .then(data=>{
//   console.log(data);
  
// })


// fetch("https://api.github.com/users/mdshamim81")
// .then(raw=>raw.json())
// .then((data)=>{
//   console.log(data);
  
// })


// document.querySelector("input")
// .addEventListener('click',function(){
//   fetch("https://api.github.com/users/mdshamim81")
//   .then((raw)=>raw.json())
//   .then((data)=>{
//     console.log(data);
//   })
// })


function getUserInfo(username) {
  return fetch(`https://api.github.com/users/${username}`)
  .then((raw)=>raw.json())
}
getUserInfo("mdshamim81").then(function(data){
  console.log(data);
  
})