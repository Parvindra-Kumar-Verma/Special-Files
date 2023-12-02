document.getElementById("btn").addEventListener("click", function () {
    var selectedProgram = document.getElementById("list").value;
    var num = parseInt(document.getElementById("num").value);
    var outputDiv = document.getElementById("output");
    var answer = "";

    if (selectedProgram === "fibonacci") {
        answer = generateFibonacciSeries(num);
    } else if (selectedProgram === "factorial") {
        answer = calculateFactorial(num);
    } else if (selectedProgram === "primenumber") {
        answer = isPrimeNumber(num);
    } else if (selectedProgram === "palindrome") {
        answer = isPalindrome(num);
    } else if (selectedProgram === "happynumber") {
        answer = isHappyNumber(num);
    } else if (selectedProgram === "reverse") {
        answer = reverseNumber(num);
    } else if (selectedProgram === "singledigit") {
        answer = sumTillSingleDigit(num);
    } else if (selectedProgram === "count") {
        answer = countDigits(num);
    } else if (selectedProgram === "even") {
        answer = isEven(num);
    } else if (selectedProgram === "odd") {
        answer = isOdd(num);
    }
     else if (selectedProgram === "tables") {
        answer = generateNumberTables(num);
    } else if (selectedProgram === "armstrong") {
        answer = isArmstrongNumber(num);
    } else if (selectedProgram === "strong") {
        answer = isStrongNumber(num);
    } else if (selectedProgram === "perfect") {
        answer = isPerfectNumber(num);
    } else if (selectedProgram === "primefactor") {
        answer = findPrimeFactors(num);
    } else if (selectedProgram === "binary") {
        answer = decimalToBinary(num);
    } else if (selectedProgram === "factor") {
        answer = findFactors(num);
    }

    outputDiv.innerHTML = "<p>" + answer + "</p>";
});

function generateFibonacciSeries(n) {
    var fibSeries = [0, 1];
    for (var i = 2; i < n; i++) {
        fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
    }
    return fibSeries.join(" , " );
}

function calculateFactorial(n) {
    var fact =1;
    for(var i=n; i>=1; i--){
        fact = fact * i
    }
    return `Factorial of entered number is ${fact}`;
}

function isPrimeNumber(n) {
    var flag = true;
    for(let i=2; i<n; i++){
        if(n%i==0){
            flag = false;
            break;
        }
    }
    if(flag==true){
        return ("Entered number is prime number");
    }else{
        return ("Entered number is not prime number");
    }
}

function isPalindrome(no) {
    var copy=no;
    var r = 0;
    while(no!=0){
        var rem = no%10;
        r = (r*10)+rem;
        no=parseInt(no/10);
    }
    console.log(r);  
    if(copy==r){
        return ("Entered number is palindrome");
    }else{
        return ("Entered number is not a palindrome");
    }
}

function isHappyNumber(no) {
    while(no>9){
        no=num(no)
    }
    if(no==1 || no==7){
        return ("Entered number is happy number");
    }else{
        return ("Entered number is not a happy number");
    }
    function num(no){
        var sum = 0;
        while(no!=0){
        var rem = no%10;
        sum = sum + rem;
        no=parseInt(no/10);
        
    }
    return sum;
    }   
}

function reverseNumber(no) {
    var r = 0;
    while(no!=0){
        var rem = no%10;
        r = (r*10) + rem;
        no = parseInt(no/10);
    }
    return ("The reverse of entered number is " +r);
}

function sumTillSingleDigit(no) {
    var no = 119;
    while(no>9){
        no = num(no);
    }
    return("The sum till getting single digit of entered number is "+no);
    function num(no){
        var sum = 0;
        while(no!=0){
            var rem = no%10;
            sum = sum+rem;
            no=parseInt(no/10);
        }
        return sum;
    }
}

function countDigits(no) {
    var count = 0;
    while(no!=0){
        no=parseInt(no/10);
        count++
    }
    return("The count of entered number is "+count);
}

function isEven(no) {
    var sum = 0;
    for(var i = 1; i<=no; i++){
        if(i%2==0){
            sum = sum + i;
        }
    }
    return ("The even sum of entered number is "+sum);
}

function isOdd(no) {
    var sum = 0;
    for(var i = 1; i<=no; i++){
        if(i%2!=0){
            sum = sum + i
        }
    }
    return ("The even sum of entered number is "+sum);
}

function generateNumberTables(n) {
    var tables = "";
    for (var i = 1; i <= 10; i++) {
        tables += n + " x " + i + " = " + (n * i) + "<br>";
    }
    return tables;
}

function isArmstrongNumber(no) {
    var no1=no;
    var copy=no;
    var sum = 0;
    var count = 0;
    while(no1!=0){
        no1=parseInt(no1/10);
        count++;
    }
    while(no!=0){
        var rem = no%10;
        sum = sum + Math.pow(rem,count);
        // sum +=Math.pow(rem,count);
        no=parseInt(no/10);
    }
    if(sum==copy){
        return (`${copy} is Amrstrong number`);
    }else{
        return (`${copy} is not a Amrstrong number`);
    }
}

function isStrongNumber(no) {
    var copy=no;
    var sum=0;
    while(no!=0){
        var rem = no%10;
        var fact = 1;
        for(var i=rem; i>=1; i--){
            fact = fact *i;
        }
        sum = sum + fact;
        no=parseInt(no/10);
    }
    if(copy==sum){
        return (`${copy} is strong number`);
    }else{
        return (`${copy} is not a strong number`);
    }
}

function isPerfectNumber(no) {
    var copy=no;
    var sum = 0;
    for(var i=1; i<=no/2; i++){
        if(no%i==0){
            sum = sum+i;
        }
    }
    if(no==sum){
        return (`${copy} is perfect number`);
    }else{
        return (`${copy} is not a perfect number`);
    }
}

function findPrimeFactors(no) {
    var primeFactors = [];
    for (var j = 2; j <= no / 2; j++) {
        if (no % j === 0) {
            if (isPrimeNumber(j)) {
                primeFactors.push(j);
            }
        }
    }

    if (primeFactors.length > 0) {
        return "Prime factors: " + primeFactors.join(", ");
    } else {
        return "No prime factors found.";
    }
}


function decimalToBinary(no) {
    var str="";
    while(no!=0){
        var rem = no%2;
        str = rem+str;
        no=parseInt(no/2);
    }
    return ("The Binary digit of entered number is "+str);
}

function findFactors(n) {
    var factors = "";
    for (var i = 1; i <= n; i++) {
        if (n % i === 0) {
            factors += i + " ";
        }
    }
    return ("The factors of entered number is "+factors);
}