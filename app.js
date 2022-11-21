const Player1_Car = document.getElementById('jauge1')
const Player2_Car = document.getElementById('jauge2')
const Player1_Score = document.querySelector('#player1 p span')
const Player2_Score = document.querySelector('#player2 p span')
const PLayer_Winner = document.querySelector('#winner span')
const Overlay = document.getElementById('finish')
let T1;
let T2;
let TimeoutP1;
let TimeoutP2;


let Player1_Count = 0
let Player2_Count = 0

let winner = ""

const finish = () =>{
    if (Player1_Count === 100){
        winner = "Player1"
        return true
    } else if (Player2_Count === 100){
        winner = "Player2"
        return true
    } else {
        return false
    }
}

document.addEventListener(('keydown'), (e) => {
    if (!finish()){
        car = WhichCar(e)
        console.log(car)
        move(car)
        if (finish()){
            if (Player1_Count === 100 || Player2_Count === 100) {
                PLayer_Winner.innerHTML = `${winner}`
                Overlay.style.display = "flex"
            }
        }
        if(car === "Player1"){
            clearTimeout(TimeoutP1)
            clearTimeout(T1)
            T1 = setTimeout(() => back_P1(), 2000)
        }else if(car === "Player2"){
            clearTimeout(TimeoutP2)
            clearTimeout(T2)
            T2 = setTimeout(() => back_P2(), 2000)
        }
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
        console.log(Player1_Count)
        Player1_Car.style.backgroundColor = `${ChangeColor(Player1_Count)}`
        Player1_Car.style.width = `${Player1_Count*0.73}vw`
        Player1_Score.innerHTML = `${Player1_Count}`
    } else if (car === "Player2"){
        Player2_Count += 1
        console.log(Player2_Count)
        Player2_Car.style.backgroundColor = `${ChangeColor(Player2_Count)}`
        Player2_Car.style.width = `${Player2_Count*0.73}vw`
        Player2_Score.innerHTML = `${Player2_Count}`
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

const reset = () =>{
    winner = ""
    Player1_Count = 0
    Player2_Count = 0
    Player1_Car.style.backgroundColor = "green"
    Player2_Car.style.backgroundColor = "green"
    Player1_Car.style.width = "0vw"
    Player2_Car.style.width = "0vw"
    Player1_Score.innerHTML = "0"
    Player2_Score.innerHTML = "0"
    Overlay.style.display = "none"
}





const back_P1= () => {
        TimeoutP1 = setTimeout(() => {
            if (Player2_Count > 0){
            Player1_Count -= 1
            Player1_Car.style.width = `${Player1_Count*0.73}vw`
            Player1_Score.innerHTML = `${Player1_Count}`
            back_P1();
            }
        }, 200);
}

const back_P2= () => {
    TimeoutP2 = setTimeout(() => {
        if (Player2_Count > 0){
            Player2_Count -= 1
            Player2_Car.style.width = `${Player2_Count*0.73}vw`
            Player2_Score.innerHTML = `${Player2_Count}`
            back_P2();
        }
    }, 200);
}