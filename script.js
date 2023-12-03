const playBoard = document.querySelector(".play-board");

let foodX= 13, foodY = 10;

const changeFoodPosition = () => {
    // this passing a random 0 thru 30 as food positiion
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;

}

const initGame = () => {
    let htmlMarkup =`<div class="food" style="grid-area:${foodY}/${foodX}"></div>`
    playBoard.innerHTML = htmlMarkup;
}

initGame();