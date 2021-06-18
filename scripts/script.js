const items = document.getElementsByClassName("item");
for(let i = 0; i<=items.length; i++){
    items[i].addEventListener("mouseenter", function(e){
        console.log(e);
    })
}