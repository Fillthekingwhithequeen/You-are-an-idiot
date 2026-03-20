let el = document.getElementById("idiot");

let x = 100;
let y = 100;
let dx = 4;
let dy = 4;

function move() {
    x += dx;
    y += dy;

    if (x < 0 || x + el.offsetWidth > window.innerWidth) {
        dx = -dx;
    }
    if (y < 0 || y + el.offsetHeight > window.innerHeight) {
        dy = -dy;
    }

    el.style.left = x + "px";
    el.style.top = y + "px";

    requestAnimationFrame(move);
}

move();
