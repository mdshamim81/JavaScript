//add kitabe
//kitabe issue
//kitabe return
//kaitabe padhi
//list of all book

// class Library{
//   constructor(){
//     this.books=[]; //saari book ka record yaha per hain
//   }
//   addBooks(books){
//     this.books.push(...books);
//   }
//   listAllBooks(){
//     this.books.forEach(function(book,index){
//       console.log(`${index + 1}) ${book.name} by ${book.author}`);
      
//     })
//   }
// }

// class Book{
//   constructor(name,isbn,price,author){
//     this.name=name;
//     this.isbn=isbn;
//     this.price=price;
//     this.author=author;
//     this.readStatus=false;
//   }
//   info(){
//     console.log(
//       ` ${this.readStatus ? "✅" :"❌"} ${this.name} is Written by ${this.author} and you have ${this,this.readStatus ? "read it" : "not read this Book"} and is available at amazon at a price range of ${this.price} `);
//   }
//   changeReadStatus(){
//     this.readStatus=!this.readStatus;
//   }

// }


// let jhansilibrary=new Library();
// let book1=new Book("Wealth is Life","2rbnjkdsasa",120,"Shamim Ahmad")
// let book2=new Book("Advanture","67hshkjsahash",1000,"Harish Gupta")
// let book3=new Book("69","56uhdjkshdjk",120000,"Kartik")

// jhansilibrary.addBooks([book1,book2,book3]) 












class MobileShop{
  constructor(){
    this.mobiles=[];
  }


  addMobile(mobile){
    this.mobiles.push(mobile)
  }

  listAllMobile(){
    this.mobiles.forEach(function(mb,index){
      console.log(
        `${index+1}) ${mb.brand} - ${mb.model} - ${mb.color} - ${mb.price}`);
    })
  }
}

class Mobile{
  constructor(brand,model,price,color){
    this.id=Math.floor(Math.random()*100000);
    this.model=model;
    this.color=color;
    this.brand=brand;
    this.price=price;
    this.sim=[];
  }

  getMobileInfo(){
    console.log(`${this.brand} - ${this.model} = ${this.price} - ${this.color}`);
  }
  insertSim(sim){
    if(this.sim.length===2){
      console.log("sorry you  Already have 2 sims installed.");
      return;
    }
    this.sim.push(sim)
  }
}


class Sim{
  constructor(brand,balance){
    this.brand=brand;
    this.balance=balance;
  }

  addBalance(balance){
    if(balance<0){
      console.log("to add balance give amount greater than 0");
      return;
    }
    this.balance+=balance
  }
  listAllMobile(){
    this.mobiles.forEach(function(mb,index){
      console.log(
        `${index+1}) ${mb.brand} - ${mb.model} - ${mb.color} - ${mb.price}`);
    })
  }
}

let myMobileShop=new MobileShop();
let sumsung=new Mobile("sumsung","Galaxy s23 ultra",120000,"black")
let tatadocomo=new Sim("tata docomo",300);

sumsung.insertSim(tatadocomo);
myMobileShop.addMobile(sumsung)