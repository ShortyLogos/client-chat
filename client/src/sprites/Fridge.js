export default class Fridge  {

    constructor(parentNode) {
        this.node = document.createElement("div");
        this.node.classList.add("fridge");
        this.parentNode = parentNode;
   
        if (window.innerWidth> 1200) {
            this.x = -100 + Math.floor(Math.random() * 275);
        }
        else {
            this.x = -25 + Math.floor(Math.random() * 125);
        }
        this.y = -window.innerHeight;

        this.node.style.left = this.x + "%";
        this.node.style.top = this.y + "px";
        
        parentNode.append(this.node);
    }

    tick() {

        if (this.y < 100) {
            this.y += 20;
        }
        else 

        this.node.style.top = this.y + "px";

        return true;
    }

    fridgeLand() {

    }
}