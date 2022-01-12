import {signin} from './chat-api';
import Star from './sprites/Star.js';
import UFO from './sprites/UFO.js';

export let mouseX;
export let mouseY;
export let spriteList = [];
let body;
let bodyBgImagePosX = 100;

window.addEventListener("load", () => {
    body = document.querySelector("body");

    // background-image: url(../img/background/background-night-sky.png);
    // background-repeat: repeat-x;
    // background-color: var(--color-dark);

    body.style.backgroundImage = "url(./img/background/background-night-sky.png)";
    body.style.backgroundRepeat = "repeat-x";

    body.onmousemove = event => {
        mouseX = event.x;
        mouseY = event.y;
    }
    
    let root = document.querySelector(":root");
    let rootStyle = getComputedStyle(root);

    let mainColor = rootStyle.getPropertyValue('--color-main');
    let secondaryColor = rootStyle.getPropertyValue('--color-secondary');
    let paleColor = rootStyle.getPropertyValue('--color-pale');
    let darkColor = rootStyle.getPropertyValue('--color-dark');
    let accentColor = rootStyle.getPropertyValue('--color-accent');

    let title = document.querySelector(".client-welcome-title");

    const bouncingTitle = () => {
        setTimeout(() => {
            title.style.textShadow = "0px 4px " + accentColor;
            title.style.letterSpacing = "2px";
        }, 90)
        setTimeout(() => {
            title.style.letterSpacing = "3px";
        }, 180)
        setTimeout(() => {
            title.style.textShadow = "0px 2px " + accentColor;
            title.style.letterSpacing = "2px";
            bouncingTitle();
        }, 270)
    }
   
    spriteList.push(new UFO());

    bouncingTitle();
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