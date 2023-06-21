const cal=document.querySelector(".calculate")
cal.addEventListener("click",calPi)
function calPi(){
    const p=3.14;
    console.log(Math.floor(p));
    document.querySelector(".result").innerHTML=p
}
