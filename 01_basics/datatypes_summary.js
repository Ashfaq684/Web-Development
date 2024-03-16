//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["Deku", "Naruto", "Tanjiro", "Shikamaru"];

let myObj = {
    name: "shikamaru",
    age: 18,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3



// +++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (Primitive), Heap(Non-Primitive)

let myYoutubename = "ashfaq"
let anothername = myYoutubename
anothername = "mostahid"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    name : "ashfaq",
    email : "user@google.com",
}

let userTwo = userOne

userTwo.email = "ashfaq@google.com"

console.log(userOne.email);
console.log(userTwo.email);