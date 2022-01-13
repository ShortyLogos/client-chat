<template>
        <div id="chat-container">
            <Message
                v-for="message in messages"
                v-bind:message="message"
                v-bind:key="message.msgId"
            />
        </div>
</template>

<script>
    import Message from './Message.vue'

    export default {
        name : "Chat",
        components : {
            Message
        },
        props : ["messages"],
        updated() {
            this.$nextTick(() => this.scrollDown());
        },
        methods : {
            scrollDown: function () {
                this.$el.scrollTop = this.$el.lastElementChild.offsetTop;
            }
        }
    }
</script>