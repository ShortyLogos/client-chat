import {signin} from './chat-api';
import Star from './sprites/Star.js';

let spriteList = [];

let backgroundImage;
let posX = 100;

window.addEventListener("load", () => {
    backgroundImage = document.querySelector(".wrapper-index");

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
        if (!spriteList[i].tick()) {
            spriteList.splice(i, 1);
            i--;
        }
    }

    window.requestAnimationFrame(tick);
}