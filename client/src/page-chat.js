import { registerCallbacks, sendMessage, signout, chatMessageLoop } from './chat-api';
import Vue from 'vue';
import Chat from './Chat.vue';

let msgList = [];
let msgId = 0;
let membersOnline = [];
let membersList;

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

        membersList.append(onlineMember);
    })

    console.log(members);
}

const tick = () => {
    let panel = document.querySelector(".interactive-panel");


    window.requestAnimationFrame(tick);
}
