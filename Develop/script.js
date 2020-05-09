// Assignment Code
var generateBtn = document.querySelector("#generate");


// const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// const numbers1 = "1234567890"
// const specialCharacters = "~!@#$%^&*()_-+:"




// Write password to the #password input

function writePassword() {
    
    let a = getLength();
    console.log(a);

    let b = getLowerCaseLetter();
    console.log(b);

    let c = collectLowerCaseLetters(a);
    console.log(c);

    // let b = useLowerCase();
    // let c = uCase();
    // let d = numP();
    // let e = sCharacters();
  //  let f = manyTimes();



//* Lengthslet of desired password *//

function getLength(){
  let pwdLength = window.prompt("How long do you want your password?");
    if (isNaN(pwdLength)){ 
    alert("Need to input a number between 8 and 128");
    return writePassword();
  }
    if (pwdLength < 8 || pwdLength > 128){
    alert("Lengths needs to be bewteen 8 and 128 characters.");
    return writePassword();
  }
  return pwdLength;
}




// Make sures the input is a number.

// function checkLength() {
//   if (isNaN(howLong)){ 
//     alert("Need to input a number between 8 and 128");
//     return writePassword();
//     }
// }

  //* Using Lower Case *//

// function useLowerCase(){
//   let lowerCase = window.confirm("Do you want lowercases in your password? Click Ok for YES or Cancel for NO.");
//   console.log(lowerCase);
  
//   if (lowerCase === true){
//     window.alert("We will use lowercases in your password. ");
//     console.log(lowerCase);
//   }else{
//     window.alert("We will NOT use lowercases in your password.");
//       console.log(lowerCase);
//   }
//   return lowerCase;

}


//* upper case in password *//
// function uCase(){
//   var upperCase = window.confirm("Do you want uppercases in your password? Click Ok for YES or Cancel for NO.");
//   console.log(upperCase);
  
//   if (upperCase === true){
//   window.alert("We will use lowercases in your password.");
//   console.log(upperCase);
//   }else{
//     window.alert("We will NOT use lowercases in your password.");
//     console.log(upperCase);
//   }
// }

//* numbers in password *//
// function numP(){
//   var num = window.confirm("Do you want numbers in your password? Click Ok for YES or Cancel for NO.");
//   console.log(num);

//   if (num === true){
//     window.alert("We will use numbers in your password.");
//     console.log(num);

//   }else{
//     window.alert("We will NOT use numbers in your password.");
//     console.log(num);
//   }
// }


//* special characters in password *//
// function sCharacters(){
//   var sChar = window.confirm("Do you want special characters in your password? Click Ok for YES or Cancel for NO.");
//   console.log(sChar);

//   if (sChar === true){
//     window.alert("We will use special characters in your password.");
//     console.log(sChar);
//   }else{
//     window.alert("We will NOT use special characters in your password.");
//     console.log(sChar);
//   }
// }
// function manyTimes(){
//   let timeS = getLength() * lCaseCheck();
//   console.log(timeS);
//   return manyTimes;
// }


// //* Generate Password *//
function getLowerCaseLetter(){
  var lowerCaseLetters= "abcdefghijklmnopqrstuvwxyz"
  let randomLcase = lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)];
  // console.log(randomLcase);
  return randomLcase;
}

function collectLowerCaseLetters(count){
  var letters = "";
  console.log("count", count);

  for(var i = 0; i < count; i++) {
    console.log(i);
    letters += getLowerCaseLetter();
    console.log(letters);
  }
  return letters; 
}



// function lCaseCheck(){
//   var lowerCaseLetters= "abcdefghijklmnopqrstuvwxyz"

//   if(lCase === true){
//     let randomLcase = lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)];
//     console.log(randomLcase);
//     let lowerLets = randomLcase * howLong;
//     console.log(lowerLets);
//     return lowerLets;
//   }
// }

  



  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

