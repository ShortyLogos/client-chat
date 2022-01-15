export default class Snowflake {

    constructor(speed, maximumHeight, windForce = null) {
        this.node = document.createElement("div");
        this.node.classList.add("snowflake");

        this.speed = speed;
        this.windForce = windForce;
        this.maximumHeight = (window.innerHeight - maximumHeight);

        this.x = Math.random() * (window.innerWidth * (1 + windForce));
        this.y = this.node.offsetTop;

        this.size = Math.floor(Math.random() * 3 + 2);
        this.node.style.width = this.size + "px";
        this.node.style.height = this.size + "px";

        let opacity = 1 - Math.random();
        this.node.style.opacity = opacity;

        this.node.style.left = this.x + "px";

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
        else if (this.x == -5) {
            alive = false;
            this.node.remove();
        }

        this.node.style.left = this.x + "px";
        this.node.style.top = this.y + "px";
        
        return alive;
    }
}