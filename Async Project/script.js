// function fetchUserProfile(username){
//   return fetch(`https://api.github.com/users/${username}`)
//   .then((raw)=>raw.json())
// }

// fetchUserProfile("async").then(function(data){
//   console.log(data);
  
// })



function getUserRepos(username){
  return fetch(`https://api.github.com/users/${username}/repos`)
  .then((raw)=>raw.json())
}
getUserRepos("mdshamim81").then(function(data){
  console.log(data);
  
})