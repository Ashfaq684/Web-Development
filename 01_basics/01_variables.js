const accountId = 122334
let accountEmail = "ashfaq@google.com"
var accountPassword = "12345"
accountCity = "Dhaka"

// accountId = 2 // not allowed

accountEmail = "ac@ac.com"
accountPassword = "212121"
accountCity = "Khulna"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity])