export class ThemeName {

    constructor(parentNode, themeTitle) {
        this.element = document.createElement("div");
        this.element.innerText = themeTitle;
        this.element.classList.add("theme-name");
        this.y = 5;

        this.element.style.top = this.y + "px";

        this.opacity = 1;

        parentNode.append(this.element);
    }

    tick() {
        let alive = true;

        this.y--;
        this.element.style.top = this.y + "px";

        this.opacity -= 0.02;
        this.element.style.opacity = this.opacity;

        if (this.opacity <= 0) {
            this.element.remove();
            alive = false;
        }

        return alive;
    }
}