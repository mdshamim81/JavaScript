//constuctor function

//purana tarika object banane ka ek constructor function se jab javascript mein class ka concept nahi tha
// function Cupcake(){
//   this.name = "chocolate"
// }

// new Cupcake()

// function Ghar(){
//   this.shahar="delhi"
//   this.kamre=3
//   this.bathroom=2
//   this.kitchen=1
// }

// let ghar1=new Ghar();



// function Toffee(flavor,price,expiry){
//   this.flavor=flavor;
//   this.price=price;
//   this.expiry=expiry;
// }

// let t1=new Toffee("vanilla", 10,"2023-12-31");
// let t2=new Toffee("chocolate",15,"2024-01-31")
// let t3=new Toffee("strawberry",12,"2023",12,"2023-11-30")

//agr function ko kabhi bhi call krte waqt tumhe new ka use kr liya turant man mein ek blank object banao

//jab bhi function mein this ko dekho turant us blank object ko yaad krke us jagah rkh do





// class Toffee{
//   //har class banaate hi pahli cheej jo banaate hain uski aadat daal lo uska naam hain constructor  //esme small () brases nhi lagta hain
// }



//naya tarikaa
class Toffee{
  constructor(flavor,color,taste,shape){
    this.flavor=flavor;
    this.color=color;
    this.taste=taste;
    this.shape=shape;
  
  }
}

let t1=new Toffee("chocolate","brown","sweet","round");
let t2=new Toffee("vanilla","white","sweet","square");
let t3=new Toffee("chocolate","pink","sweet","heart");