import {register} from './chat-api';

let body;
let bodyBgImagePosX = 100;

window.addEventListener("load", () => {
    document.querySelector("form").onsubmit = function () {
        return register(this);
    }
    
    body = document.querySelector("body");

    body.style.backgroundColor = "#42121f";
    body.style.backgroundImage = "url(./img/background/background-sunset-sky.png)";
    body.style.backgroundRepeat = "repeat-x";

    let root = document.querySelector(":root");
    let rootStyle = getComputedStyle(root);

    let mainColor = rootStyle.getPropertyValue('--color-main');
    let secondaryColor = rootStyle.getPropertyValue('--color-secondary');
    let paleColor = rootStyle.getPropertyValue('--color-pale');
    let darkColor = rootStyle.getPropertyValue('--color-dark');
    let accentColor = rootStyle.getPropertyValue('--color-accent');
    
    root.style.setProperty('--color-main', '#a4443d');
    root.style.setProperty('--color-secondary', '#862f28');
    root.style.setProperty('--color-pale', '#985f5c');
    root.style.setProperty('--color-dark', '#42121f');
    root.style.setProperty('--color-accent', '#F7800C');

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

    tick();
})

const tick = () => {
    bodyBgImagePosX -= 1.5;
    body.style.backgroundPosition = bodyBgImagePosX + "px " + "100%";

    // if (Math.random() < 0.2) {
    //     spriteList.push(new Star());
    // }

    // for (let i = 0; i < spriteList.length; i++) {
    //     let alive = spriteList[i].tick();
    //     if (!alive) {
    //         spriteList.splice(i, 1);
    //         i--;
    //     }
    // }

    window.requestAnimationFrame(tick);
}
