var usernames = ["Elliot", "John", "Thor", "Fred"];
var passwords = ["qwerty", "captaincrunch", "is", "flintstone"];
var loggedIn = false;
var totalAmount = [0, 0];
var prices = [60, 22];
var percentToAfrice = [0.18, 0.10];
var moneySpent = 0;
var moneyToAfrica = 0;
var moneySpentNow = 0;
var moneyToAfricaNow = 0;

//show/hide hamburgermenu
function displayMenu(){
  var hamburgerMenuDisplay = document.getElementById('myLinks');
  // if display isn't shown close it. if it's closed open it.
  if (hamburgerMenuDisplay.style.display === "block") {
    hamburgerMenuDisplay.style.display = "none";
   }else {
    hamburgerMenuDisplay.style.display = "block";
  }
}
//function that lets you login
function login(){
  // takes values which are input by the user
var username = document.getElementById('username').value;
var password = document.getElementById('password').value;
//runs through all usernames
for(var i = 0; i < usernames.length; i++){
  //checks if username inputed matches a username in the array
  if(usernames[i] === username){
    //if a usernames matches, checks the password for that username
   if(passwords[i] === password){
    //makes display for login none and displays profile instead
    document.getElementById('login').style.display = "none";
    document.getElementById('profile').style.display = "block";
    document.getElementById('newUser').style.display = "none";
    document.getElementById('userCreated').style.display = "none";
    document.getElementById('profileName').innerHTML = "Velkommen " + username;
    document.getElementById('loginMenu').innerHTML = "<a id='linkStyle' href='#profilelogin'onclick='changeTab(1)'>Profil</a>";
    //var that can be called too check if a user has logged in
    loggedIn = true;
    // ends loop
    i = passwords.length;
   }
   // if password and username dosen't match displays error
  }else {
   document.getElementById('loginError').style.display ="block";
  }
 }
}
//createUser function
function createUser(){
  // takes username and password input
 var newUsername = document.getElementById('newUsername').value;
 var newPassword = document.getElementById('newPassword').value;
// removes newUser and displays user created instead
 document.getElementById('newUser').style.display = "none";
 document.getElementById('userCreated').style.display = "block";
 //adds username and password to array
 usernames.push(newUsername);
 passwords.push(newPassword);
}

//shop function
function shop(buy, product, amount) {
  //checks if logged in
  if(loggedIn === true){
  //converts strings to int
  var productAmount = parseInt(amount);
  var productInt = parseInt(product);
  //if buy has been called in function
 if(buy === true){
  //runs through amounts for each product
   for(var i = 0; i < totalAmount.length; i++){
     //adds the amount spent to moneyspent variable
     moneySpent += totalAmount[i] * prices[i];
     //adds the amount of money which goes too africa to moneyToAfrica variable
     moneyToAfrica += totalAmount[i] * prices[i] * percentToAfrice[i];
     //adds the current amount of money spent total to moneySpentNow var
     moneySpentNow += totalAmount[i] * prices[i];
     //adds the current amount of money spent total to moneyToAfricaNow var
     moneyToAfricaNow += totalAmount[i] * prices[i] * percentToAfrice[i];
   }
   //changes text in tag
 document.getElementById('moneySpent').innerHTML = "Totalt beløb " + moneySpent.toString() + "kr. Penge til afrika " + moneyToAfrica.toString() + "kr";
   //changes text in tag
 document.getElementById('moneySpentNow').innerHTML = "Totalt beløb " + moneySpentNow.toString() + "kr. Penge til afrika " + moneyToAfricaNow.toString() + "kr";
// sets vars too 0
 moneySpentNow = 0;
 moneyToAfricaNow = 0;
//sets all totalAmount array values too 0
 for(var i = 0; i < totalAmount.length; i++){
 totalAmount[i] = 0;
 }
 //if buy hasnt been called
 }else {
   //adds amount of product or removes amount of product
  totalAmount[productInt] = totalAmount[productInt] + productAmount;
  // if number goes under 0 number goes to 0
  if(totalAmount[productInt] < 0){
    totalAmount[productInt] = 0;
  }
 }
 //prints number to product 1 and 2 tag
 document.getElementById('product1').innerHTML = totalAmount[0];
 document.getElementById('product2').innerHTML = totalAmount[1];
}
}


//standard calls when tab is changed
function changeTab(tab){
  //calls function
closeTabs();
//sets display to block for called tab
if(tab === 0){
 document.getElementById("news").style.display = "block";
}
if(tab === 1){
 document.getElementById("profileLogin").style.display = "block";
}
if(tab === 2){
 document.getElementById("shop").style.display = "block";
}
if(tab === 3){
 document.getElementById("udvalg").style.display = "block";
}
if(tab === 4){
document.getElementById("kurser").style.display = "block";
}
if(tab === 5){
 document.getElementById("afrika").style.display = "block";
}
if(tab === 6){
 document.getElementById("om").style.display = "block";
}
if(tab === 7){
 document.getElementById("kontakt").style.display = "block";
}
if(tab === 8){
document.getElementById("medier").style.display = "block";
}

}

//functions sets all tab displays too none
function closeTabs(){
 document.getElementById("myLinks").style.display = "none";
 document.getElementById("news").style.display = "none";
 document.getElementById("profileLogin").style.display = "none";
 document.getElementById("shop").style.display = "none";
 document.getElementById("udvalg").style.display = "none";
 document.getElementById("kurser").style.display = "none";
 document.getElementById("afrika").style.display = "none";
 document.getElementById("om").style.display = "none";
 document.getElementById("kontakt").style.display = "none";
 document.getElementById("medier").style.display = "none";
}
