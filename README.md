# Even or Odd Number Checker

This is a simple JavaScript program that checks whether a given number is even or odd. The program prompts the user to enter a number and then determines if it is even or odd based on the remainder when divided by 2.

## Usage

1. Open the `index.html` file in a web browser or follow this link: https://evenoddnumberchecker.netlify.app/
2. The program will prompt you to enter a number.
3. Enter a number of your choice.
4. The program will display the result on the webpage, indicating whether the number is even or odd.

## Code Explanation

```javascript
let num1 = prompt("Give me a number");
resultado = num1 % 2;
```

The program prompts the user to enter a number and stores it in the variable `num1`. The remainder of `num1` divided by 2 is calculated and stored in the variable `resultado`.

```javascript
if (resultado === 0){
    document.getElementById('myDiv1').innerHTML = "The number is Even";
}else{
    document.getElementById('myDiv2').innerHTML = "The number is Odd";
}
```

The program checks if `resultado` is equal to 0. If it is, it means that the number is even, and the message "The number is Even" is displayed on the webpage. If `resultado` is not equal to 0, it means that the number is odd, and the message "The number is Odd" is displayed on the webpage.
