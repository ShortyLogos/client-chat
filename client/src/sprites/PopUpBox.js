export default class PopUpBox {
    
    constructor(parentNode, content, speedY, velocity, timeToFadeOut, minimumWidth = null) {
        this.popping = true;
        this.fadeOut = false;
        this.element = document.createElement("div");
        this.element.classList.add("pop-up-box");
        this.content = content;

        this.width = 10;
        this.minimumWidth = minimumWidth;
        this.posY = 10;
        this.speedY = speedY;
        this.velocity = velocity;

        this.opacity = 1;

        this.element.style.width = this.width + "px";
        this.element.style.top = this.posY + "px";

        setTimeout(() => {
            this.fadeOut = true;
        }, speedY * 200 + timeToFadeOut);

        parentNode.append(this.element);
    }

    tick() {
        let alive = true;

        if (this.popping) {
            this.width += 15;
            
            console.log(this.popping);

            this.element.style.width = this.width + "px";

            if (this.width > 180) {
            this.popping = false;
            this.element.classList.add("pop-up-box-complete");
            this.element.innerText = this.content;

                if (this.minimumWidth != null) { 
                    this.element.style.minWidth = this.minimumWidth + "px";
                }
            }
        }
        else {
            
        }

        this.speedY += this.velocity;
        this.posY -= this.speedY;

        if (this.posY < -95) {
            this.posY = -95;
            this.speedY = -this.speedY/1.2;
        }

        this.element.style.top = this.posY + "px";

        if (this.fadeOut) {
            this.opacity -= 0.02;
            this.element.style.opacity = this.opacity;
            if (this.opacity <= 0) {
                this.element.remove();
                alive = false;
            }
        }

        return alive;
    }
}