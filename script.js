// Prompt the user to enter a number
let num1 = prompt("Give me a number to check if it's even or odd");

// Calculate the remainder when num1 is divided by 2
let resultado = num1 % 2;

// Check if the remainder is 0, indicating an even number
if (resultado === 0) {
    document.getElementById('myDiv1').innerHTML = "The number is Even";
} else {
    // The remainder is not 0, indicating an odd number
    document.getElementById('myDiv2').innerHTML = "The number is Odd";
}
