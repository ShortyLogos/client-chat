export default class MovingParticle {

    constructor(parentNode, x, y) {
        this.alive = true;
        this.x = x + 50;
        this.y = y + 50;
   
        this.node = document.createElement("div");
        this.node.classList.add("UFO-moving-particle");

        this.node.style.left = this.x + "px";
        this.node.style.top = this.y + "px";
        this.node.style.transform = "translate(-50%, -50%)"

        document.body.append(this.node);

        setTimeout(() => {
            this.node.remove();
            this.alive = false;
        }, 2000)
    }

    tick() {
        return this.alive;
    }
}