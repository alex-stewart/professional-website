<template>
    <div>
        <b-container>
            <b-col>
                <b-row align-h="center">
                    <div class="h5 text-center">
                        {{skill.heading}}
                    </div>
                </b-row>
                <b-row align-h="center">
                    <IconBase>
                        <component v-bind:is="skill.icon"/>
                    </IconBase>
                </b-row>
                <b-row align-h="center">
                    <div v-for="tech in skill.techList" v-bind:key="tech">
                        <b-badge class="tech-badge">{{tech}}</b-badge>
                    </div>
                </b-row>
            </b-col>
        </b-container>
    </div>
</template>

<script>
    import IconBase from './icons/IconBase';
    import MeterIcon from './icons/MeterIcon';
    import MeritIcon from './icons/MeritIcon';
    import PulseIcon from './icons/PulseIcon';
    import CloudIcon from './icons/CloudIcon';
    import RocketIcon from './icons/RocketIcon';

    export default {
        name: 'skillSet',
        components: {
            IconBase,
            RocketIcon,
            CloudIcon,
            MeterIcon,
            MeritIcon,
            PulseIcon
        },
        props: {
            skill: {
                type: Object
            }
        },
    }
</script>

<style>
    .tech-badge {
        margin: 2px;
    }
</style>
