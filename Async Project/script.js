// function fetchUserProfile(username){
//   return fetch(`https://api.github.com/users/${username}`)
//   .then((raw)=>raw.json())
// }

// fetchUserProfile("async").then(function(data){
//   console.log(data);
  
// })



// function getUserRepos(username){
//   return fetch(`https://api.github.com/users/${username}/repos`)
//   .then((raw)=>raw.json())
// }
// getUserRepos("mdshamim81").then(function(data){
//   console.log(data);
  
// })












/////////
let searchBtn=document.querySelector(".search");
let usernameinp=document.querySelector(".usernameinp");
let card=document.querySelector(".card");


function getProfileData(username){
  return fetch(`https://api.github.com/users/${username}`)
  .then(raw=>{
   if(!raw.ok) throw new Error("User not found");
   return raw.json();
  })
}

function getRepos(username){
  return fetch(`https://api.github.com/users/${username}/repos?sort=updated`)
  .then((raw)=>{
    if(!raw.ok) throw new Error("failed to fetch repos...");
    return raw.json();
  })
}

function decorateProfileData(details){
  console.log(details)
  let data=`
          <div class="flex items-start gap-4">
          <img
          src="${details.avatar_url}"
          alt="${details.login}"
          class="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-blue-400 object-cover shrink-0"
        >

        <!-- Profile Details -->
        <div class="min-w-0 flex-1">

          <h2 class="text-lg sm:text-xl font-bold">
            ${details.name} || ${details.login}
          </h2>

          <a
            href="${details.html_url}"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-400 text-xs sm:text-sm hover:text-blue-400"
          >
            @${details.login}
          </a>

          <p class="text-gray-300 text-xs sm:text-sm mt-2 leading-relaxed">
           ${details.bio ||"No bio available"}
          </p>

          <!-- Stats -->
          <div class="flex flex-wrap gap-x-4 gap-y-2 mt-3 text-xs sm:text-sm">
            <p><span class="font-semibold">Public Repos:</span> ${details.public_repos}</p>
            <p><span class="font-semibold">Followers:</span> ${details.followers}</p>
            <p><span class="font-semibold">Following:</span> ${details.following}</p>
          </div>

          <!-- Additional Info -->
          <div class="flex flex-wrap gap-x-4 gap-y-2 mt-3 text-xs sm:text-sm text-gray-300">
            <p><span class="font-semibold text-white">Location:</span> ${details.location ||"not specified"}
            </p>

            <p><span class="font-semibold text-white">Company:</span> 
            ${details.company || "Not specified"}
            </p>
            
            <p>
              <span class="font-semibold text-white">Blog:</span>
               ${
                details.blog
                  ? `<a href="${details.blog.startsWith("http") ? details.blog : "https://" + details.blog}"
              target="_blank"
             rel="noopener noreferrer"
             class="text-blue-400 hover:underline">${details.blog}</a>` 
             : "No blog"
               }
            </p>
          </div>

        </div>    </div>`
  card.innerHTML=data      
}






searchBtn.addEventListener('click', function(){
  let username=usernameinp.value.trim();
  if(username.length>0){
    getProfileData(username).then((data)=>{
      decorateProfileData(data);
    })
  .catch((error)=>{
      console.log("Error:",error)
      alert(error.message);
    })
  } else{
    alert("please enter a github username");
  }
})
