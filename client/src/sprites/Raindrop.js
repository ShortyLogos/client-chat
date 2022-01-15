export default class Raindrop {

    constructor(speed, angle, maximumHeight, windForce = null) {
        this.node = document.createElement("div");
        this.node.classList.add("raindrop");

        this.speed = speed;
        this.windForce = windForce;
        this.maximumHeight = (window.innerHeight - maximumHeight);

        if (angle > 0) {
            this.node.style.transform = "rotate(" + angle + "deg)";
        }

        this.x = Math.random() * (window.innerWidth * 1.25);
        this.y = -20;

        this.size = Math.floor(Math.random() * 15 + 3);
        this.node.style.height = this.size + "px";

        let opacity = 1 - Math.random();
        this.node.style.opacity = opacity;

        console.log(this.y);

        this.node.style.left = this.x + "px";
        this.node.style.top = this.y + "px";

        document.body.append(this.node);
    }

    tick() {
        let alive = true;

        this.x -= this.windForce;
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