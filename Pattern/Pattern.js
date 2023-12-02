const SolidButton=document.getElementById("SolidButton")
const SoilddisplayAns=document.getElementById("SoilddisplayAns")


SolidButton.addEventListener("click",()=>{
const SolidShape=document.getElementById("SolidShape").value
const SolidSize=Number(document.getElementById("SolidSize").value)

console.log();(SolidShape);
console.log();(SolidSize);

var Square="Square" 
var RightTriangleLeft="Right Triangle(Left)"
var RightTriangleRight="Right Triangle(Right)"
var RightTriangleTopLeft="Right Triangle(Top Left)"
var RightTriangleTopRight="Right Triangle(Top Right)"
var VerticalLine="Vertical Line"
var HorizontalLine="Horizontal Line"
var VerticalLineAndHorizontalLine="Vertical Line And Horizontal Line"
var Swastik="Swastik"

var SolidAns=""
var SolidHalf=parseInt(SolidSize/2)+1

if (Square.localeCompare(SolidShape)==0) {
    for (let i = 1; i <=SolidSize; i++) {
        for (let j = 1; j <=SolidSize; j++) {
          
     SolidAns+=" *"
        }
        SolidAns+="\n"
    }
    
    console.log();
    SoilddisplayAns.innerHTML=SolidAns
}

else if (RightTriangleLeft.localeCompare(SolidShape)==0) {
    for (let i = 1; i <=SolidSize; i++) {
        for (let j = 1; j <=i; j++) {

     SolidAns+=" *"
        }
        SolidAns+="\n"
    }
    
    console.log(SolidAns);
    SoilddisplayAns.innerHTML=SolidAns
}
else if (RightTriangleRight.localeCompare(SolidShape)==0) {
    for (let i = 1; i <=SolidSize; i++) {
        for (let j = SolidSize; j >i; j--) {

     SolidAns+="  "
        }
        for (let j = 1; j <=i; j++) {

            SolidAns+=" *"
               }
        SolidAns+="\n"
        
    }
    SoilddisplayAns.innerHTML=SolidAns
    console.log(SolidAns);
}
else if (RightTriangleTopLeft.localeCompare(SolidShape)==0) {
    for (let i = 1; i <=SolidSize; i++) {
        for (let j = SolidSize; j >=i; j--) {

     SolidAns+=" *"
        }
        SolidAns+="\n"
      
    }
    SoilddisplayAns.innerHTML=SolidAns
    console.log(SolidAns);
}
else if (RightTriangleTopRight.localeCompare(SolidShape)==0) {
    for (let i = 1; i <=SolidSize; i++) {
        for (let j = 1; j <i; j++) {

     SolidAns+="  "
        }
        for (let j = SolidSize; j >=i; j--) {

            SolidAns+=" *"
               }
        SolidAns+="\n"
      
    }
    SoilddisplayAns.innerHTML=SolidAns
    console.log(SolidAns);
}

else if (VerticalLine.localeCompare(SolidShape)==0) {
    for (let i = 1; i <=SolidSize; i++) {
        for (let j = 1; j <=SolidSize; j++) {
if(j==SolidHalf){
    SolidAns+=" *"
}else{
    SolidAns+="  "
}
 }
        SolidAns+="\n"
    } 
    console.log(SolidAns);
    SoilddisplayAns.innerHTML=SolidAns
}
else if (HorizontalLine.localeCompare(SolidShape)==0) {
    for (let i = 1; i <=SolidSize; i++) {
        for (let j = 1; j <=SolidSize; j++) {
if(i==SolidHalf){
    SolidAns+=" *"
}else{
    SolidAns+="  "
}
 }
     SolidAns+="\n"
    } 
    console.log(SolidAns);
    SoilddisplayAns.innerHTML=SolidAns
}
else if (VerticalLineAndHorizontalLine.localeCompare(SolidShape)==0) {
    for (let i = 1; i <=SolidSize; i++) {
        for (let j = 1; j <=SolidSize; j++) {
if(i==SolidHalf||j==SolidHalf){
    SolidAns+="*"
}else{
    SolidAns+="&nbsp"
}
 }
     SolidAns+="\n"
    } 
    console.log(SolidAns);
    SoilddisplayAns.innerHTML=SolidAns
}

else if (Swastik.localeCompare(SolidShape)==0) {
    for (let i = 1; i <=SolidSize; i++) {
        for (let j = 1; j <=SolidSize; j++) {
if((i==SolidHalf||j==SolidHalf)||(i==1&&j>=SolidHalf)||(i==SolidSize&&j<=SolidHalf)||(j==1&&i<=SolidHalf)||(j==SolidSize&&i>=SolidHalf)){
    SolidAns+=" *"
}else{
    SolidAns+="  "
}
 }
        SolidAns+="\n"
    } 
    console.log(SolidAns);
    SoilddisplayAns.innerHTML=SolidAns
}
})