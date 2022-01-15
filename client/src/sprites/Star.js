export default class Star {
    // 240
    constructor(maximumHeight, parallax = null, parallaxSpeed = null) {
        this.node = document.createElement("div");
        this.node.classList.add("star");

        this.x = Math.random() * window.innerWidth;
        this.y = (Math.random() * window.innerHeight) - maximumHeight;
        this.node.style.left = this.x + "px";
        this.node.style.top = this.y + "px";

        this.size = Math.floor(Math.random() * 5 + 1);
        this.node.style.width = this.size + "px";
        this.node.style.height = this.size + "px";

        this.parallax = parallax;
        this.parallaxSpeed = parallaxSpeed;

        this.counter = 120;

        document.body.append(this.node);
    }

    tick() {
        let alive = true;
        this.counter--;

        if (this.parallax)  {
            this.x -= this.parallaxSpeed;
            this.node.style.left = this.x + "px";
        }

        if (this.counter == 0) {
            this.node.remove();
            alive = false;
        }
        
        return alive;
    }
}
