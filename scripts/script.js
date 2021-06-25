const items = document.getElementsByClassName("item");
const grid = document.getElementById("grid");
const btn = document.getElementById("btn");
const slider = document.getElementById("size");

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
function createGrid(squares=16) {
    removeChildNode(grid); //remove previous Grid with alll colored
    grid.style.setProperty('--rows', squares);
    grid.style.setProperty('--cols', squares);
    for (c = 0; c < (squares * squares); c++) {
      let cell = document.createElement("div");
      grid.appendChild(cell).className = "item";
    }
    colorGrid(); // add Color function on new items
}

createGrid(); // create default 16 x 16 grid

btn.addEventListener('click', function(e){
    slider.value = 16;
    createGrid();
})

slider.addEventListener('mouseup', function(){
    createGrid(this.value);
})