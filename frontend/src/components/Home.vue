<template>
    <div id="home">
        <About/>
        <Experience/>
    </div>
</template>

<script>
    import Experience from './Experience';
    import About from './About';

    export default {
        name: 'home',
        components: {
            About,
            Experience
        }
    }
</script>

<style>
    #home {
        padding-top: 50px;
    }
</style>
