// var num=Math.random()*100

// var num2=Math.floor(num)
// console.log(num2)

// var num=Math.floor(Math.random()*100)
// console.log(num);

var change=document.querySelector('#change')
var box=document.querySelector('#box')

change.addEventListener('click',function(){
  var c1=Math.floor(Math.random()*256)
  var c2=Math.floor(Math.random()*256)
  var c3=Math.floor(Math.random()*256)

// console.log(c1,c2,c3)//
  box.style.backgroundColor =`rgb(${c1},${c2},${c3})`
})

// let arr=['CSK','MI','RCB','KKR','SRH','DC','PBKS','RR','LSG','GT'];
// let btn=document.querySelector('button')
// let h1=document.querySelector('h1')

// btn.addEventListener('click',function(){
//   let num= Math.floor(Math.random()*arr.length)
//   let winner=(arr[num]);
//   console.log(winner)
//   h1.innerHTML=winner
// })

var arr = [
  {
    team: "CSK",
    primary: "yellow",
    secondary: "green",
  },
  {
    team: "RCB",
    primary: "red",
    secondary: "black",
  },
  {
    team: "MI",
    primary: "blue",
    secondary: "gold",
  },
  {
    team: "KKR",
    primary: "purple",
    secondary: "gold",
  },
  {
    team: "SRH",
    primary: "orange",
    secondary: "darklight",
  },
];
var btn = document.querySelector("#guess");
var h1 = document.querySelector("h1");
btn.addEventListener("click", function () {
  var num = Math.floor(Math.random() * arr.length);
  var winner = arr[num];
  h1.innerHTML = winner.team;
  h1.style.backgroundColor = winner.primary;
  // h1.style.backgroundColor=winner.secondary
});
