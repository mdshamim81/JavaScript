// var arr=[10,20,30,40,50,60]

// for(let a=0;a<10;a++){
//   console.log(a)
// }

// for(let a=0;a<arr.length;a++){
//   console.log(a)   //array ki jitni size hoga etni loop chalega  //5
// }

// arr.forEach(function(){
//   console.log('helloooo')
// })



// var arr=['shamim','wasim','maksud','sameer']

// arr.forEach(function(elem,idx){
//   console.log(elem,idx)
// })


// var arr=[10,'hello',20,30,'jai ho',40,true,50,60]

// console.log(arr[6])




// var arr=[
//   {
//     user:'shamim',
//     age:22
//   },
//   {
//     user:'Heera',
//     age:40
//   },
//   {
//     user:'Bhnupratap',
//     age:70
//   },
//   {
//     user:'maksud',
//     age:18
//   }
// ]   //array of object
// // console.log(arr[0])
// console.log(arr[2].age);


// var arr=[
//   {
//     username:'salmon',
//     age:65,
//     married:false
//   },
//   {
//     username:'shahrukh',
//     age:60,
//     married:true
//   },
//   {
//     username:'shamim',
//     age:22,
//     married:false
//   },
//   {
//     username:'moawiya',
//     age:22,
//     married:false
//   }
// ];
// arr.forEach(function(elem){
//   console.log(elem.username)
// })
//make a program to add age of all people
// var arr=[10,20,30,40]
// var sum=0
// arr.forEach(function(elem){
//   sum=sum+elem
// })
// console.log(sum)
// var sum=0
// var sum=''
// arr.forEach(function(elem){
//   sum+=elem.username
// })
// console.log(sum)



var arr=[
  {
    username:'Shamim',
    age:22,
    married:false,
    istatus:'Stranger',
    image:'https://images.unsplash.com/photo-1791433238403-97918eaf8449?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'
  },
  {
    username:'Salmon',
    age:65,
    married:false,
    istatus:'Stranger',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdKuYg_6WQHhqQABxOLEyURObpzdEm_2i85Ngms3HGDw&s=10'
  },
  {
    username:'Shahrukh',
    age:60,
    married:true,
    istatus:'Stranger',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd2rcb5Hf1q2WNOlkb9KNKUTwts2al6-5JiZWDGsdA0Q&s=10'
  }
]
var main=document.querySelector('#main')
function heroFunction(){
  var sum=''
  arr.forEach(function(elem,idx){
  sum+=`<div class="card">
      <img src=${elem.image} alt="">
      <h1>${elem.username}, ${elem.age}</h1>
      <h4>Maried : ${elem.married}</h4>
      <h5>${elem.istatus}</h5>
      <button id=${idx}>
        ${elem.istatus==='Stranger'?'Add Friend':'Remove'}
      </button>
    </div>`
})

main.innerHTML=sum
}
heroFunction()
// var h1=document.querySelector(".card h1")
// console.log(h1);  //shirf ek card print huaa  esliye ham yha event bubbling use kenge

main.addEventListener('click',function(dets){
  var gold=(arr[dets.target.id]);
  if(gold.istatus=='Stranger'){
    gold.istatus='Friends'
    
  } else{
    gold.istatus='Stranger'
  }
  
  heroFunction()
  
  
})