import {registerCallbacks, sendMessage, signout, chatMessageLoop} from './chat-api';
import Vue from 'vue';
import Chat from './Chat.vue';

let msgList = [];
let id = 0;

window.addEventListener("load", () => {
    document.querySelector("textarea").onkeyup = function (evt) {
        sendMessage(evt, this)
    };
    document.querySelector("#sign-out-btn").onclick = signout;
    registerCallbacks(newMessage, memberListUpdate);
    chatMessageLoop();

    new Vue({
        el: '#vue-container',
        components: { Chat },
        template: '<Chat v-bind:messages="messageList" />',
        data : {
            messageList : msgList
        }
    })

    tick();
})

// Lorsqu'un nouveau message doit être affiché à l'écran, cette fonction est appelée
const newMessage = (fromUser, message, isPrivate) => {
    msgList.push({id : ++id, fromUser : fromUser, message : message, isPrivate : isPrivate});
    console.log(fromUser, message, isPrivate);
    console.log(msgList.length);

}

// À chaque 2-3 secondes, cette fonction est appelée. Il faudra donc mettre à jour la liste des membres
// connectés dans votre interface.
const memberListUpdate = members => {
    // console.log(members);
}

const tick = () => {
    window.requestAnimationFrame(tick);
}
