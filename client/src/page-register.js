import {register} from './chat-api';
import PopUpBox from './sprites/PopUpBox';
import { changeTheme, generateBirds, generateStars, refreshSpriteList } from './utils';

let body;
let bodyBgImagePosX = 100;

let spriteList = [];

window.addEventListener("load", () => {
    document.querySelector("form").onsubmit = function () {
        return register(this);
    }
    
    body = document.querySelector("body");

    body.style.backgroundImage = "url(./img/background/background-sunset-sky.png)";
    body.style.backgroundRepeat = "repeat-x";

    changeTheme('#a4443d', '#862f28', '#985f5c', '#42121f', '#F7800C');

    let sleepingBoy = document.querySelector("#sleeping-boy");
    let backgroundFrame = 1;

    // Premier changement hors de la fonction pour empêcher une impression d'animation gelée lors du chargement de la page
    sleepingBoy.style.backgroundImage = "url(./img/background/ness_sleeps" + backgroundFrame + ".jpg)";
    const boySleeping = () => {
        setTimeout(() => {
            backgroundFrame = backgroundFrame == 1 ? 2 : 1;
            sleepingBoy.style.backgroundImage = "url(./img/background/ness_sleeps" + backgroundFrame + ".jpg)";
            boySleeping();
        }, 400)
    }
    boySleeping();
    
    let gift = document.querySelector("#gift");
    let giftOpened = false;

    gift.onclick = () => {
        if (!giftOpened) {
            let sound = new Audio('./sounds/cookie.wav');
            sound.play();

            let text = "You found a secret! Here's a cookie. Enjoy.";
            spriteList.push(new PopUpBox(gift, text, 12, 1.1, 1500, 245))

            gift.style.backgroundImage = "url(./img/sprites/gift2.png)";
            giftOpened = true;
        }
    }

    let btnGoBack = document.querySelector("#go-back");
    btnGoBack.onclick = () => {
        window.location.href = "index.html";
    }

    tick();
})

const tick = () => {
    bodyBgImagePosX -= 1.5;
    body.style.backgroundPosition = bodyBgImagePosX + "px " + "100%";

    generateStars(spriteList, 0.25, 240, true, 1);

    generateBirds(spriteList, 0.015, -50, Math.random() * (window.innerHeight - 80) - 30, Math.floor(Math.random() * 2 + 2));

    refreshSpriteList(spriteList);

    window.requestAnimationFrame(tick);
}
