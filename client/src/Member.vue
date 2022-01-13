<template>
    <div class="message white-border">
        {{ member }}
    </div>
</template>

<script>
    export default {
        name : "Member",
        props : ["member"]
    }
</script>