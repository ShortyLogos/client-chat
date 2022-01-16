import {mouseX, mouseY, spriteList} from '../page-index.js'
import MovingParticle from './MovingParticle.js';

export default class UFO {

    constructor() {
        this.speedX = 0;
        this.speedY = 0;
        this.velocity = 0.025;
        this.maxSpeed = 4;

        this.node = document.createElement("div");
        this.node.classList.add("UFO");

        this.username = document.querySelector("#username").value;

        this.textAppended = document.createElement("div");
        this.textAppended.classList.add("UFO-text");
        this.textAppended.innerText = this.username;

        this.x = Math.random() * window.innerWidth;
        if (this.x <= 0 || this.x >= window.innerWidth - 110)
            this.x = 50;

        this.y = (Math.random() * window.innerHeight);
        if (this.y <= 26 || this.y >= window.innerHeight - 100)
            this.y = 50;
    
        this.node.style.left = this.x + "px";
        this.node.style.top = this.y + "px";
        
        document.body.append(this.node);
        this.node.append(this.textAppended);

    }

    tick() {

        spriteList.push(new MovingParticle(this.node, this.x, this.y));
        

        if (this.x < mouseX) {
			if (this.speedX < this.maxSpeed) {
				this.speedX += this.velocity;
			}
		}
		else if (this.x > mouseX) {
			if (this.speedX > -this.maxSpeed) {
				this.speedX -= this.velocity;
			}
		}

		if (this.y < mouseY) {
			if (this.speedY < this.maxSpeed) {
				this.speedY += this.velocity;
			}
		}
		else if (this.y > mouseY) {
			if (this.speedY > -this.maxSpeed) {
				this.speedY -= this.velocity;
			}
		}

		this.x += this.speedX;
		this.y += this.speedY;

		this.node.style.left = this.x + "px";
		this.node.style.top = this.y + "px";

        this.username = document.querySelector("#username").value;
        this.textAppended.innerText = this.username;

        let alive = true
        return alive;
    }
}