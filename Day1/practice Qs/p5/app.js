//Q1
let num = 50;

if (num % 10 == 0) {
  console.log("good");
} else {
  console.log("bad");
}

// Q2
// let name= prompt("enter your name");
// let age= prompt("enter your age");

// alert(`${name} is ${age} years old.`)

//Q3
let quater = 2;

switch (quater) {
  case 1:
    console.log("january, february, march");
    break;
  case 2:
    console.log("april, may, june");
    break;
  case 3:
    console.log("july, august, september");
    break;
  case 4:
    console.log("october, november, december");
    break;
  default:
    console.log("not a Quater!");
}

//Q4
let str = "apples";
if ((str[0] == "a" || start[0] == "A") && str.length > 5) {
  console.log("golden string");
} else {
  console.log("not a golden string");
}

//Q5

let a = 38;
let b = 5;
let c = 13;

if (a > b) {
  if (a > c) {
    console.log(a, "is largest");
  } else {
    console.log(c, "is largest");
  }
} else {
  if (b > c) {
    console.log(b, "is largest");
  } else {
    console.log(c, "is largest");
  }
}

let x = 38;
let y = 5;
let z = 13;

if (x < y) {
  if (x < z) {
    console.log(x, "is smallest");
  } else {
    console.log(z, "is smallest");
  }
} else {
  if (y < z) {
    console.log(y, "is smallest");
  } else {
    console.log(z, "is smallest");
  }
}

let m = 38;
let n = 5;
let o = 13;

// if (x > y) {
//   if (x < z) {
//     console.log(x, "is middle");
//   } else {
//     console.log(z, "is middle");
//   }
// } else {
//   if (y < z) {
//     console.log(y, "is middle");
//   } else {
//     console.log(z, "is middle");
//   }
// }


if ((m > n && m < o) || (m < n && m > o)) {
    console.log(m, "is middle");
} else if ((n > m && n < o) || (n < m && n > o)) {
    console.log(o, "is middle");
} else {
    console.log(o, "is middle");
}



// Q6
let num1 =32;
let num2 =47852;
if ((num % 10) == (num2%10)){
    console.log("number have the same last digit which is, num1%10")
} else {
    console.log("number dont't have the same last digit");
}