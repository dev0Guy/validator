const collection = document.getElementsByClassName("animate");
const [json_copy_icon] = document.getElementsByClassName("copy-json");
const [schema_copy_icon] = document.getElementsByClassName("copy-schema");
const [json_card] = document.getElementsByClassName("json-card");
const [schema_card] = document.getElementsByClassName("schema-card");
const [typing_text] = document.getElementsByClassName("typewrite");

function activateAnimtionClass(element, className) {
    element.onclick = (event) => { event.target.classList.add(`${className}`) };
    element.onanimationend = (event) => { event.target.classList.remove(`${className}`) };
}

function onCtrlC(elem, child) {
    let ctrlActive = false;
    elem.addEventListener('keyup', event => {
        if (event.key == 'Control') ctrlActive = false;
    })

    elem.addEventListener('keydown', event => {
        if (event.key == 'Control') ctrlActive = true;
        if (ctrlActive && event.code == 'KeyC') {
            child.classList.add("animation-onclick");
        }
    })

    elem.addEventListener('keydown', event => {
        if (event.key == 'Control') ctrlActive = true;
        if (ctrlActive && event.code == 'KeyC') {
            child.classList.add("animation-onclick");
        }
    })
}

Array.from(collection).forEach(function (element) {
    activateAnimtionClass(element, "animation-onclick");
});

onCtrlC(json_card, json_copy_icon);
onCtrlC(schema_card, schema_copy_icon);

console.log(typing_text);
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap ">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    var timer = setTimeout(function() {
        that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};