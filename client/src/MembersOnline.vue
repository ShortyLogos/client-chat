<template>
        <div id="chat-box" class="box-content flex-column">
            <Member
                v-for="member in members"
                v-bind:member="member"
                v-bind:key="member.mbId"
            />
        </div>
</template>

<script>
    import Member from './Member.vue'

    export default {
        name : "MembersOnline",
        components : {
            Member
        },
        props : ["members"]
    }
</script>