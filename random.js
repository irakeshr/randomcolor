
let colors= document.querySelector("h1");
let box= document.querySelector(".box");
let main= document.querySelector(".main");
let but= document.querySelector(".button");
let page_switcher=document.querySelector(".page_switcher");
let loader=document.querySelector(".loader");
 
 function onclick1(){
let hesh="#";
let color="1234567890ABCDEF";
for(i=0; i<6; i++){
    hesh+=color[Math.floor(Math.random()*16)]  ;
}
colors.innerHTML=hesh;
main.style.background=hesh;
box.style.background=hesh;
but.style.background=hesh;
   
 };
   onclick1();
//    button event
  but.addEventListener("click",onclick1);
//   loader.style.display="none";

  page_switcher.onclick =()=>{
    loader.style.display="flex";

  }

  window.addEventListener("load",function(){
    loader.style.display="none";
  })