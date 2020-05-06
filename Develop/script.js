// Assignment Code
var generateBtn = document.querySelector("#generate");



// var lowerC = confirm("Do you want lowercases in your Password?"); 
// let length = howLong + Math.min(8, Math.max(128)); 

// function hasLowerCase() {
//   var lower = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z]
// }


// Write password to the #password input
function writePassword() {
  var howLong = prompt("How long do you want your password to be?"); 
  console.log(howLong);

  checkLength(howLong);
  
  
  if (howLong < 8 || howLong > 128){
      alert("Lengths needs to be bewteen 8 and 128 characters.");
      console.log(howLong); 
      return howLong;
    
  } else {
    lowerCase;
  }
    
var lowerCase = confirm("Do you want lowerCases in your password?");


function checkLength(howLong) {
  if (isNaN(howLong)){
    alert("Need to input a number between 8 and 128");
    return false;
  }
  }

  






  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
