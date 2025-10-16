var con = document.querySelector("#container")
var love = document.querySelector("i")

con.addEventListener("dblclick", function () {
    // console.log("HELLO")
    love.style.transform = "translate(-50% , -50%) scale(1)"
    love.style.color = "red"
    love.style.opacity = "0.8"

    // How to hide the Heart the again ? 
    setTimeout(() => {
        love.style.opacity = 0
    },1000)
    
    setTimeout(() => {
        love.style.transform = "translate(-50% , -50%) scale(0)"
    }, 3000);
})
