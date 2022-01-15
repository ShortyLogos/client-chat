export default class Raindrop {

    constructor(speed, angle, maximumHeight) {
        this.speed = speed;
        this.maximumHeight = (window.innerHeight - maximumHeight);

        this.node = document.createElement("div");
        this.node.classList.add("raindrop");

        if (angle > 0) {
            this.node.style.transform = "rotate(" + angle + "deg)";
        }

        this.x = Math.random() * (window.innerWidth * 1.25);
        this.y = this.node.offsetTop;

        this.node.style.left = this.x + "px";

        document.body.append(this.node);
    }

    tick() {
        let alive = true;

        this.x -= this.speed;
        this.y += this.speed;

        if (this.y > this.maximumHeight) {
            this.y = this.maximumHeight;
            alive = false;
            this.node.remove();
        }

        this.node.style.left = this.x + "px";
        this.node.style.top = this.y + "px";
        
        return alive;
    }
}