const collection = document.getElementsByClassName("animate");

function addOnClick(event){
    event.target.classList.add("animation-onclick");
}

function addOnFininsh(event){
    event.target.classList.remove("animation-onclick");
}




Array.from(collection).forEach(function (element) {
    element.onclick = addOnClick;
    element.onanimationend = addOnFininsh;
});