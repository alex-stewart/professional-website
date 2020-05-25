<template>
    <div id="cv">
        <Role company="The Hut Group" role="Senior Developer" start-date="yesterday" end-date="today"/>
    </div>
</template>

<script>
    import Role from './cv/Role.vue'

    export default {
        name: 'company',
        components: {
            Role
        }
    }
</script>
