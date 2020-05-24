<template>
    <div id="home">
        <div id="header">
            <Header/>
        </div>
        <div class="h2 mb-0">
            <b-icon-truck></b-icon-truck>
        </div>
        <div id="footer">
            <Footer/>
        </div>
    </div>
</template>

<script>
    import Header from './Header.vue'
    import Footer from './Footer.vue'

    export default {
        name: 'home',
        components: {
            Header,
            Footer
        }
    }
</script>

<style>
    #home {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
