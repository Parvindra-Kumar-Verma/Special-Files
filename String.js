//count of characters
function count(){
    var str="rajesh";
    var count =0;
    for(let i=0; i<str.length;i++){
        // str.charAt(i);
        count++
    }
    console.log(count);
    }
    // count();
    
    ////convert the odd character to uppercase
    function odd(){
        var str="shwetha";
        var b="";
        for(let i=0;i<str.length;i++){
            if(i%2==0){
                b=b+str.charAt(i);
            }else{
                var c=str.charCodeAt(i)-32;   ////this gives ascii value of i
                b=b+String.fromCharCode(c)   /////converting from ascii to charater
            }
        }
        console.log(b);
    }
    // odd();
    
    // var arr="abc"
    // console.log(arr.charCodeAt());
    // console.log(String.fromCharCode(65));
    
    
    ///convert the even character to ASCI value
    function even(){
        var str="shwetha";
        var b="";
        for(let i=0; i<str.length; i++){
            if(i%2==0){
                b= b + " "+str.charCodeAt(i);
            }
            // else{
            //     b=b+ str.charAt(i)
            // }
        }
        console.log(b );
    }
    // even();
    
    function uppercasewithoutinbuilt(){
    var str="shwetha"
    var b=""
    for(let i=0; i<str.length; i++){
        var c= str.charCodeAt(i)-32;
        b=b+String.fromCharCode(c);
    }
    console.log(b);
    }
    // uppercasewithoutinbuilt();
    
    ////convert the numbers from 65-75 to the string
    function numbertostring(){
        var b = "";
        for(let i=65; i<=75; i++){
            b = b+ " " + String.fromCharCode(i);
        }
        console.log(b);
    }
    // numbertostring();
    
    ////convert the numerical characters from the String = " DeV3l0p3R"
    function string(){
        var str = "DeV3l0p3R";
        var b = "";
        for(let i=0; i<str.length; i++){
            if((str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90) || (str.charCodeAt(i)>=97 && str.charCodeAt(i)<=122)){
                b = b+str.charAt(i);
            }
        }
        console.log(b);
    }
    // string();
    
    
    var str = "kayakanae ista";
    // console.log(str.replace('k','n'));
    
    function revers(){
        var str = "java";
        var rev = str.split('').reverse().join('');
        console.log(rev);
    }
    // revers();
    
    ////without using inbuilt method
    function revrs(){
        var str = "shwetha s pateel";
        var rev = "";
        for(let i=str.length-1; i>=0; i--){
            rev = rev + str.charAt(i);
        }
        console.log(rev);
    }
    // revrs();
    
    ////check given string is palindrome or not
    
    function palin(){
        var str = "malayalam";
        var rev = "";
        for(let i=str.length-1; i>=0; i--){
            rev = rev + str.charAt(i);
        }
        if(str==rev){
            console.log(`${str} is palindrome`);
        }else{
            console.log(`${str} is not a palindrome`);
        }
    }
    // palin();
    
    ////print vowels in the string
    function vowl(){
        var str = "hotel";
        for(let i=0; i<str.length; i++){
            var ch = str.charAt(i);
            if(ch=='a' || ch=='e' || ch=='i' || ch=='o' || ch=='u'){
                console.log(ch);
            }
        }
    }
    // vowl();