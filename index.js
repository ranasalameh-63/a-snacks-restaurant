//Q1
let userName = prompt("Enter your name");
let userGender = prompt("Enter your Gender");

if (userGender === 'Female' || userGender === 'female') {
    window.alert("Welcome Ms " + userName);
} else if (userGender === 'Male' || userGender === 'male') {
    window.alert("Welcome Mr " + userName);
} else {
    window.alert("Welcome " + userName);
}

//Q1 part 2
let userOrder = prompt("Would you like to order shawarma, zinger, or burger? (yes/no)");
let userChoice = prompt("Write the name of the order (shawarma, zinger, burger):");
if (userOrder === 'yes' || userOrder==='Yes') {
    if (userChoice === "shawarma" || userChoice === "zinger" || userChoice === "burger") {
        window.alert("Your order is being prepared now!");
    } else {
        window.alert("Sorry " + userName + ", we only serve shawarma, zinger, or burger.");
    }
} else if (userOrder === 'no'||userOrder==='No') {
    window.alert("Ok it's up to you , thank you");
}
else {
    window.alert("Invalid response. Please enter 'yes' or 'no'.");
}
console.log("Done"+ ""+userName +"Your order is"+"" +userChoice)
/////Ex3
let userData = [];
userData.push(userName,userGender,userChoice);
for(let i = 0; i <userData.length ; i++){
    console.log(userData)
}
/////part 2
function getUserGender(userName){
    let userGender = prompt("Enter your Gender");

if (userGender === 'Female' || userGender === 'female') {
    window.alert("Welcome Ms " + userName);
} else if (userGender === 'Male' || userGender === 'male') {
    window.alert("Welcome Mr " + userName);
} else {
    window.alert("Welcome " + userName);
}
    return userGender
}
console.log(getUserGender(userGender)) ;

//Q2

let number = parseInt(prompt("Enter a number between 1 and 9:"));
switch (number) {
    case 1:
        console.log("ONE");
        break;
    case 2:
        console.log("TWO");
        break;
    case 3:
        console.log("THREE");
        break;
    case 4:
        console.log("FOUR");
        break;
    case 5:
        console.log("FIVE");
        break;
    case 6:
        console.log("SIX");
        break;
    case 7:
        console.log("SEVEN");
        break;
    case 8:
        console.log("EIGHT");
        break;
    case 9:
        console.log("NINE");
        break;
    default:
        console.log("PLEASE TRY AGAIN");
}
////////////// Part 1/////////////////
let par1 =document.createElement('p');
let par = document.createElement('p');
let ol = document.createElement('ol')
let Gender = document.createElement('li');
let age = document.createElement('li');
let order = document.createElement('li');
//////data
par1.textContent = "Welcome to Snack restaurant, the ultimate destination for snack lovers! ";
par.textContent = userName;
Gender.textContent =userGender;
age.textContent = userAge;
order.textContent = userChoice;

//// call div
let div = document.getElementById('hero');


//////append
div.appendChild(par);
par.append(ol);
ol.append(Gender);
ol.appendChild(age);
ol.appendChild(order);

