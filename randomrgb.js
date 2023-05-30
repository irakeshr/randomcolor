let colors= document.querySelector("h1");
let box= document.querySelector(".box");
let main= document.querySelector(".main");
let but= document.querySelector(".button");
let page_switcher=document.querySelector(".page_switcher");
let loader=document.querySelector(".loader");
 
 
 function onclick1(){
let hesh="rgb(";
let color="1234567890";
for(i=0; i<3; i++){
    hesh+=color[Math.floor(Math.random()*10)]  ;
}
hesh+=",";
for(i=0; i<3; i++){
    hesh+=color[Math.floor(Math.random()*10)]  ;
}
hesh+=",";
for(i=0; i<3; i++){
    hesh+=color[Math.floor(Math.random()*10)]  ;
}
hesh+=")"

colors.innerHTML=hesh;
main.style.background=hesh;
box.style.background=hesh;
but.style.background=hesh;
 
   
 };
   onclick1();
//    button event
  but.addEventListener("click",onclick1);
//   loader.style.display="none";

  window.addEventListener("load",function(){
    loader.style.display="none";
  })