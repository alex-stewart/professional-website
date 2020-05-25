<template>
    <div>
        <Navigation class="nav-menu"/>
        <router-view/>
    </div>
</template>

<script>
    import Navigation from "./components/Navigation";

    export default {
        components: {
            Navigation
        }
    };
</script>

<style>
    .nav-menu {
        position: absolute;
        right: 0;
        top: 0;
        padding: 10px;
    }
</style>
