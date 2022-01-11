export default class UFO {

    constructor() {
        this.speed = 1;
        this.velocity = 0.2;

        this.node = document.createElement("div");
        this.node.classList.add("UFO");

        this.x = Math.random() * window.innerWidth;
        if (this.x <= 0 || this.x >= window.innerWidth - 100)
            this.x = 50;

        this.y = (Math.random() * window.innerHeight);
        if (this.y <= 26 || this.y >= window.innerHeight - 100)
            this.y = 50;
    
        this.node.style.left = this.x + "px";
        this.node.style.top = this.y + "px";
        
        document.body.append(this.node);
        console.log(window.innerWidth);
        console.log(window.innerHeight);
        console.log("x : ", this.x);
        console.log("y : ", this.y);
    }

    tick() {
        this.speed += this.velocity;
        this.x += this.speed;
        this.y += this.speed;
        
        this.node.style.left = this.x + "px";
        this.node.style.top = this.y + "px";
        console.log("x : ", this.x);
        console.log("y : ", this.y);
    }
}