<template>
    <div id="nav">
        <b-link class="nav-item" @click="$emit('about')">About</b-link>
        <b-link class="nav-item" @click="$emit('skills')">Skills</b-link>
        <b-link class="nav-item" @click="$emit('experience')">Experience</b-link>
    </div>
</template>

<script>
    export default {
        name: 'navigation'
    }
</script>

<style>
    #nav {
        z-index: 1;
    }
    .nav-item {
        padding: 5px;
        color: #000000;
    }
    .nav-item:hover {
        color: #000000;
    }
</style>