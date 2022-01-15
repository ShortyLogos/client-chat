import Star from "./sprites/Star.js";

export const refreshSpriteList = list => {
    for (let i = 0; i < list.length; i++) {
        let alive = list[i].tick();
        if (!alive) {
            list.splice(i, 1);
            i--;
        }
    }
}

export const generateStars = (spriteList, frequency, maximumHeight, parallax = null, parallaxSpeed = null) => {
    if (Math.random() < frequency) {
        spriteList.push(new Star(maximumHeight, parallax, parallaxSpeed));
    }
}

export class ToggleButton {

    constructor(node) {
        this.toggle = false;
        this.button = document.querySelector(node);

        this.button.onclick = () => {
            this.toggle = !this.toggle;

            if (this.button.classList.contains("btn-toggle-up")) {
            this.button.classList.replace("btn-toggle-up", "btn-toggle-down");
            }
            else {
                this.button.classList.replace("btn-toggle-down", "btn-toggle-up");
            }

            console.log(this.button.toggle);
        }
    }
}