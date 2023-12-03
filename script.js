const playBoard = document.querySelector(".play-board");

let foodX, foodY;
let snakeX = 5, snakeY = 10;
let snakeBody = []
let velocityX = 0, velocityY = 0;

const changeFoodPosition = () => {
    // this passing a random 0 thru 30 as food positiion
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;

}

const changeDirection = (e) => {
    if(e.key === "ArrowUp") {
        velocityX = 0;
        velocityY = -1;
    } else if (e.key === "ArrowDown") {
        velocityX = 0;
        velocityY = 1;
    } else if (e.key === "ArrowLeft") {
        velocityX = -1;
        velocityY = 0;
    } else if (e.key === "ArrowRight") {
        velocityX = 1;
        velocityY = 0;
    }
    
}

const initGame = () => {
    let htmlMarkup = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`
    
    // making sure if the snake hit the food 
    if(snakeX === foodX && snakeY === foodY) {
        changeFoodPosition();
        snakeBody.push([foodX, foodY]); // pushing the food position to body array 
        console.log(snakeBody);
    }
    // updates snake head posiiton based on the current velocity
    snakeX += velocityX;
    snakeY += velocityY;

    for (let i= 0; i < snakeBody.length; i++){
         htmlMarkup += `<div class="head" style="grid-area:${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`
    
    }
    playBoard.innerHTML = htmlMarkup;
}
   
changeFoodPosition();
setInterval(initGame, 125);
document.addEventListener("keydown", changeDirection);