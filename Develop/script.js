// Assignment Code
var generateBtn = document.querySelector("#generate");

const lowerCaseLetters= "abcdefghijklmnopqrstuvwxyz"
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"





// Write password to the #password input
function writePassword() {

  //Wanted length of password
  var howLong = prompt("How long do you want your password to be?"); 
  console.log(howLong);

  checkLength(howLong);
  
  if (howLong < 8 || howLong > 128){
      alert("Lengths needs to be bewteen 8 and 128 characters.");
      console.log(howLong);
      return writePassword();
    
  } 

  //lower case in password
    
  var lowerCase = window.confirm("Do you want lowerCases in your password?"); (true);
  console.log(lowerCase);


  if (confirm(lowerCase)){
      window.alert("We will use lowercases in your password.");
      console.log(lowerCase);
  } else{ 
      window.alert("We will NOT use lowercases in your password.");
      console.log(lowerCase);
  }

//



// Make sures the input is a number.


function checkLength(howLong) {
  if (isNaN(howLong)){
    alert("Need to input a number between 8 and 128");
    return writePassword();
  }
  }










  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
