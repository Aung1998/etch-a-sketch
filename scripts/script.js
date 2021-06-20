const items = document.getElementsByClassName("item");
const grid = document.getElementById("grid");

function colorGrid(){
    for(let i = 0; i<items.length; i++){
        items[i].addEventListener("mouseenter", function(e){
           items[i].style.backgroundColor = `${randomHexColor()}`;
        })
    }
}

function randomHexColor(){
    let randomNumber = Math.floor((Math.random() * 16777215));
    let randomHex    = randomNumber.toString(16);
    let randomHexColor = randomHex.padStart(6, 0);
    return '#'+randomHexColor;
}

function createGrid(squares) {
    grid.style.setProperty('--rows', squares);
    grid.style.setProperty('--cols', squares);
    for (c = 0; c < (squares * squares); c++) {
      let cell = document.createElement("div");
      grid.appendChild(cell).className = "item";
    }
}

createGrid(16);
colorGrid();