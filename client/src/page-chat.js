import { registerCallbacks, sendMessage, signout, chatMessageLoop } from './chat-api';
import Vue from 'vue';
import Chat from './Chat.vue';
import { generateRain, generateSnow, generateStars, refreshSpriteList, ToggleButton } from './utils';
import Snowflake from './sprites/Snowflake';

let msgList = [];
let msgId = 0;
let membersOnline = [];
let membersList;

let spriteList = [];

let btnStarryNight;
let btnGentleRain;
let btnSoothingSnow;
let starryNight = false;
let gentleRain = false;
let soothingSnow = false;

window.addEventListener("load", () => {
    document.querySelector("textarea").onkeyup = function (evt) {
        sendMessage(evt, this)
    };
    document.querySelector("#sign-out-btn").onclick = signout;
    document.querySelector("#sign-out-btn-small").onclick = signout;
    registerCallbacks(newMessage, memberListUpdate);
    chatMessageLoop();

    let body = document.querySelector("body");

    body.style.backgroundImage = "url(./img/background/background-tile-room.png)";
    body.style.backgroundPosition = "bottom center";
    body.style.backgroundRepeat = "repeat-x";

    membersList = document.querySelector("#members-online");

    new Vue({
        el: '#chat-container',
        components: { Chat },
        template: '<Chat v-bind:messages="messageList" />',
        data: {
            messageList: msgList
        }
    })

    btnStarryNight = new ToggleButton("#starry-night");
    btnGentleRain = new ToggleButton("#gentle-rain");
    btnSoothingSnow = new ToggleButton("#soothing-snow");

    tick();
})

// Lorsqu'un nouveau message doit être affiché à l'écran, cette fonction est appelée
const newMessage = (fromUser, message, isPrivate) => {
    msgList.push({ msgId: ++msgId, fromUser: fromUser, message: message, isPrivate: isPrivate });
    console.log(fromUser, message, isPrivate);
}

// À chaque 2-3 secondes, cette fonction est appelée. Il faudra donc mettre à jour la liste des membres
// connectés dans votre interface.
const memberListUpdate = members => {
    membersOnline = members;

    let refreshMembers = document.querySelectorAll(".online-member")
    refreshMembers.forEach(node => {
        node.remove();
    })

    membersOnline.forEach(member => {
        let onlineMember = document.createElement("div");
        onlineMember.classList.add("online-member");
        onlineMember.classList.add("lift-up");
        onlineMember.innerText = member;
        onlineMember.onclick = () => {
            let textArea = document.querySelector(".text-input");
            textArea.focus();
            textArea.value = "/w " + member + " ";
        }

        membersList.append(onlineMember);
    })

    console.log(members);
}

const tick = () => {
    starryNight = btnStarryNight.toggle;
    if (starryNight) {
        generateStars(spriteList, 0.3, 500);
    }

    gentleRain = btnGentleRain.toggle;
    if (gentleRain) {
        if (soothingSnow) {
            soothingSnow = btnSoothingSnow.toggleNow();
            for (let i = 0; i < spriteList.length; i++) {
                if (spriteList[i] instanceof Snowflake) {
                    spriteList[i].fadeOut();
                }
            }
        }
        generateRain(spriteList, 0.8, 24, 0, 180, 0);
        generateRain(spriteList, 0.6, 22, 0, 180, 0);
        generateRain(spriteList, 0.8, 20, 0, 180, 0);
        generateRain(spriteList, 0.8, 20, 0, 180, 0);
        generateRain(spriteList, 0.5, 18, 0, 180, 0);
        generateRain(spriteList, 0.4, 14, 0, 180, 0);
    }

    soothingSnow = btnSoothingSnow.toggle;
    if (soothingSnow) {
        if (gentleRain) {
            gentleRain = btnGentleRain.toggleNow();
        }
        generateSnow(spriteList, 0.1, 3, 180, 0);
        generateSnow(spriteList, 0.1, 2.7, 180, 0);
        generateSnow(spriteList, 0.1, 2.5, 180, 0.3);
        generateSnow(spriteList, 0.1, 2.3, 180, 0.4);
        generateSnow(spriteList, 0.1, 2.1, 180, 0.5);
        generateSnow(spriteList, 0.1, 1.5, 180, 0.6);
        generateSnow(spriteList, 0.1, 1.2, 180, 0.7);
    }

    console.log(spriteList.length);
    refreshSpriteList(spriteList);

    window.requestAnimationFrame(tick);
}
