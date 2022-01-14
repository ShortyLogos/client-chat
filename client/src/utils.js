import Star from "./sprites/Star.js";

export const generateStars = (spriteList, frequency, maximumHeight) => {
    if (Math.random() < frequency) {
        spriteList.push(new Star(maximumHeight));
    }
}