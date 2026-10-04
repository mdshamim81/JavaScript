//DOM - Document object Model
//Fronted ki javascript

//4 pillars of DOM

//Selection of Element
//Changing HTML
//CHanging CSS
//Event LIstener
//Selection of Elemnts 
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

var h1=document.querySelector("h1")

// h1.innerHTML= "kuch bhiiiiii"
// h1.style.color="#ff0000"
// h1.style.backgroundColor="lightblue"

h1.addEventListener("click",function(){
  console.log("hey guysssss");
  h1.innerHTML= "kuch bhiiiiii"
h1.style.color="#ff0000"
h1.style.backgroundColor="lightblue"
})