function getUserInfo(){
  return new Promise(function(res,rej){
    res({id:1,name:"harsh"})
  });
}

function getUserPics(id){
  return new Promise(function(res,rej){
    res(["pica","pic2"])
  });
}
getUserInfo().then(function(data){
  console.log(data);
  return getUserPics(data.id)
})
.then (function(data){
  console.log(data);
  
})