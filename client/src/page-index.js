import {signin} from './chat-api';
import Star from './sprites/Star.js';
import UFO from './sprites/UFO.js';

export let mouseX;
export let mouseY;
let spriteList = [];
let body;
let bodyBgImagePosX = 100;

window.addEventListener("load", () => {
    body = document.querySelector("body");
    body.onmousemove = event => {
        mouseX = event.x;
        mouseY = event.y;
    }
   
    spriteList.push(new UFO());

    tick();

    document.querySelector("form").onsubmit = function () {
        return signin(this);
    }
});

const tick = () => {
    bodyBgImagePosX--;
    body.style.backgroundPosition = bodyBgImagePosX + "px " + "100%";

    if (Math.random() < 0.2) {
        spriteList.push(new Star());
    }

    for (let i = 0; i < spriteList.length; i++) {
        let alive = spriteList[i].tick();
        if (!alive) {
            spriteList.splice(i, 1);
            i--;
        }
    }

    window.requestAnimationFrame(tick);
}