import TiledImage from "../TiledImage.js";

export default class Bird {
    constructor(x, y, speedX) {
        let colCount = 8;
        let rowCount = 4;
        let refreshDelay = 100;
        let loopColumns = true;
        let scale = 1.5;

        this.node = document.createElement("div");
        document.body.append(this.node);

        this.tiledImage = new TiledImage("./img/sprites/bird.png", colCount, rowCount, refreshDelay, loopColumns, scale, this.node);

        this.tiledImage.changeRow(3);
        this.tiledImage.changeMinMaxInterval(3,6);

        this.x = x;
        this.y = y;
        this.speedX = speedX;

        this.node.classList.add("bird-still");
    }

    tick() {
        let alive = true;

        this.x += this.speedX; 

        this.tiledImage.tick(this.x, this.y);

        if (this.x > (window.innerWidth + 50)) {
            this.node.remove();
            alive = false;
        } 

        return alive;
    }
}