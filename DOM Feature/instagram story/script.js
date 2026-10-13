var arr=[
  {
    dp:"https://plus.unsplash.com/premium_photo-1727942419701-0428352a21e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",story:"https://images.unsplash.com/photo-1526510747491-58f928ec870f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
  },
  {
    dp:"https://images.unsplash.com/photo-1604004215514-655fff73c0d1?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" ,story:"https://images.unsplash.com/photo-1604004215514-655fff73c0d1?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
  },
  {
    dp:"https://plus.unsplash.com/premium_photo-1732127042472-b2769c3aebba?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",story:"https://images.unsplash.com/photo-1620230264926-0e16c1504f2c?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
  },
  {
    dp:"https://images.unsplash.com/photo-1738928156507-8c4bb4c48c11?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",story:"https://images.unsplash.com/photo-1722296470839-bbbab40bff7a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
  },
  {
    dp:"https://images.unsplash.com/photo-1661693657730-1eeac94a3291?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",story:"https://images.unsplash.com/photo-1608113378465-012bad4ae6fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
  }

];
var storiyan=document.querySelector('#storiyan')
var clutter=""

arr.forEach(function(elem,idx){
    clutter+=`<div class="story">
    <img id="${idx}" src="${elem.dp}" alt="">
    </div>`
})
storiyan.innerHTML=clutter;

storiyan.addEventListener('click',function(dets){
document.querySelector("#full-screen").style.display="block"
document.querySelector('#full-screen').style.backgroundImage=`url(${arr[dets.target.id].story})`

setTimeout(function(){
document.querySelector("#full-screen").style.display="none"
},2000)
})