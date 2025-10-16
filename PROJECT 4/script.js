let button = document.querySelector("#div_1 button")
let div = document.querySelector("#div_1") 
let h1 = document.querySelector("h1")
let flag = 0
button.addEventListener("click",function(){
    if(flag == 0) {
        div.style.backgroundColor = "black"   
        h1.style.color = "white"
        h1.textContent = "Dark 🌜"

        flag = 1
    } else {
        if (flag == 1) {
            div.style.backgroundColor = "white"
            h1.style.color = "black"
            h1.textContent = "Light 🌞"
            flag = 0 
        }
    }
})
