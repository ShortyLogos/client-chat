import { moneyIncrease, mysteriousKeysIncrease, randomThingsIncrease } from "../page-chat";
import PopUpBox from "./PopUpBox";

export default class Fridge  {

    constructor(parentNode) {
        this.node = document.createElement("div");
        this.node.classList.add("fridge");
        this.parentNode = parentNode;
        this.landed = false;
        this.dustStarted = false;
        this.opacity = 1;
   
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

                this.loot = this.randomLoot();

                let text = "You found " + this.loot;
                this.popUpBox = new PopUpBox(this.node, text, 8, 2, 500, 270);

                // (new PopUpBox(gift, text, 12, 1.1, 1500, 245))

                setTimeout(() => {
                    this.fadeOut = true;
                }, 2500)
            }, animationSpeed += animationSpeed)

        }
    }

    randomLoot() {
        let lootTable = [
            " 1$. Don't spend it all.",
            " 2$. Lucky you!",
            " 5$. Very, very nice.",
            " 10$. One step forward being a millionaire!",
            " a rotten egg. Huh?",
            " a stinking fart.",
            " an ice-cream sandwich.",
            " a resolve to pursue your dreams.",
            " a rumor about you. Is it true?",
            " a delicious pudding.",
            " a future laugh for grim days.",
            " the laugh of your best friend.",
            " brand new socks. Wow!",
            " a chocolate bar big enough to share it.",
            " a mysterious key.",
            " a laser gun.",
            " a bag of fascinating marbles.",
            " a good feeling about tomorrow.",
            " a bird feather of your favorite color.",
            " a baseball bat.",
            " a yo-yo.",
            " a heartwarming greeting card.",
            " a scene from your favorite movie.",
            " a coffee-stained newspaper.",
            " a miniature robot.",
            " a butterfly.",
            " a friendly but elusive insect.",
            " orange juice.",
            " the most recent password for a private club.",
            " John. Hello John.",
            " a dinosaur-shaped pebble.",
            " a very long bridge to a tiny planet.",
            " a grandmother's recipe. Yummy!",
            " a way to enjoy mondays.",
            " a new outlook on life.",
            " some leftover lasagna.",
            " a crazy idea with unlimited potential.",
            " a cowboy hat.",
            " a picture of an happy couple.",
            " a strange bone."
        ]

        let roll = Math.floor(Math.random() * lootTable.length);
        if (roll == 0) {
            moneyIncrease(1);
        }
        else if (roll == 1) {
            moneyIncrease(2);
        }
        else if (roll == 2) {
            moneyIncrease(5);
        }
        else if (roll == 3) {
            moneyIncrease(10);
        }
        else {
            let sound = new Audio('./sounds/loot.wav');
            sound.play();
            randomThingsIncrease();
        }

        if (roll <= 3) {
            let sound = new Audio('./sounds/money.wav');
            sound.play();
        }
        else if (roll == 4 || roll == 5) {
            let sound = new Audio('./sounds/bad.wav');
            sound.play();
        }
 
        return lootTable[roll];
    }
}



