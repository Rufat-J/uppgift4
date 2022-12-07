
// ------------- UPPGIFT 1 ----------------------
let button = document.querySelector("button")

function myFunction() {
    button.textContent = "ON"
}

// --------------- UPPGIFT 2 -------------------

let button2 = document.getElementById("button2")

function removeBtn() {
    button2.remove()
}

// --------------- UPPGIFT 3 -------------------

const button3 = document.createElement("button")
button3.innerHTML = "Visa";
document.body.appendChild(button3)


const button4 = document.createElement("button")
button4.innerHTML = "Dölj";
document.body.appendChild(button4)

let title = document.getElementById("title")

button3.addEventListener("click", function() {
    title.style.display = "flex"
    
})

button4.addEventListener("click", function() {
    title.style.display = "none"
})

// ---------------- UPPGIFT 4 --------------------


function mySubmit() {
    alert("Hej")
}

// ---------------- UPPGIFT 5 ---------------------

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
