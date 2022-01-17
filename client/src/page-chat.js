import { registerCallbacks, sendMessage, signout, chatMessageLoop } from './chat-api';
import Vue from 'vue';
import Chat from './Chat.vue';
import { changeTheme, generateRain, generateSnow, generateStars, refreshSpriteList, ToggleButton } from './utils';
import Snowflake from './sprites/Snowflake';
import Fridge from './sprites/Fridge';
import { ThemeName } from './sprites/ThemeName';

let msgList = [];
let msgId = 0;
let membersOnline = [];
let membersList;

let spriteList = [];

let themeSelected = 0;

let btnChangeOutfit;
let btnStarryNight;
let btnGentleRain;
let btnSoothingSnow;
let starryNight = false;
let gentleRain = false;
let soothingSnow = false;

let money = 0;
let mysteriousKeys = 0;
let randomThings = 0;

window.addEventListener("load", () => {
    document.querySelector("textarea").onkeyup = function (evt) {
        sendMessage(evt, this)
    };
    document.querySelector("#sign-out-btn").onclick = signout;
    document.querySelector("#sign-out-btn-small").onclick = signout;
    registerCallbacks(newMessage, memberListUpdate);
    chatMessageLoop();

    membersList = document.querySelector("#members-online");

    new Vue({
        el: '#chat-container',
        components: { Chat },
        template: '<Chat v-bind:messages="messageList" />',
        data: {
            messageList: msgList
        }
    })

    btnChangeOutfit = document.querySelector("#change-outfit");
    btnChangeOutfit.onclick = () => changeOutfit();

    btnStarryNight = new ToggleButton("#starry-night");
    btnGentleRain = new ToggleButton("#gentle-rain");
    btnSoothingSnow = new ToggleButton("#soothing-snow");

    
    document.querySelector("#feed-me").onclick = () => {
        spriteList.push(new Fridge(document.querySelector(".text-input-area")));
    }

    document.querySelector("#brag-a-little").onclick = () => {
        let textArea = document.querySelector(".text-input");
        textArea.focus();
        textArea.value = 
            "I've found " + money + "$, " 
            + mysteriousKeys + " mysterious key(s) and exactly "
            + randomThings + " random thing(s) from falling refrigerators. But most important to me are the "
            + (membersOnline.length - 1) + " friends I got here.";
    }
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

    refreshSpriteList(spriteList);

    window.requestAnimationFrame(tick);
}

const changeOutfit = () => {
    themeSelected++;
    if (themeSelected > 3) { themeSelected = 0; }
    console.log(themeSelected);

    switch(themeSelected) {
        case 0:
            spriteList.push(new ThemeName(btnChangeOutfit, "Pyjama Party"));
            changeTheme('#9674bc', '#6b33a9', '#b08ad8', '#1e1753', '#cf9c5a');
            break;
        case 1:
            spriteList.push(new ThemeName(btnChangeOutfit, "Chocolate Factory"));
            changeTheme('#a4443d', '#862f28', '#985f5c', '#42121f', '#F7800C');
            break;
        case 2:
            spriteList.push(new ThemeName(btnChangeOutfit, "Mother's Smile"));
            changeTheme('#4d9fcf', '#276d6b', '#74a5c0', '#0d4445', '#D0B45A');
            break;
        case 3:
            spriteList.push(new ThemeName(btnChangeOutfit, "Jazz Night"));
            changeTheme('#cfc54d', '#a9a033', '#d2c964', '#533917', '#388576');
            break;
    }
}

export const moneyIncrease = () => {
    money++;
}

export const mysteriousKeysIncrease = () => {
    mysteriousKeys++;
}

export const randomThingsIncrease = () => {
    randomThings++;
}
