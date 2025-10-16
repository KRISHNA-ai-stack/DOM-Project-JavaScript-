let h1 = document.querySelector("h1")
let button_x = document.querySelector("#add_frnd")
let button_y = document.querySelector("#remove_frnd")

let bro = 0 // intialy 

// Click when to add as frnd 
button_x.addEventListener("click", function () {
    if (bro == 0) {
        h1.style.color = "green"
        h1.innerText = "Friend 💗" 
        console.log(bro) // debug
        bro = 1 
    } else {
        h1.style.color = "red"
        h1.innerText = "Stranger 🤔"
        console.log(bro) // debug 
        bro = 0
    }
})

