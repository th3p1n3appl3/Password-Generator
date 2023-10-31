// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Get references to the slider and slider value elements
const slider = document.querySelector('#slider');
const sliderElement = document.querySelector('#slider-value');
// Add event listener to slider input element
slider.addEventListener('input', () => {
  // Update slider value element with current slider value
  sliderElement.textContent = slider.value;
});

// Array to store all prompts for passwordOptions

const passwordOptions = 
["Do you want your password to contain special characters?",
 "Do you want your password to contain number characters?",
 "Do you want your password to contain lowercase characters?",
 "Do you want your password to contain uppercase characters?"
]

// let = passwordLength = 8;

// Prepare prompts for getPasswordOptions function
function getPrompt(promptMessage) {
  return confirm(promptMessage)
}

// Function to prompt user for password options
function getPasswordOptions() {
  return passwordOptions.map(getPrompt);
}
// console.log(getPasswordOptions());


// Function for getting a random element from an array
function getRandom(arr) {
  // Calculating a random index for between 0 and array length
  let randomResult = (arr.length - 1) * Math.random();
  
  // Rounding the result to ensure array index input is correct
  let index = Math.floor(randomResult);

  // Return random array element at index
  return arr[index]
}

// Function to generate password with user input
function generatePassword() {
  let pwOptions = getPasswordOptions();
  let emptyArray = [];
  let result = "";
  // Build the password array
  
  // Check for user answer
  if (pwOptions[0]) {
    emptyArray = emptyArray.concat(specialCharacters) 
  }
  
  if (pwOptions[1]) {
    emptyArray = emptyArray.concat(numericCharacters)
  }
  
  if (pwOptions[2]) {
    emptyArray = emptyArray.concat(lowerCasedCharacters)
  }
  
  if (pwOptions[3]) {
    emptyArray = emptyArray.concat(upperCasedCharacters)
  }
  
  if (!emptyArray.length) {
    alert("You need to pick one option at minimum")
    return "Hunter2"
  }
  
  for (let i = 0; i < parseInt(sliderElement.innerHTML); i++) {
    let nextCharacter = getRandom(emptyArray);
    result += getRandom(emptyArray);
    
  } 
  return result

  
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.innerHTML = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);




