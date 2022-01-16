import PopUpBox from "./PopUpBox";

export default class Fridge  {

    constructor(parentNode) {
        this.node = document.createElement("div");
        this.node.classList.add("fridge");
        this.parentNode = parentNode;
        this.landed = false;
        this.dustStarted = false;
        this.opacity = 1;
        this.loot = "an ice-cream sandwich.";
   
        if (window.innerWidth> 1200) {
            this.x = -100 + Math.floor(Math.random() * 275);
        }
        else {
            this.x = -25 + Math.floor(Math.random() * 125);
        }
        this.y = -window.innerHeight;

        this.node.style.left = this.x + "%";
        this.node.style.top = this.y + "px";

        this.node.onclick = () => this.open();

        let sound = new Audio('./sounds/cute.wav');
        sound.play();
        
        parentNode.append(this.node);
    }

    tick() {
        let alive = true;
        if (this.y <= 100) {
            this.y += 20;
        }
        else {
            this.landed = true;
            if (!this.dustStarted) {
                this.dustAnimation();
            }
        }

        this.node.style.top = this.y + "px";

        if (this.fadeOut) {
                this.opacity -= 0.02;
                this.node.style.opacity = this.opacity;
                if (this.opacity <= 0) {
                    this.node.remove();
                    alive = false;
                }
        }

        if (this.popUpBox != null) {
            this.popUpBox.tick();
        }

        return alive;
    }

    dustAnimation() {
        this.dustStarted = true;
        let animationSpeed = 15;

        let sound = new Audio('./sounds/landing.wav');
        sound.play();
        
        this.node.style.backgroundImage = "url(./img/sprites/fridge1.png)";

        setTimeout(() => {
            this.node.style.backgroundImage = "url(./img/sprites/fridge2.png)";
        }, animationSpeed)
        setTimeout(() => {
            this.node.style.backgroundImage = "url(./img/sprites/fridge3.png)";
        }, animationSpeed += animationSpeed)
        setTimeout(() => {
            this.node.style.backgroundImage = "url(./img/sprites/fridge4.png)";
        }, animationSpeed += animationSpeed)
        setTimeout(() => {
            this.node.style.backgroundImage = "url(./img/sprites/fridge5.png)";
        }, animationSpeed += animationSpeed)
        setTimeout(() => {
            this.node.style.backgroundImage = "url(./img/sprites/fridge0.png)";
            this.dustCompleted = true;
        }, animationSpeed += animationSpeed)

    }

    open() {
        let animationSpeed = 30;
        if (!this.opened) {

            this.node.style.backgroundImage = "url(./img/sprites/fridge-open1.png)";

            setTimeout(() => {
                this.node.style.backgroundImage = "url(./img/sprites/fridge-open2.png)";
            }, animationSpeed)
            setTimeout(() => {
                this.node.style.backgroundImage = "url(./img/sprites/fridge-open3.png)";
                this.opened = true;
                let text = "You found " + this.loot;
                this.popUpBox = new PopUpBox(this.node, text, 12, 1.1, null, 240);

                // (new PopUpBox(gift, text, 12, 1.1, 1500, 245))

                setTimeout(() => {
                    this.fadeOut = true;
                }, 3000)
            }, animationSpeed += animationSpeed)

        }
    }
}

