const HollowButton=document.getElementById("HollowButton")
const HollowdisplayAns=document.getElementById("HollowdisplayAns")


HollowButton.addEventListener("click",()=>{
const HollowShape=document.getElementById("HollowShape").value
const HollowSize=Number(document.getElementById("HollowSize").value)

console.log(HollowShape);
console.log(HollowSize);

var HollowAns=""
var HollowSquare="Hollow Square" 
var HollowRightTriangleLeft="Hollow Right Triangle(Left)"
var HollowRightTriangleRight="Hollow Right Triangle(Right)"
var HollowRightTriangleTopLeft="Hollow Right Triangle(Top Left)"
var HollowRightTriangleTopRight="Hollow Right Triangle(Top Right)"
var HollowUpperTriangle="Hollow Upper Triangle"
var HollowLowerTriangle="Hollow Lower Triangle"
console.log(HollowAns);
var HollowHalf=parseInt(HollowSize/2)+1

if (HollowSquare.localeCompare(HollowShape)==0) {
    for (let i = 1; i <=HollowSize; i++) {
        for (let j = 1; j <=HollowSize; j++) {
if(i==1||i==HollowSize||j==1||j==HollowSize){
    HollowAns+=" *"
}else{
    HollowAns+="  "
}
   }
        HollowAns+="\n"
    }
    
    console.log(HollowAns);
    HollowdisplayAns.innerHTML=HollowAns
}

else if (HollowRightTriangleLeft.localeCompare(HollowShape)==0) {
    for (let i = 1; i <=HollowSize; i++) {
        for (let j = 1; j <=HollowSize; j++) {
if(j==1||i==HollowSize||i==j){
    HollowAns+=" *"
}else{
    HollowAns+="  "
}
   
        }
        HollowAns+="\n"
    }
    
    console.log(HollowAns);
    HollowdisplayAns.innerHTML=HollowAns
}
else if (HollowRightTriangleRight.localeCompare(HollowShape)==0) {
    for (let i = 1; i <=HollowSize; i++) {
        for (let j = 1; j <=HollowSize; j++) {
if(i==HollowSize||j==HollowSize||(i+j==HollowSize+1)){
    HollowAns+=" *"
}else{
    HollowAns+="  "
}
   
        }
        HollowAns+="\n"
    }
    
    console.log(HollowAns);
    HollowdisplayAns.innerHTML=HollowAns
}
else if (HollowRightTriangleTopLeft.localeCompare(HollowShape)==0) {
    for (let i = 1; i <=HollowSize; i++) {
        for (let j = 1; j <=HollowSize; j++) {
if(i==1||j==1||(i+j==HollowSize+1)){
    HollowAns+=" *"
}else{
    HollowAns+="  "
}
   
        }
        HollowAns+="\n"
    }
    
    console.log(HollowAns);
    HollowdisplayAns.innerHTML=HollowAns
}
else if (HollowRightTriangleTopRight.localeCompare(HollowShape)==0) {
    for (let i = 1; i <=HollowSize; i++) {
        for (let j = 1; j <=HollowSize; j++) {
if(i==1||j==HollowSize||(i==j)){
    HollowAns+=" *"
}else{
    HollowAns+="  "
}
 }
        HollowAns+="\n"
    } 
    console.log(HollowAns);
    HollowdisplayAns.innerHTML=HollowAns
}

else if (HollowUpperTriangle.localeCompare(HollowShape)==0) {
    for (let i = 1; i <=HollowSize; i++) {
        for (let j = 1; j <=HollowSize; j++) {
if(i<=HollowHalf&&(i==1||i==j||i+j==HollowSize+1)){
    HollowAns+=" *"
}else{
    HollowAns+="  "
}
 }
        HollowAns+="\n"
    } 
    console.log(HollowAns);
    HollowdisplayAns.innerHTML=HollowAns
}
else if (HollowLowerTriangle.localeCompare(HollowShape)==0) {
    for (let i = 1; i <=HollowSize; i++) {
        for (let j = 1; j <=HollowSize; j++) {
if(i>=HollowHalf&&(i==HollowSize||i==j||i+j==HollowSize+1)){
    HollowAns+=" *"
}else{
    HollowAns+="  "
}
 }
        HollowAns+="\n"
    } 
    console.log(HollowAns);
    HollowdisplayAns.innerHTML=HollowAns
}
})