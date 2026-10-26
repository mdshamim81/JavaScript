var allElems=document.querySelectorAll('.elem')
allElems.forEach(function(elem){
  elem.addEventListener('click',function(){
    console.log('hello');
  })
  
})
