<template>
    <div id="cv">
        <Role company="Test" role="Senior Developer" start-date="yesterday" end-date="today"/>
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

<style>
    #cv {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }
</style>

