//jab bhi constructor banaaoge aur kuch aisa mila gya jo ap k sabmein same  hain to usey kabhi bhi direct constructor mein banana galat tarika hota hian per sahi tareeka hain prototype  ka use krna kyuki prototype mein save krne per jitna  bhi new instance banaoge wo saare instance by default  tumhare proto ki value ko hold karega 


// function Toffee(name){
//   this.name=name;
//   this.price=10;
// }

// let t1=new Toffee("alpenliebe")
// let t2=new Toffee("dairy milk")


// function Toffee(name,price){
//   this.name=name;
//   this.price=price;
// }

// let t1=new Toffee("alpenliebe",10)
// let t2=new Toffee("kachha aam",20)

// function Toffee(name){
//   this.name=name;
// }

// Toffee.prototype.price=3;

// let t1=new Toffee("alpenliebe")
// let t2=new Toffee("kachha aam")


// function Human(name,age,isHandsome){
//   this.name=name;
//   this.age=age;
//   this.isHandsome=isHandsome;
  
// }

// Human.prototype.sayHello=function(){
//   console.log('hello');
  
// }

// let h1=new Human("shamim",22,true)



//sabse pahle property ko aapke object mein dhundhege nahi mila to prototype mein dhundte hain


// let a={
//   name:"shamim"
// }
// console.log(a.toString())




// function Toffee(name){
//   this.name=name;
  
// }

// Toffee.prototype.price=10;

// let t1=new Toffee("kacha aam")







// function Toffee(name){
//   this.name=name;
//   this.printMyName=function(){
//     console.log("kachha aam");
//   }
// }

// let t1=new Toffee("kachha aam");
// let t2=new Toffee("mango bite");




// function Toffee(name,price){
//   this.name=name;
//   this.price=price;
//   this.printMyName=function(){
//     console.log(name);
//   }
//   this.printMyPrice=function(){
//     console.log(price);
//   }
// }

// let t1=new Toffee("kachha aam",12);
// let t2=new Toffee("mango bite",15);


function Employee(name,age,id,salary){
  this.name=name;
  this.age=age;
  this.id=id;
  this.salary=salary;
}

Employee.prototype.printDetails=function(){
  console.log(`${this.name} is my name and I am ${this.age} years old my id is ${this.id} and my salary is ${this.salary}`);
}

let e1=new Employee("shamim",22,1234,50000);