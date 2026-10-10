//multiple photo


var arr=[
  {
    src:'bheem.png',
    alt:'img1',
  },
  {
    src:'chutki.png',
    alt:'img2',
  },
  {
    src:'raju.png',
    alt:'img3',
  },
  {
    src:'kaliya.png',
    alt:'img4',
  },
  {
    src:'jaggu.png',
    alt:'img5',
  },
  {
    src:'dholu bholu.png',
    alt:'img6',
  },
]

var btn=document.querySelector('button')
var body=document.querySelector('body')
var flag=0;
var totalImage=0;
var timer;
var alertshown=false;

btn.addEventListener('click',function(){
  clearTimeout(timer);
  if(flag>=arr.length){
    if(!alertshown){
    alert('sara image aa chuki hain!');
    alertshown=true
    }
    flag=0 ; 
    return;
  }
  
  var currentImage=arr[flag];
  //new img element
  
  var img=document.createElement('img')
  //setAttribute
  img.setAttribute('src',currentImage.src);
  img.setAttribute('alt',currentImage.alt);
  img.setAttribute('id','img',(flag +1));
  //random position
  var x=Math.random()*90
  var y=Math.random()*90
  var rot=Math.random()*360
   
  img.style.height='200px'
  img.style.position='absolute'
  img.style.left=x+'%'
  img.style.top=y+'%'
  // img.style.transform='rotate('+ rot +'deg)'

  body.appendChild(img)

  console.log(img.getAttribute('src'))
  console.log(img.getAttribute('alt'))
  flag++;

  timer=setTimeout(function(){
    alert('total image: ' + document.querySelectorAll('body>img').length);

  },5000)

});
