// getAttribute and setAttribute
// Creating an Element
// mouse Events, Keyboard Events, Scroll Events, Double click, wheel events, etc


// var h1= document.querySelector('h1')
// h1.innerHTML='How is it going?'

//attribute - for getting an attribute
//setAttribute - for setting an attribute


// var h1= document.querySelector('h1');
// var id=h1.getAttribute('id')
// console.log(id)

// h1.setAttribute('id','heroine')
// h1.setAttribute('class','katrina')



// var img=document.querySelector('img')
// // console.log(img.getAttribute('src'));
// // console.log(img.getAttribute('alt'));
// console.log(img.getAttribute('id'));

// img.setAttribute('src', 'https://media.istockphoto.com/id/178426371/photo/happy-pet-owner.jpg?s=1024x1024&w=is&k=20&c=LmHPrbhi-yR_HbxkLXrjyuH-dD70o2sPZ46Tn25nXq0=')



// image swap
// var img1=document.querySelector('#img1');
// var img2=document.querySelector('#img2');

// var btn=document.querySelector('button');

// btn.addEventListener('click',function(){
//   // console.log('hello guys')
//   var img1src=img1.getAttribute('src')
//   var img2src=img2.getAttribute('src')
//   // console.log(img2src)
//   img1.setAttribute('src',img2src)
//   img2.setAttribute('src',img1src)
// })


// var h1=document.createElement('h1')
// console.log(h1)

// var div=document.createElement('div')
// console.log(div)

// var img=document.createElement('img')
// console.log(img)

// var p=document.createElement('p')
// console.log(p)

// var h1=document.createElement('h1')
// h1.innerHTML='Hello From JS'
// // console.log(h1)
// var body=document.querySelector('body')
// // body.innerHTML=h1
// body.appendChild(h1)


// var img=document.createElement('img')
// img.setAttribute('src','https://images.unsplash.com/photo-1781118118974-54066ffcb54b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
// img.style.height='300px'
// img.style.width='300px'
// document.body.appendChild(img)






var btn=document.querySelector('button')
var body=document.querySelector('body')

btn.addEventListener('click',function(){
  var x=Math.random()*90
  var y=Math.random()*90
  var rot=Math.random()*360
 


  var img=document.createElement('img')
  img.setAttribute('src','./chutki.png')  
  // img.setAttribute('class','image')
  img.style.height='200px'
  img.style.position='absolute'
  img.style.left=x+'%'
  img.style.top=y+'%'
  img.style.rotate=rot+'deg'

  body.appendChild(img)
})
