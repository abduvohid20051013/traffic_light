let red = document.querySelector("#red")
let yellow = document.querySelector("#yellow")
let green = document.querySelector("#green")


function changeLights() {
    setTimeout(() => {
        redLight()
    }, 0)
    setTimeout(() => {
        yellowLight()
    }, 2000)
    setTimeout(() => {
        greenLight()
    }, 2800)
}

function redLight() {
    red.classList.remove('redColor')
    red.classList.add('red')
    setTimeout(() => {
        red.classList.remove('red')
        red.classList.add('redColor')
    }, 2000)
}

function yellowLight() {
    yellow.classList.remove('yellowColor')
    yellow.classList.add('yellow')
    setTimeout(() => {
        yellow.classList.remove('yellow')
        yellow.classList.add('yellowColor')
    }, 800)
}

function greenLight() {
    green.classList.remove('greenColor')
    green.classList.add('green')
    setTimeout(() => {
        green.classList.remove('green')
        green.classList.add('greenColor')
    }, 2000)
}

setInterval(changeLights, 4800)