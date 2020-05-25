<template>
    <div id="home">
        <b-container>
            <b-row align-h="center">
                <div class="h1">Alex Stewart</div>
            </b-row>
            <b-row align-h="center">
                <div class="h3">Software Engineer</div>
            </b-row>
            <b-row align-h="center">
                <Links/>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import Links from './Links.vue'

    export default {
        name: 'home',
        components: {
            Links
        }
    }
</script>
