import {signin} from './chat-api';

let backgroundImage;
let posX = 100;

window.addEventListener("load", () => {

    backgroundImage = document.querySelector(".wrapper");

    tick();
    console.log("Hello");

    document.querySelector("form").onsubmit = function () {
        return signin(this);
    }
});

const tick = () => {
    posX --;

    backgroundImage.style.backgroundPosition = posX + "px " + "100%";

    console.log(posX);


    window.requestAnimationFrame(tick);
}
