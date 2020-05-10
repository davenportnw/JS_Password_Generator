// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input

function writePassword() {
  var alphabet = "";
  let lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  let upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numbers = "1234567890";
  let specialCharacters = "~!@#$%^&*()_-+:";

    let a = getLength();

    let b = useLowerCase();
    if (b === true) {
      alphabet += lowerCaseLetters;
    }
    let c = useUpperCase();
    if (c === true){
      alphabet += upperCaseLetters;
    }
    let d = useNumbers();
    if (d === true) {
      alphabet += numbers;
    }
    let e = useSpecialCharacters();
    if ( e === true) {
      alphabet += specialCharacters;
    }
    console.log("alpabet", alphabet);
    if ((b || c || d || e )  === false) {
      alert("Select at least one critera.");
      writePassword();
    }

    console.log('a:', a, 'b:', b, 'c:', c, 'd:', d, 'e:', e);
    
    let password = collectCharacters(a, alphabet);
    console.log("password", password);
    
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}


//* Criteria for desired password *//

function getLength() {
  let pwdLength = window.prompt("How long do you want your password?");
    if (isNaN(pwdLength)){ 
    alert("Need to input a number between 8 and 128");
    return writePassword();
  }
  //Checks to make sure the input is a number.
    if (pwdLength < 8 || pwdLength > 128){
    alert("Lengths needs to be bewteen 8 and 128 characters.");
    return writePassword();
  }
  return pwdLength;
}

//* Using Lower Case *//

function useLowerCase() {
  let lowerCase = window.confirm("Do you want lowercases in your password? Click Ok for YES or Cancel for NO.");
  
  if (lowerCase === true){
    window.alert("We will use lowercases in your password. ");
  }else{
    window.alert("We will NOT use lowercases in your password.");
  }
  return lowerCase;
}


//* Using Upper Case *//
function useUpperCase() {
  var upperCase = window.confirm("Do you want uppercases in your password? Click Ok for YES or Cancel for NO.");

  if (upperCase === true){
  window.alert("We will use lowercases in your password.");
  }else{
    window.alert("We will NOT use lowercases in your password.");
  }
  return upperCase;
}

//* Using Numbers *//
function useNumbers() {
  var num = window.confirm("Do you want numbers in your password? Click Ok for YES or Cancel for NO.");

  if (num === true){
    window.alert("We will use numbers in your password.");
  }else{
    window.alert("We will NOT use numbers in your password.");
  }
  return num;
}

//* Using Special Characters *//
function useSpecialCharacters() {
  var specialCharacters = window.confirm("Do you want special characters in your password? Click Ok for YES or Cancel for NO.");

  if (specialCharacters === true){
    window.alert("We will use special characters in your password.");
  }else{
    window.alert("We will NOT use special characters in your password.");
  }
  return specialCharacters;
}


//Collect random Lower Case letter//

function getCharacter(alphabet) {
  let randomLcase = alphabet[Math.floor(Math.random() * alphabet.length)];
  return randomLcase;
}


//* Generate Password *//

function collectCharacters(count, alphabet) {
  var letters = "";

  for(var i = 0; i < count; i++) {
    letters += getCharacter(alphabet);
  }
  return letters; 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

