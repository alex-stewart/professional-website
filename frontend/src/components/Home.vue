<template>
    <div id="home">
        <About/>
        <Skills/>
        <Experience/>
    </div>
</template>

<script>
    import Experience from './Experience';
    import Skills from './Skills';
    import About from './About';

    export default {
        name: 'home',
        components: {
            About,
            Skills,
            Experience
        }
    }
</script>

<style>
    #home {
        padding-top: 50px;
    }
</style>
