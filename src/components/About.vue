<template>
    <div id="about">
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
            <b-row align-h="center">
                <div>AWS Certified Developer engineering modern cloud native microservices.</div>
            </b-row>
            <b-row align-h="center" class="link-row">
                <Links/>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import Links from './Links.vue'

    export default {
        name: 'about',
        components: {
            Links
        }
    }
</script>

<style>
    #about {
        padding-top: 50px;
        width: 100%;
        min-height: calc(100vh);
    }
    .link-row {
        padding-top: 50px;
        padding-bottom: 50px;
    }
</style>
