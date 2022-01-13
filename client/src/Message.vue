<template>
    <div class="message">
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