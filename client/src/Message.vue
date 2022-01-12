<template>
    <div class="message white-border">{{ message.message }}</div>
</template>

<script>
    export default {
        name : "Message",
        props : ["message"]
    }
</script>