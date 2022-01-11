import {signin} from './chat-api';
import Vue from 'vue'
import Stars from './Stars.vue'

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

    window.requestAnimationFrame(tick);
}