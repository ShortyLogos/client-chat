export default class Fridge  {

    constructor() {
        this.node = document.createElement("div");
        this.node.classList.add("fridge");

        this.x = Math.random() * window.innerWidth - 32;
        if (this.x <= 0) { 
            this.x = 64;
        }

        this.y = -50;

        this.landingY = window.innerHeight - Math.random() * 120 -  60;
    
        this.node.style.left = this.x + "px";
        this.node.style.top = this.y + "px";
        
        document.body.append(this.node);
        console.log(this.landingY);

    }

    tick() {
        

        if (this.y < this.landingY) {
            this.y += 5;
        }

        this.node.style.top = this.y + "px";

        return true;
    }

    fridgeLand() {

    }
}