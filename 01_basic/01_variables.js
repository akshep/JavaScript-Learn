const accountId = 14235
let accountEmail = "akshep9359@gmail.com"
var accountPassword= "101010"
accountCity = "Chandausi"
let accountState; 

// accountId = 1010 // not allowed baecause it is constant

accountEmail = "akshepkietmca@gmail.com"
accountPassword = "123456789"
accountCity = "Noida"
console.log(accountId);


/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])