const items = document.getElementsByClassName("item");
const grid = document.getElementById("grid");

function colorGrid(color='colorful'){
    for(let i = 0; i<items.length; i++){
        items[i].addEventListener("mouseenter", function(e){
            if (color != 'white'){
                color = randomHexColor(); // create random color for each grid item
            }
           items[i].style.backgroundColor = `${color}`;
        })
    }
}

function removeChildNode(parent){
    while (parent.firstChild) {
        parent.removeChild(parent.lastChild);
    }
}

function randomHexColor(){
    let randomNumber = Math.floor((Math.random() * 16777215));
    let randomHex    = randomNumber.toString(16);
    let randomHexColor = randomHex.padStart(6, 0);
    return '#'+randomHexColor;
}

// create square x squard grid.
function createGrid(squares) {
    removeChildNode(grid); //remove previous Grid with alll colored
    grid.style.setProperty('--rows', squares);
    grid.style.setProperty('--cols', squares);
    for (c = 0; c < (squares * squares); c++) {
      let cell = document.createElement("div");
      grid.appendChild(cell).className = "item";
    }
    colorGrid(); // add Color function on new items
}

createGrid(16); // create default 16 x 16 grid