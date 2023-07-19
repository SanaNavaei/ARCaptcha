const button = document.getElementById("button");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const mouse = document.getElementById("app2");

button.addEventListener("click", clickHandler);
button2.addEventListener("dblclick", dbclickHandler);
mouse.addEventListener("mouseover", mouseoverHandler);
mouse.addEventListener("mouseout", mouseoutHandler);
button3.addEventListener("mouseup", mouseUpHandler);
button3.addEventListener("mousedown", mouseDownHandler);

function clickHandler() {
    const app = document.getElementById("app");
    app.innerHTML += "Button is clicked. ";
}

function dbclickHandler() {
    const app = document.getElementById("app");
    app.innerHTML += "Button is double clicked. ";
}

function mouseoverHandler() {
    const app = document.getElementById("app");
    app.innerHTML += "h1 is mouseover. ";
}

function mouseoutHandler() {
    const app = document.getElementById("app");
    app.innerHTML += "h1 is mouseout. ";
}

function mouseUpHandler() {
    const app = document.getElementById("app");
    app.innerHTML += "Mouse Up. ";
}

function mouseDownHandler() {
    const app = document.getElementById("app");
    app.innerHTML += "Mouse Down. ";
}
