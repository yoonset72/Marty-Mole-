let currMoletile;
let currPlantTile;
let score = 0;
let gameOver = false;

window.onload = function() {
    SetGames();
}

function SetGames(){
    for (let i = 0; i < 9; i++){
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.style.backgroundImage = 'url("mario_pipe.png")';
        tile.style.width = '150 px';
        tile.style.height = '100 px';
        tile.addEventListener("click",selectTile);
        document.getElementById("board").appendChild(tile);
    }
    setInterval(setMole, 500);
    setInterval(setPlant, 550);
}

function getRandomTile() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole() {
    if (gameOver){
        return;
    }
    if(currMoletile) {
        currMoletile.innerHTML = "";
    }
    let mole = document.createElement("img");
    mole.src = "mmole.png"; 

    let num = getRandomTile();
    if (currPlantTile && currPlantTile.id == num) {
        return;
    }
    currMoletile = document.getElementById(num);
    currMoletile.appendChild(mole); 
}

function setPlant() {
    if (gameOver){
        return;
    }
    if (currPlantTile) {
        currPlantTile.innerHTML = "";
    }
    let plant = document.createElement("img");
    plant.src = "plant.png";

    let num = getRandomTile();

    if (currMoletile && currMoletile.id == num ){
        return;
    }
    currPlantTile = document.getElementById(num);
    currPlantTile.appendChild(plant);
}

function selectTile() {
    if(gameOver){
        return;
    }
    if ( this == currMoletile){
        score +=10;
        document.getElementById("score").innerText = score.toString();
    }
    else if (this == currPlantTile){
        document.getElementById("score").innerText = "GAME OVER: " + score.toString();
        gameOver = true;
    }

}




