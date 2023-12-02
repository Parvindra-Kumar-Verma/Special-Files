const btn = document.getElementById("btn");
const output = document.getElementById("output");

btn.addEventListener("click", () => {
    const selectedProgram = document.getElementById("list").value;
    const inputText = document.getElementById("inputText").value;
    let result = "";

    if (selectedProgram === "count") {
        result = countCharacters(inputText);
    } else if (selectedProgram === "odd") {
        result = convertOddToUppercase(inputText);
    } else if (selectedProgram === "ascii") {
        result = convertEvenToASCII(inputText);
    } else if (selectedProgram === "uppercase") {
        result = convertToUppercase(inputText);
    } else if (selectedProgram === "lowercase") {
        result = convertToLowercase(inputText);
    } else if (selectedProgram === "reverse") {
        result = reverseString(inputText);
    } else if (selectedProgram === "palindrome") {
        result = checkPalindrome(inputText);
    } else {
        result = "Please select a valid option.";
    }

    output.textContent = result;
});


function countCharacters(inputText) {
    return `Entered character count is ${inputText.length}`;
}

function convertOddToUppercase(inputText) {
    let result = "";
    for (let i = 0; i < inputText.length; i++) {
        if (i % 2 === 0) {
            result += inputText[i].toUpperCase();
        } else {
            result += inputText[i];
        }
    }
    return `The convertion of odd character to uppercase is ${result}`;
}

function convertEvenToASCII(inputText) {
    let result = "";
    for (let i = 0; i < inputText.length; i++) {
        if (i % 2 === 1) {
            result += inputText.charCodeAt(i) + " ";
        } else {
            result += inputText[i];
        }
    }
    return `The convertion of even character to ASCII value is ${result}`;
}

function convertToLowercase(inputText) {
    return `The convertion of uppercase to lowercase is ${inputText.toLowerCase()}`;
}

function convertToUppercase(inputText) {
    return `The convertion lowercase to uppercase is ${inputText.toUpperCase()}`;
}

function reverseString(inputText) {
    return `The reverse of entered string is ${inputText.split("").reverse().join("")}`;
}

function checkPalindrome(inputText) {
    const reversedText = inputText.split("").reverse().join("");
    if (inputText === reversedText) {
        return " Entered string is palindrome!";
    } else {
        return "Entered string is not a palindrome.";
    }
}