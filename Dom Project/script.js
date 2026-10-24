// var allElem = document.querySelectorAll('.elem');


// allElem.forEach(function(elem){
//   elem.addEventListener('click',function(){
//     // console.log(elem.id);

//     console.log(document.querySelectorAll('.fullElem')[elem.id])
    
//   })
  
// })

// page close krne ke liye=>

// var allElems = document.querySelectorAll('.elem');
// var fullElemPage =document.querySelectorAll('.fullElem')
// var fullElemPageBackBtn =document.querySelectorAll('.fullElem .back')

// allElems.forEach(function(elem){
//   // console.log(elem.id);
//   elem.addEventListener('click',function(){
//     fullElemPage[elem.id].style.display="block"
//   })
  
// })

// fullElemPageBackBtn.forEach(function(back){
//   back.addEventListener('click',function(){
//     fullElemPage[back.id].style.display="none"
//   })
  
// })



//start

function openFeatures(){
  var allElems = document.querySelectorAll('.elem');
  var fullElemPage =document.querySelectorAll('.fullElem')
  var fullElemPageBackBtn =document.querySelectorAll('.fullElem .back')

  allElems.forEach(function(elem){
    // console.log(elem.id);
    elem.addEventListener('click',function(){
      fullElemPage[elem.id].style.display="block"
    })
    
  })

  fullElemPageBackBtn.forEach(function(back){
    back.addEventListener('click',function(){
      fullElemPage[back.id].style.display="none"
    })
    
})
}
openFeatures()