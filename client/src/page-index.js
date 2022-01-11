import {signin} from './chat-api';
import Star from './sprites/Star.js';
import UFO from './sprites/UFO.js';
let spriteList = [];

let backgroundImage;
let posX = 100;

window.addEventListener("load", () => {
    backgroundImage = document.querySelector(".wrapper-index");

    spriteList.push(new UFO());

    tick();

    document.querySelector("form").onsubmit = function () {
        return signin(this);
    }
});

const tick = () => {
    posX --;
    backgroundImage.style.backgroundPosition = posX + "px " + "100%";

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