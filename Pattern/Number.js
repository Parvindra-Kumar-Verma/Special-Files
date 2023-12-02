const NumberButton=document.getElementById("NumberButton")
const NumberdisplayAns=document.getElementById("NumberdisplayAns")

NumberButton.addEventListener("click",()=>{
const NumberShape=document.getElementById("NumberShape").value
const NumberSize=Number(document.getElementById("NumberSize").value)

console.log(NumberShape);
console.log(NumberSize);


var zero="0";
var one="1";
var two="2";
var three="3"
var four ="4";
var five="5";
var six ="6";
var seven ="7";
var eight ="8";
var nine ="9";

var NumberAns=""
var NumberHalf=parseInt(NumberSize/2)+1

if (zero.localeCompare(NumberShape)==0) {
    for (let i = 1; i <=NumberSize; i++) {
        for (let j = 1; j <=NumberSize; j++) {
if(i==1||i==NumberSize||j==1||j==NumberSize){
    NumberAns+=" *"
}else{
    NumberAns+="  "
}
   }
        NumberAns+="\n"
    }
    
    console.log(NumberAns);
    NumberdisplayAns.innerHTML=NumberAns
}

if (one.localeCompare(NumberShape)==0) {
    for (let i = 1; i <=NumberSize; i++) {
        for (let j = 1; j <=NumberSize; j++) {
if(j==5){
    NumberAns+=" *"
}else{
    NumberAns+="  "
}
   }
        NumberAns+="\n"
    }
    
    console.log(NumberAns);
    NumberdisplayAns.innerHTML=NumberAns
}

if (two.localeCompare(NumberShape)==0) {
    for (let i = 1; i <=NumberSize; i++) {
        for (let j = 1; j <=NumberSize; j++) {
if(i==NumberHalf||i==1||i==NumberSize||(j==NumberSize&&i<=NumberHalf)||(j==1&&i>=NumberHalf)){
    NumberAns+=" *"
}else{
    NumberAns+="  "
}
   }
        NumberAns+="\n"
    }
    
    console.log(NumberAns);
    NumberdisplayAns.innerHTML=NumberAns
}
if (three.localeCompare(NumberShape)==0) {
    for (let i = 1; i <=NumberSize; i++) {
        for (let j = 1; j <=NumberSize; j++) {
if(i==NumberHalf||i==1||i==NumberSize||j==NumberSize){
    NumberAns+=" *"
}else{
    NumberAns+="  "
}
   }
        NumberAns+="\n"
    }
    
    console.log(NumberAns);
    NumberdisplayAns.innerHTML=NumberAns
}

if (four.localeCompare(NumberShape)==0) {
    for (let i = 1; i <=NumberSize; i++) {
        for (let j = 1; j <=NumberSize; j++) {
if(i==NumberHalf||j==NumberSize||(j==1&&i<=NumberHalf)){
    NumberAns+=" *"
}else{
    NumberAns+="  "
}
   }
        NumberAns+="\n"
    }
    
    console.log(NumberAns);
    NumberdisplayAns.innerHTML=NumberAns
}
if (five.localeCompare(NumberShape)==0) {
    for (let i = 1; i <=NumberSize; i++) {
        for (let j = 1; j <=NumberSize; j++) {
if(i==NumberHalf||i==1||i==NumberSize||(j==NumberSize&&i>=NumberHalf)||(j==1&&i<=NumberHalf)){
    NumberAns+=" *"
}else{
    NumberAns+="  "
}
   }
        NumberAns+="\n"
    }
    
    console.log(NumberAns);
    NumberdisplayAns.innerHTML=NumberAns
}
if (six.localeCompare(NumberShape)==0) {
    for (let i = 1; i <=NumberSize; i++) {
        for (let j = 1; j <=NumberSize; j++) {
if(i==NumberHalf||i==1||i==NumberSize||(j==NumberSize&&i>=NumberHalf)||(j==1)){
    NumberAns+=" *"
}else{
    NumberAns+="  "
}
   }
        NumberAns+="\n"
    }
    
    console.log(NumberAns);
    NumberdisplayAns.innerHTML=NumberAns
}

if (seven.localeCompare(NumberShape)==0) {
    for (let i = 1; i <=NumberSize; i++) {
        for (let j = 1; j <=NumberSize; j++) {
if((i==1&&j>=NumberHalf)||j==NumberSize){
    NumberAns+=" *"
}else{
    NumberAns+="  "
}
   }
        NumberAns+="\n"
    }
    
    console.log(NumberAns);
    NumberdisplayAns.innerHTML=NumberAns
}

if (eight.localeCompare(NumberShape)==0) {
    for (let i = 1; i <=NumberSize; i++) {
        for (let j = 1; j <=NumberSize; j++) {
if(i==NumberHalf||i==1||i==NumberSize||(j==NumberSize)||(j==1)){
    NumberAns+=" *"
}else{
    NumberAns+="  "
}
   }
        NumberAns+="\n"
    }
    
    console.log(NumberAns);
    NumberdisplayAns.innerHTML=NumberAns
}

if (nine.localeCompare(NumberShape)==0) {
    for (let i = 1; i <=NumberSize; i++) {
        for (let j = 1; j <=NumberSize; j++) {
if(i==NumberHalf||i==1||i==NumberSize||(j==NumberSize)||(j==1&&i<=NumberHalf)){
    NumberAns+=" *"
}else{
    NumberAns+="  "
}
   }
        NumberAns+="\n"
    }
    
    console.log(NumberAns);
    NumberdisplayAns.innerHTML=NumberAns
}
})