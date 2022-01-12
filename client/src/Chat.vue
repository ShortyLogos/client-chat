<template>
    <div id="chat-box" class="box-content flex-column white-border">
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
        }
    }
</script>