function fibonacci(){
    var fib1=0; 
    var fib2=1;
    var fib3=0;
    console.log(` ${fib1}`)
    console.log(` ${fib2}`);
    for(var i=2; i<=10; i++){
        fib3 = fib1 + fib2;
        console.log(` ${fib3} `);
        fib1=fib2;
        fib2=fib3;
    }
    }
    // fibonacci();
    
    function factorial(){
        var a=5;
        var fact =1;
        for(var i=a; i>=1; i--){
            fact = fact * i
        }
        console.log(fact);
    }
    // factorial();
    
    function prime() {
        var no=7;
        var flag = true;
        for(var i=2; i<no; i++){
            if(no%i==0){
                flag = flase;
                break;
            }
        }
        if(flag==true){
            console.log("It is prime number");
        }else{
            console.log("It is not prime number");
        }
    }
    // prime();
    
    function palindrome(){
        var no=12321;
        var copy=no;
        var r = 0;
        while(no!=0){
            var rem = no%10;
            r = (r*10)+rem;
            no=parseInt(no/10);
        }
        console.log(r);  
        if(copy==r){
            console.log("It is palindrome");
        }else{
            console.log("Not a palindrome");
        }
    }
    // palindrome();
    
    function happynumber(){
        var no = 19;
        while(no>9){
            no=num(no)
        }
        if(no==1 || no==7){
            console.log("happy number");
        }else{
            console.log("Not a happy number");
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
    // happynumber();
    
    function reverse(){
            var no = 76895;
            var r = 0;
            while(no!=0){
                var rem = no%10;
                r = (r*10) + rem;
                no = parseInt(no/10);
            }
            console.log(r);
    }
    // reverse();
    
    function signledigit(){
            var no = 119;
            while(no>9){
                no = num(no);
            }
            console.log(no);
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
    // signledigit();
    
    function count(){
        var no = 245367;
        var count = 0;
        while(no!=0){
            no=parseInt(no/10);
            count++
        }
        console.log(count);
    }
    // count();
    
    function even(){
        var sum = 0;
        for(var i = 1; i<=10; i++){
            if(i%2==0){
                sum = sum + i;
            }
        }
        console.log(sum);
    }
    // even();
    
    function odd(){
        var sum = 0;
        for(var i = 1; i<=10; i++){
            if(1%2!=0){
                sum = sum + i
            }
        }
        console.log(sum);
    }
    // odd();
    
    function swap(){
        var a = 20; 
        var b = 15;
        console.log(`${a}  ${b}  ===> before swap`);
        var temp = a;
        a = b;
        b = temp;
        console.log(`${a}  ${b}  ===> after swap`);
    }
    // swap();
    
    function swap1(){
        var a=14;
        var b=12;
        console.log(`${a}  ${b}  ===> before swap`);
        var c = a-b;
        b = b+c;
        a = b-c;
        console.log(`${a}  ${b}  ===> after swap`);
    }
    // swap1();
    
    function tables(){
    var num = prompt("Enter the integer number")
    var ans=0;
    for(var i=1; i<=10; i++){
        ans = num * i;
        // console.log(`${num} * ${i} = ${ans}`);
        document.write(`${num} * ${i} = ${ans}`);
        document.write("<br>")
    }
    }
    // tables();
    
    // var no=prompt("Enter the integer number");
    function armstrong(no){
        // var no = 153;
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
            console.log(`${copy} is amrstrong number`);
        }else{
            console.log(`${copy} is not a amrstrong number`);
        }
    }
    // armstrong(no);
    
    // var no= prompt("Enter the integer value");
    function strong(no){
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
            console.log(`${copy} is strong number`);
        }else{
            console.log(`${copy} is not a strong number`);
        }
    }
    // strong(no);
    
    // var no = prompt("Enter the integer number");
    function perfect(no){
        var copy=no;
        var sum = 0;
        for(var i=1; i<=no/2; i++){
            if(no%i==0){
                sum = sum+i;
            }
        }
        if(no==sum){
            console.log(`${copy} is perfect number`);
        }else{
            console.log(`${copy} is not a perfect number`);
        }
    }
    // perfect(no);
    
    
    // var no = prompt("Enter the integer number");
    function primefactor(no){
        for(var j=1; j<=no/2; j++){
            if(no%j==0);
            factor(j);
        }
        function factor(no){
        var copy=no;
        var flag=true;
        for(var i=2; i<no; i++){
            if(no%i==0){
                flag=false;
                break;
            }
        }
        if(flag==true){
            console.log(`${copy} is prime factor`);
        }else{
            console.log(`${copy} is not a prime factor`);
        }
    }
    }
    // primefactor(no);
    
    
    function binary(){
        var no =4;
        var str="";
        while(no!=0){
            var rem = no%2;
            str = rem+str;
            no=parseInt(no/2);
        }
        console.log(str);
    }
    // binary();
    
    function Averagenum(){
    var sum =0;
    count=0;
    for(let i=1; i<=10; i++){
        count++;
        sum = sum + i;
    }
    var a = sum/count;
    console.log(a);
    }
    // Averagenum();
    
    
    function sortwithoutinbuilt(){
        var arr = [2,5,6,8,4,3,1,9,7,0]; 
        for(var i=0; i<arr.length; i++){
            for(var j=i+1; j<arr.length; j++){
                if(arr[i]>arr[j]){
                    var temp = arr[i];
                    arr[i]=arr[j];
                    arr[j]=temp;
                }
            }
        }
        console.log(arr);
    }
    // sortwithoutinbuilt();
    
    function addwithoutplusoperator(a,b){
        while(b!=0){
            let carry = a & b;
            a = a^b;
            b = carry << 1;
        }
        return a;
    }
    var num = 6;
    var num1 = 4;
    sum = addwithoutplusoperator(num, num1);
    // console.log(sum);
    
    function convertuppercase(){
        var a= "shwetha";
        var b = a.toUpperCase();
        console.log(b);
    }
    // convertuppercase();

    function factors(){
        var no=6;
        for(let i=1; i<=no/2; i++){
            if(no%i==0){
                console.log(i);
            }
        }
    }
    // factors();
    
    
    function withoutplusand3rdvar(a,b){
        a=a*b;
        b=a/b;
        a=a/b;
        console.log(a);
        console.log(b);
    }
    // withoutplusand3rdvar(4,5);
    
    // below program is using array destructuring
    var a=5;
    var b=4;
    [b,a]=[a,b]
    console.log(a);
    console.log(b);

    