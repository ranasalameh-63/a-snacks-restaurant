/////////////Q
let gender;
while (gender !== 'male' && gender !== 'female') {
    gender = prompt("Please enter your gender (male or female):");
    if (gender !== 'male' && gender !== 'female') {
        alert("Invalid input. Please enter 'male' or 'female'.");
    }
}
alert("Thank you, your gender: " + gender);

//////////////////Q1
for (let i = 0; i <= 5; i++) {
    alert(i);
}
//////////////////Q4
let number;
do {
    number = parseInt(prompt("Enter a number between 0 and 100:"));
    if (number < 0 || number > 100) {
        alert("Invalid number! Please try again.");
    }
} while (number < 0 || number > 100);

alert("Thank you! You entered: " + number);

/////////////////Q5
let userNumber = parseInt(prompt("Enter an integer:"));
let sum = 0;

for (let i = 0; i <= userNumber; i++) {
    sum += i;
}

alert("The sum of numbers from 0 to " + userNumber + " is: " + sum);


