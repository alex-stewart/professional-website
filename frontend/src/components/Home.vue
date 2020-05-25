<template>
    <div id="home" class="home-container">
        <b-container>
            <b-row align-h="center">
                <img alt="Alex Stewart" width="200px" height="200px" src="../assets/image/alex-photograph.png"/>
            </b-row>
            <b-row align-h="center">
                <div class="h1">Alex Stewart</div>
            </b-row>
            <b-row align-h="center">
                <div class="h4">Software Engineer</div>
            </b-row>
            <b-row align-h="center" class="nav-row">
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

<style>
    .home-container {
        padding-top: 5%;
    }
    .nav-row {
        padding-top: 5%;
    }
</style>
