// Assignment Code
var generateBtn = document.querySelector("#generate");



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "1234567890";
  var special = "`~!@#$%^&*()_-=+[]{}|;':\",.<>?";
  var totalCharacters = "";
  var uppercaseConfirm = "";
  var lowercaseConfirm = "";
  var numbersConfirm = "";
  var specialConfirm = "";
  var ChartTypeIndex = "";
  var CharTypeAdder = "";
  var CharTypePassword = "";


  characterQuestions();


  function characterQuestions() {
    totalCharacters = "";

    
    characterLength = parseInt(prompt("How many characters would you like your password to be?"))
    if (characterLength < 8 || characterLength > 128) {
      alert("Please try again, your password must be between 8-128 characters.");
      return;
    }

  
    uppercaseConfirm = confirm("Would you like your password to include upper case characters?")
   
    lowercaseConfirm = confirm("Would you like your password to include lower case characters?")
  
    numbersConfirm = confirm("Would you like your password to include numbers?")
    
    specialConfirm = confirm("Would you like your password to include special characters?")
  }


  if (uppercaseConfirm === true) {
    totalCharacters = totalCharacters + uppercase;
  }

  if (lowercaseConfirm === true) {
    totalCharacters = totalCharacters + lowercase;
  }

  if (numbersConfirm === true) {
    totalCharacters = totalCharacters + numbers;
  }

  if (specialConfirm === true) {
   totalCharacters = totalCharacters + special;
  }

 
  for (var i = characterLength; i > 0; i--) {
    ChartTypeIndex = Math.floor(Math.random() * totalCharacters.length);
    CharTypeAdder = totalCharacters[ChartTypeIndex];
    CharTypePassword = CharTypePassword + CharTypeAdder;
  } 
  
  return (CharTypePassword)
}
