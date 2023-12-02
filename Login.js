let btn = document.querySelector("#btn");
btn.addEventListener("click",(e)=>{
    e.preventDefault();
    const fullname= document.querySelector("#fn").value;
    let pwd = document.querySelector("#pwd").value;
    const email = document.querySelector("#email").value;
    let cnpwd = document.querySelector("#cnpwd").value;
    let fullnameerror = document.querySelector("#nameerror")
    let emailerror = document.querySelector("#emailerror")
    let pwderror = document.querySelector("#pwderror")
    let confrimerror = document.querySelector("#comerror")

    fullnameerror.textContent="";
    emailerror.textContent="";
    pwderror.textContent="";
    confrimerror.textContent="";

    let isValid = true;

    if(fullname.length<3){
        fullnameerror.textContent="Name should consists of minimum 3 characters"
        isValid=false;
    } else if(!isAlphanumeric(fullname)){
        fullnameerror.textContent="Name should contain alphabetical characters"
        isValid=false;
    } else if(!Hasnumberdigit(fullname)){
        fullnameerror.textContent="Name shoild not contain numeric digits and special characters at starting"
        isValid=false
    }

    if(email == ""){
        emailerror.textContent="Email id must be entered"
        isValid=false;
    }else if (!isValidEmailFormat(email)) {
        emailerror.textContent = "Invalid email format";
        isValid = false;
    }

    if(pwd.length<7 || pwd.length>15){
        pwderror.textContent="Must contain 7-15 characters"
        isValid=false;
    } else if(!hasSpecialChars(pwd)){
        pwderror.textContent = "should include atleast one special characters"
        isValid = false;
    } else if(!hasLowercase(pwd)){
        pwderror.textContent = "should include atleast one lowercase"
        isValid = false;
    }  else if(!hasUppercase(pwd)){
        pwderror.textContent = "should include atleast one uppercase"
        isValid = false;
    } else if(!hasAlphabetical(pwd)){
        pwderror.textContent = "should include atleast one alphabetical"
        isValid = false;
    } else if(!hasNumberDigits(pwd)){
        pwderror.textContent = "should include atleast one numerical values"
        isValid = false;
    }

    if(pwd!=cnpwd){
        confrimerror.textContent="Confirm password is wrong";
        isValid=false;
    }else{
        isValid=true;
        alert("Login successful!");

    }

    function isAlphanumeric(fullname) {
        for (const char of fullname) {
            if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
                return true;
            }
        }
        return false;
    }
    
    function Hasnumberdigit(fullname) {
        return (fullname.charAt(0) >= 'a' && fullname.charAt(0) <= 'z') || (fullname.charAt(0) >= 'A' && fullname.charAt(0) <= 'Z');
    }

    function isValidEmailFormat(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
    function hasSpecialChars(pwd) {
        const specialChars = "!@#$%^&*()_+{}[]:;<>,.?~\\/-";
        for (const char of pwd) {
            if (specialChars.includes(char)) {
                return true;
            }
        }
        return false;
    }
    function hasLowercase(pwd) {
        for (const char of pwd) {
            if (char >= 'a' && char <= 'z') {
                return true;
            }
        }
        return false;
    }
    function hasUppercase(pwd) {
        for (const char of pwd) {
            if (char >= 'A' && char <= 'Z') {
                return true;
            }
        }
        return false;
    }
    
    function hasNumberDigits(pwd) {
        for (const char of pwd) {
            if (char >= 0 && char <= 9) {
                return true;
            }
        }
        return false;
    }
    function hasAlphabetical(pwd) {
        for (const char of pwd) {
            if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
                return true;
            }
        }
        return false;
    }
    console.log(fullname);
    console.log(email);
    console.log(pwd);

})

document.addEventListener("DOMContentLoaded", ()=> {
    const cancel = document.querySelector("#can");

    cancel.addEventListener("click", (a) =>{
        a.preventDefault();

        const fullname = document.querySelector("#fn");
        const pwd = document.querySelector("#pwd");
        const email = document.querySelector("#email");
        const cnpwd = document.querySelector("#cnpwd");

        fullname.value = "";
        pwd.value = "";
        email.value = "";
        cnpwd.value = "";
    });
});


document.addEventListener("DOMContentLoaded", ()=> {
    const passwordInput = document.getElementById("pwd");
    const passwordConditions = document.getElementById("passwordConditions");
    const conditions = {
        length: document.querySelector("#length"),
        capital: document.querySelector("#capital"),
        small: document.querySelector("#small"),
        number: document.querySelector("#number")
    };

    passwordInput.addEventListener("input", ()=> {
        const pwd = passwordInput.value;

        conditions.length.style.textDecoration = pwd.length >= 8 && pwd.length <= 20 ? "line-through" : "none";
        conditions.capital.style.textDecoration = /[A-Z]/.test(pwd) ? "line-through" : "none";
        conditions.small.style.textDecoration = /[a-z]/.test(pwd) ? "line-through" : "none";
        conditions.number.style.textDecoration = /\d/.test(pwd) ? "line-through" : "none";
    });
});


document.addEventListener("DOMContentLoaded", ()=> {
    const fullNameInput = document.getElementById("fn");
    const nameConditions = document.getElementById("namecondition");
    const conditions = {
        num: document.getElementById("num"),
        special: document.getElementById("special"),
        empty: document.getElementById("empty"),
        namelength: document.getElementById("namelength")
    };

    fullNameInput.addEventListener("input", ()=> {
        const fullName = fn.value;

        conditions.num.style.textDecoration = /^[^0-9]/.test(fullName) ? "line-through" : "none";
        conditions.special.style.textDecoration = /^[^\W_]/.test(fullName) ? "line-through" : "none";
        conditions.empty.style.textDecoration = fullName.trim() !== "" ? "line-through" : "none";
        conditions.namelength.style.textDecoration = fullName.length >= 3 ? "line-through" : "none";
    });
});