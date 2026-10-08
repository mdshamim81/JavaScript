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


var img1=document.querySelector('#img1');
var img2=document.querySelector('#img2');

var btn=document.querySelector('button');

btn.addEventListener('click',function(){
  // console.log('hello guys')
  var img1src=img1.getAttribute('src')
  var img2src=img2.getAttribute('src')
  // console.log(img2src)
  img1.setAttribute('src',img2src)
  img2.setAttribute('src',img1src)
})