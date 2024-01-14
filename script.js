var first=document.querySelector(".Firsthalf")
var front1=document.querySelector(".Firsthalf>#front")
var front2=document.querySelector(".Secondhalf>#front")
var back1=document.querySelector(".Firsthalf>#back")
var back2=document.querySelector(".Secondhalf>#back")
var img1=document.querySelector(".Firsthalf>#front>img")
var img2=document.querySelector(".Secondhalf>#front>img")
front1.addEventListener("mouseover",function(){
    img1.style.height="15vh";
    img1.style.width="15vh";
    back1.style.height="45vh";
    back1.style.width="25vw";
    back1.style.fontSize="8vh";
    back1.style.paddingTop="15vh";
    back1.style.position="relative";
    back1.style.top="-15vh";
})
front2.addEventListener("mouseover",function(){
    img2.style.height="15vh";
    img2.style.width="15vh";
    back2.style.height="45vh";
    back2.style.width="25vw";
    back2.style.fontSize="8vh";
    back2.style.paddingTop="15vh";
    back2.style.position="relative";
    back2.style.top="-15vh";
})
back1.addEventListener("mouseout",function(){
    front1.style.display="flex";
    back1.style.height="0vh";
    back1.style.widtht="0vw";
    back1.style.fontSize="0vh";
    back1.style.paddingTop="0vh";
    img1.style.height="60vh";
    img1.style.width="25vw";
})
back2.addEventListener("mouseout",function(){
    front2.style.display="flex";
    back.style.height="0vh";
    back2.style.widtht="0vw";
    back2.style.fontSize="0vh";
    back2.style.paddingTop="0vh";
    img2.style.height="60vh";
    img2.style.width="20vw";
})