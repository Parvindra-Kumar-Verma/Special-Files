let btn=document.querySelector("#btn");
btn.addEventListener("click",()=>{
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const usernameError = document.getElementById("usernameError");
    const passwordError = document.getElementById("passwordError");
    
    usernameError.textContent = "";
    passwordError.textContent = "";

    let isValid = true;

    if (username.length < 3) {
        usernameError.textContent = "Username must contain min 3 characters";
        isValid = false;
    }else if(!isAlphanumeric(username)){
        usernameError.textContent = "Username must contain alphabetiacl characters";
        isValid = false;
    }else if(!hasNumberDigits(username)){
        usernameError.textContent = "Username cannot have numeric digits and special characters at starting";
        isValid = false;
    }

    if (password.length < 6 || password.length > 20 ) {
        passwordError.textContent = "must contain 6 to 20 characters long";
        isValid = false;
    }else if( !hasSpecialChars(password)){
        passwordError.textContent = "should include special characters"
        isValid = false;
    } else if(!hasLowercase(password)){
        passwordError.textContent = "should include min one lowercase"
        isValid = false;
    }  else if(!hasUppercase(password)){
        passwordError.textContent = "should include min one uppercase"
        isValid = false;
    } else if(!hasAlphabetical(password)){
        passwordError.textContent = "should include alphabetical"
        isValid = false;
    } else if(!hasNumberDigits(password)){
        passwordError.textContent = "should include numerical values"
        isValid = false;
    }

    if (isValid) {
        alert("Login successful!");
    }


function hasSpecialChars(password) {
    const specialChars = "!@#$%^&*()_+{}[]:;<>,.?~\\/-";
    for (const char of password) {
        if (specialChars.includes(char)) {
            return true;
        }
    }
    return false;
}

function hasLowercase(password) {
    for (const char of password) {
        if (char >= 'a' && char <= 'z') {
            return true;
        }
    }
    return false;
}

function hasUppercase(password) {
    for (const char of password) {
        if (char >= 'A' && char <= 'Z') {
            return true;
        }
    }
    return false;
}

function hasNumberDigits(password) {
    for (const char of password) {
        if (char >= 0 && char <= 9) {
            return true;
        }
    }
    return false;
}

function hasAlphabetical(password) {
    for (const char of password) {
        if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
            return true;
        }
    }
    return false;
}

function isAlphanumeric(username) {
    for (const char of username) {
        if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
            return true;
        }
    }
    return false;
}

function hasNumberDigits(username) {
    return (username.charAt(0) >= 'a' && username.charAt(0) <= 'z') || (username.charAt(0) >= 'A' && username.charAt(0) <= 'Z');
}

})