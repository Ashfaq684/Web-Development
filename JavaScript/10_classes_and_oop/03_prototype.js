// let myName = "ashfaq    "

// console.log(myName.truelength);


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.ashfaq = function(){
    console.log(`ashfaq is present in all objects`);
}

Array.prototype.heyAshfaq = function(){
    console.log(`Ashfaq says hello`);
}

// heroPower.ashfaq()
myHeros.ashfaq()
myHeros.heyAshfaq()
// heroPower.heyAshfaq()


// inheritance

const User = {
    name: "Chai",
    email: "Chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignments: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`)
}

anotherUsername.trueLength()
"hotCoffe".trueLength()
"iceTea".trueLength()