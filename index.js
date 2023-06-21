const cal=document.querySelector(".calculate")
cal.addEventListener("click",calPi)
function calPi(){
    const p=Math.PI;
    document.querySelector(".result").innerHTML=p
}
