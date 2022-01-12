<template>
    <div id="chat-box" class="box-content flex-column">
        <Message
            v-for="message in messages"
            v-bind:message="message"
            v-bind:key="message.id"
        />
    </div>
</template>

<script>
    import Message from './Message.vue'

    export default {
        name : "Chat",
        props : ["messages"],
        components : {
            Message
        },
        methods : {}
    }

    // window.addEventListener("load", () => {
    //     let chatBox = document.querySelector("#chat-box");
    //     chatBox.scrollIntoView(false);
    // })
</script>