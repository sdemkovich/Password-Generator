// Write a function that takes user input and creates a password
// based on that input and returns it
function generatePassword() {
  /****
   * WRITE YOUR CODE HERE
   */
  var check = true 
  while (check) {

    var length = prompt("Enter the length the password between 8 and 128 characters");
    if (!isNaN(length)) {
      if (length > 8 && length < 128) {
        check = false
      }
      else{
        alert("Length is not between 8 and 128 characters")
      }
    }
    else {
      alert("Not a number")
    }
  }
  var lowerCase = confirm("Should include lowercase?")
  var upperCase = confirm("Should iclude uppercase?")
  var number = confirm("Should iclude numbers?");
  var specialCharacter = confirm("Should iclude special character?");

  alert("The password length is " + length +
   "\nIncluding lowercase " + lowerCase +
   "\nIncluding uppercase " + upperCase + 
   "\nIncluding number " + number +
   "\nIncluding special character " + specialCharacter);
  
   var passChar = ""

   for ( var i = 0; i < length; i++ ) {
     var randomArray = new Array();

    if(lowerCase) {
      var characters = "abcdefghijklmnopqrstuvwxyz";
      var charactersLength = characters.length;
      var lowerCaseCharacter = characters.charAt(Math.floor(Math.random() * charactersLength));
      randomArray.push(lowerCaseCharacter)
    }
    if(upperCase) {
      var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var charactersLength = characters.length;
      var upperCaseCharacter = characters.charAt(Math.floor(Math.random() * charactersLength));
      randomArray.push(upperCaseCharacter)
    }
    if(number) {
      var characters = "0123456789";
      var charactersLength = characters.length;
      var numberCharacter = characters.charAt(Math.floor(Math.random() * charactersLength));
      randomArray.push(numberCharacter)
    }
    if(specialCharacter) {
      var characters = "!\"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~";
      var charactersLength = characters.length;
      var specialCharacterCharacter = characters.charAt(Math.floor(Math.random() * charactersLength));
      randomArray.push(specialCharacterCharacter);
    }
    var readyPassword = randomArray[Math.floor(Math.random() * randomArray.length)];
    passChar += readyPassword
   }

  //  alert(passChar);

   return passChar
}


//////////////////////////////////////////////////////////////
// DO NOT TOUCH THE CODE BELOW
//////////////////////////////////////////////////////////////
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
