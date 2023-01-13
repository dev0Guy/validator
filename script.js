const collection = document.getElementsByClassName("animate");
const [json_copy_icon] =  document.getElementsByClassName("copy-json");
const [schema_copy_icon] =  document.getElementsByClassName("copy-schema");
const [json_card] = document.getElementsByClassName("json-card");
const [schema_card] = document.getElementsByClassName("schema-card");

function activateAnimtionClass(element, className){
    element.onclick = (event) => { event.target.classList.add(`${className}`)};
    element.onanimationend = (event) => { event.target.classList.remove(`${className}`)};
}

function onCtrlC(elem, child){
    let ctrlActive = false;
    elem.addEventListener('keyup', event => {
        if (event.key == 'Control') ctrlActive = false;
    })

    elem.addEventListener('keydown', event => {
        if (event.key == 'Control') ctrlActive = true;
        if (ctrlActive && event.code == 'KeyC'){
            child.classList.add("animation-onclick");
        }
    })

    elem.addEventListener('keydown', event => {
        if (event.key == 'Control') ctrlActive = true;
        if (ctrlActive && event.code == 'KeyC'){
            child.classList.add("animation-onclick");
        }
    })
}


Array.from(collection).forEach(function (element) {
    activateAnimtionClass(element,"animation-onclick");
});

onCtrlC(json_card, json_copy_icon);
onCtrlC(schema_card, schema_copy_icon);




