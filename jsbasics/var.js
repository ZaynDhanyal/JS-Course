const accountId = 1445;
let accountEmail = "rajazaindhanyal222@gmail.com"
var accountPassword = "12345f"
accountCity = "Islamabad"

console.log(accountId);
accountEmail = "runmachine@gmail.com"
accountPassword = "12453612"
accountCity = "Rawalpindi"
let accountState;
/*prefer not to use var 
because of isssue in block scope and functional scope*/
 
console.table ([accountEmail, accountId,accountPassword,
accountCity,accountState
])