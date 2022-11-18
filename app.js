"use strict"

const Player1_Car = document.getElementById('jauge1')
const Player2_Car = document.getElementById('jauge2')
const Player1_Score = document.querySelector('#player1 p span')
const Player2_Score = document.querySelector('#player2 p span')
const PLayer_Winner = document.querySelector('#winner span')
const Overlay = document.getElementById('finish')
let myInterval;


let Player1_Count = 0
let Player2_Count = 0
let Player1_width = 0
let Player2_width = 0

let winner = ""

const finish = () =>{
    if (Player1_width === 100){
        winner = "Player1"
        return true
    } else if (Player2_width === 100){
        winner = "Player2"
        return true
    } else {
        return false
    }
}



document.addEventListener(('keydown'), (e) => {
    if (!finish()){
        StopInterval()
        let car = WhichCar(e)
        console.log(car)
        move(car)
        if (finish()){
            if (Player1_width === 100 || Player2_width === 100) {
                PLayer_Winner.innerHTML = `${winner}`
                Overlay.style.display = "flex"
                StopInterval()
            }
        }
    }
})
document.addEventListener(('keyup'), (e) => {
    if (!finish()){
        let car = WhichCar(e)
        Interval(car)
    } else {
        StopInterval()
    }

})


const WhichCar = (e) =>{
    if(e.key === 's'){
        return "Player1"
    } else if(e.key === 'k'){
        console.log("k pressed")
        return "Player2"
    }
}

const move = (car) =>{
    if (car === "Player1"){
        console.log('P1')
        Player1_Count += 1
        Player1_width += 1
        console.log(Player1_Count)
        Player1_Car.style.backgroundColor = `${ChangeColor(Player1_width)}`
        Player1_Car.style.width = `${Player1_width*0.75}vw`
        Player1_Score.innerHTML = `${Player1_width}`
    } else if (car === "Player2"){
        Player2_Count += 1
        Player2_width += 1
        console.log(Player2_Count)
        Player2_Car.style.backgroundColor = `${ChangeColor(Player2_width)}`
        Player2_Car.style.width = `${Player2_width*0.75}vw`
        Player2_Score.innerHTML = `${Player2_width}`
    }
}

const ChangeColor = (count) => {
    if (count <= 25){
        return "green"
    } else if (count >= 26 && count <= 50){
        return "yellow"
    } else if (count >= 51 && count <= 75){
        return "orange"
    } else if (count >= 76 && count <= 100){
        return "red"
    }
}



const go_back_to_the_hell = (a) =>{
    if (Player1_width >= 2 && key.code){
        Player1_width -= 2
        Player1_Car.style.width = `${Player1_width*0.75}vw`
        Player1_Score.innerHTML = `${Player1_width}`
    }
    if (Player2_width >= 2){
        Player2_width -= 2
        Player2_Car.style.width = `${Player2_width*0.75}vw`
        Player2_Score.innerHTML = `${Player2_width}`
    }

}

const Interval = (a) =>{ 
   myInterval = setInterval(go_back_to_the_hell(a), 200)
}

const StopInterval = () => {
    clearInterval(myInterval)
}

const reset = () =>{
    winner = ""
    Player1_width = 0
    Player2_width = 0
    Player1_Car.style.backgroundColor = "green"
    Player2_Car.style.backgroundColor = "green"
    Player1_Car.style.width = "0vw"
    Player2_Car.style.width = "0vw"
    Player1_Score.innerHTML = "0"
    Player2_Score.innerHTML = "0"
    Overlay.style.display = "none"
}

