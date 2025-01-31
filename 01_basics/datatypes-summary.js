// Primitive

// 7 types : String, Boolearn, Number, Null, Undefine, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIN = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')


console.log(id === anotherId)

const bigNumber = 1346342215356n


// Reference non  primitive

// Array , Object, Function

const heros =  ["Shaktiman", "Naagraj", "doga"];
let mtObj = {
    name : "muskan" ,
    age: 21
}

const myFunction = function(){
    console.log("Hello World")
}

console.log(typeof bigNumber)

// Stack  (Primitive), Heap (Non Primitive)

let myYoutubename = "muskanpateldotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log("myYoutubename")
console.log("anothername");

let userOne = {
    email :"user@google.com",
    upi: "user@ybl"
}


let userTwo = userOne

userTwo.email = "muskan@google.com"

console.log(userOne.email);
console.log(userTwo.email);
