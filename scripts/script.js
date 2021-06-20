const items = document.getElementsByClassName("item");

for(let i = 0; i<items.length; i++){
    items[i].addEventListener("mouseenter", function(e){
       items[i].style.backgroundColor = `${randomHexColor()}`;
    })
}

function randomHexColor(){
    let randomNumber = Math.floor((Math.random() * 16777215));
    let randomHex    = randomNumber.toString(16);
    let randomHexColor = randomHex.padStart(6, 0);
    return '#'+randomHexColor;
}