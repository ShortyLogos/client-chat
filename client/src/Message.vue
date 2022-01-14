<template>
    <div v-if="message.isPrivate" class="message message-private">
        {{ message.message }}
        <div class="username username-private">
            {{ message.fromUser }}
        </div>
    </div>
    <div v-else class="message">
        {{ message.message }}
        <div class="username">
            {{ message.fromUser }}
        </div>
    </div>
</template>

<script>
    export default {
        name : "Message",
        props : ["message"]
    }
</script>