var main = document.querySelector("#main_div")
var crsr = document.querySelector(".cursor")

main.addEventListener("mousemove",function(bro){
    // console.log("HEY")  DEBUG
    // console.log(bro)
    // console.log(bro.x)
    // console.log(bro.y)
    crsr.style.left = bro.x + "px" 
    crsr.style.top = bro.y + "px" 
})