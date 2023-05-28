let num1=Math.random();
let body=document.querySelector("body");
let colors= document.querySelector("h1");
let box= document.querySelector(".box");
let main= document.querySelector(".main");
let but= document.querySelector("button");

 
 function onclick1(){
let hesh="#";
let color="1234567890ABCDEF";
for(i=0; i<6; i++){

    hesh+=color[Math.floor(Math.random()*16)]  ;
    console.log(hesh);

}
colors.innerHTML=hesh;
main.style.background=hesh;
box.style.background=hesh;
but.style.background=hesh;
   
 };
  onclick1();
  