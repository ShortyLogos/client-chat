import {signin} from './chat-api';
import UFO from './sprites/UFO.js';
import { generateStars, refreshSpriteList } from './utils.js';

export let mouseX;
export let mouseY;
export let spriteList = [];
let body;
let bodyBgImagePosX = 100;

window.addEventListener("load", () => {
    document.querySelector("form").onsubmit = function () {
        return signin(this);
    }
    
    body = document.querySelector("body");

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
});

const tick = () => {
    bodyBgImagePosX--;
    body.style.backgroundPosition = bodyBgImagePosX + "px " + "100%";

    generateStars(spriteList, 0.25, 240, true, 1);

    refreshSpriteList(spriteList);


    window.requestAnimationFrame(tick);
}