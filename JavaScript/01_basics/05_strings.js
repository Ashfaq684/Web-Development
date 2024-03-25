const name = "ashfaq"
const repoCount = 40

// console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('ashfaq_ahmed')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-11, 4)
console.log(anotherString);

const newStringOne = "   ashfaq    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://ashfaq.com/ashfaq%40ahmed"

console.log(url.replace('%40', '-'))

console.log(url.includes('khan'))

console.log(gameName.split('_'));