const items = document.getElementsByClassName("item");

let previous = '';

for(let i = 0; i<=items.length; i++){
    items[i].addEventListener("mouseenter", function(e){
        let name = getRandomString(5);
        var style = document.createElement('style');
        style.id = name;
        style.innerHTML = `.${name} { traansform:translate(1); background-color:${randomHexColor()}; }`;
        document.getElementsByTagName('head')[0].appendChild(style);
        if((items[i].classList.length>1)){
            previous = items[i].classList[1];
            document.getElementById(previous).remove();

        }
        items[i].classList.toggle(name);
        items[i].classList.remove(previous);
    })
}

function randomHexColor(){
    let randomNumber = Math.floor((Math.random() * 16777215));
    let randomHex    = randomNumber.toString(16);
    let randomHexColor = randomHex.padStart(6, 0);
    return '#'+randomHexColor;
}

function getRandomString(length) {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var result = '';
    for ( var i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}