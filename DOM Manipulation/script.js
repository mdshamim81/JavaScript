// DOM - Document object Model
// Fronted ki javascript

// 4 pillars of DOM

// Selection of Element
// Changing HTML
// CHanging CSS
// Event LIstener
// Selection of Elemnts
// var h = document.querySelector("h1");
// console.log(h);

// h.innerHTML ='vartma aakho ka dhoka hain'

// var h = document.querySelector('h1')
// h.innerHTML='jo maan me hain'

// changing css
// var h1 = document.querySelector('h1')
// h1.innerHTML='kuch bhiiiiiii'

// h1.style.color="yellow"

// h1.style.backgroundColor="white"

// var h1=document.querySelector("h1")

// h1.innerHTML= "kuch bhiiiiii"
// h1.style.color="#ff0000"
// h1.style.backgroundColor="lightblue"

// h1.addEventListener("click",function(){
//   console.log("hey guysssss");
//   h1.innerHTML= "kuch bhiiiiii"
// h1.style.color="#ff0000"
// h1.style.backgroundColor="lightblue"
// })

// var h1= document.querySelector("h1")

// h1.addEventListener("click", function(){

//   h1.innerHTML="nice"
//   h1.style.color="red"
//   h1.style.fontSize="100px"
// });

// var box=document.querySelector("#box");
// var box=document.getElementById('box')
// box.innerHTML='change'

// var h1=document.querySelector("h1");
// h1.innerHTML="changed h1"
// var h1=document.querySelectorAll("h1");
// console.log(h1) // nodeList
// console.log(h1[2])
// h1[1].innerHTML="change num 1"

// var h1=document.getElementById("hero")
// var h1= document.querySelector("#hero")
// console.log(h1)
// h1.innerHTML="changed"

// var h1=document.querySelectorAll("h1");
// // console.log(h1)
// h1[0].innerHTML="shamim"

// var box = document.querySelector('#box')
// console.log(box);
// box.innerHTML="hello"
// box.textContent="hello"
// box.innerHTML="<h1>changed</h1>" // inner tag  ek method ke trh use hota hain
// box.textContent="<h1>changed</h1>"

// var button=document.querySelector("button")
// var box=document.querySelector("#box")
// button.addEventListener("click",function(){
//   // console.log("hello")
//   box.style.backgroundColor="red"
// })

// var button=document.querySelector('button')
// var box=document.querySelector('#box')

// var check=0
// function changeBox(){
  
//   if (check == 0) {
//     check=1
//     box.style.backgroundColor='orange'
//     button.innerHTML='Turn it ON'
//     console.log('function running...');
//   }
//   else{
//     check=0
//     box.style.backgroundColor='black'
//     console.error('function running error');
//     button.innerHTML='Turn it OFF'
//   }
// }
// button.addEventListener('click',changeBox)




var btn = document.querySelector("button");
var h5 = document.querySelector("h5");

var check = 0;

btn.addEventListener("click", function () {
  if (check == 0) {
    h5.innerHTML = "Friends";
    h5.style.color = "green";
    btn.innerHTML = 'Remove Friend';
    console.log('friendship done');
    check=1
  }
  else{
    h5.innerHTML = "Stranger";
    h5.style.color = "red";
    btn.innerHTML = 'Add Friend';
    console.log('friendship Tur gyi');
    check=0
  }
});
