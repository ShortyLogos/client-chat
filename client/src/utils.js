import Star from "./sprites/Star.js";
import Raindrop from "./sprites/Raindrop.js";
import Snowflake from "./sprites/Snowflake.js";
import Bird from "./sprites/Bird.js";

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

export const generateRain = (spriteList, frequency, speed, angle, maximumHeight, windForce = null) => {
    if (Math.random() < frequency) {
        spriteList.push(new Raindrop(speed, angle, maximumHeight, windForce));
    }
}

export const generateSnow = (spriteList, frequency, speed, maximumHeight, windForce = null) => {
    if (Math.random() < frequency) {
        spriteList.push(new Snowflake(speed, maximumHeight, windForce));
    }
}

export const generateBirds = (spriteList, frequency, x, y, speedX) => {
    if (Math.random() < frequency) {
        spriteList.push(new Bird(x, y, speedX));
    }
}

export class ToggleButton {

    constructor(node) {
        this.toggle = false;
        this.button = document.querySelector(node);

        this.button.onclick = () => this.toggleNow();
    }

    toggleNow() {
        this.toggle = !this.toggle;

        if (this.button.classList.contains("btn-toggle-up")) {
        this.button.classList.replace("btn-toggle-up", "btn-toggle-down");
        }
        else {
            this.button.classList.replace("btn-toggle-down", "btn-toggle-up");
        }

        return this.toggle;
    }
}