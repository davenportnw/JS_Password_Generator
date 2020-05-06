// Assignment Code
var generateBtn = document.querySelector("#generate");

const lowerCaseLetters= "abcdefghijklmnopqrstuvwxyz"
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers1 = "1234567890"
const specialCharacters = "~!@#$%^&*()_-+:"




// Write password to the #password input

function writePassword() {

    lengthP();
    lCase();
    uCase();
    numP();
    sCharacters();
}

//* Lengths of desired password *//

function lengthP(){

var howLong = prompt("How long do you want your password to be?"); 
console.log(howLong);

checkLength(howLong);

if (howLong < 8 || howLong > 128){
    alert("Lengths needs to be bewteen 8 and 128 characters.");
    console.log(howLong);
    return writePassword();
  } 
  
}
// Make sures the input is a number.

function checkLength(howLong) {
  if (isNaN(howLong)){
    alert("Need to input a number between 8 and 128");
    return writePassword();
  }
  }

//* lower case in password *//

function lCase(){
  var lowerCase = window.confirm("Do you want lowercases in your password?");
  console.log(lowerCase);
  
  if (lowerCase === true){
    window.alert("We will use lowercases in your password.");
    console.log(lowerCase);
  }else{
    window.alert("We will NOT use lowercases in your password.");
      console.log(lowerCase);
  }

}


//* upper case in password *//
function uCase(){
  var upperCase = window.confirm("Do you want uppercases in your password?");
  console.log(upperCase);
  
  if (upperCase === true){
  window.alert("We will use lowercases in your password.");
  console.log(upperCase);
  }else{
    window.alert("We will NOT use lowercases in your password.");
    console.log(upperCase);
  }
}

//* numbers in password *//
function numP(){
  var num = window.confirm("Do you want numbers in your password?");
  console.log(num);

  if (num === true){
    window.alert("We will use numbers in your password.");
    console.log(num);

  }else{
    window.alert("We will NOT use numbers in your password.");
    console.log(num);
  }
}


//* special characters in password *//
function sCharacters(){
  var sChar = window.confirm("Do you want special characters in your password?");
  console.log(sChar);

  if (sChar === true){
    window.alert("We will use special characters in your password.");
    console.log(sChar);
  }else{
    window.alert("We will NOT use special characters in your password.");
    console.log(sChar);
  }




//* Generate Password *//

function generatePassword(){

}

  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
