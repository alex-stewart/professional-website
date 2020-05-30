<template>
    <div id="app">
        <Navigation @about="goto('about')"
                    @skills="goto('skills')"
                    @experience="goto('experience')"
                    class="nav-menu"/>
        <div ref="about">
            <About/>
        </div>
        <div ref="skills">
            <Skills/>
        </div>
        <div ref="experience">
            <Experience/>
        </div>
    </div>
</template>

<script>
    import Experience from './components/Experience';
    import Skills from './components/Skills';
    import About from './components/About';
    import Navigation from './components/Navigation';

    export default {
        name: 'app',
        components: {
            About,
            Skills,
            Experience,
            Navigation
        },
        methods: {
            goto(refName) {
                let element = this.$refs[refName];
                let top = element.offsetTop;

                window.scrollTo({ top: top, behavior: 'smooth' });
            }
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }
    .nav-menu {
        position: fixed;
        right: 0;
        top: 0;
        padding: 10px;
    }
</style>
