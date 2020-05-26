<template>
    <div>
        <IconBase height="100" width="100">
            <component v-bind:is="skill.icon"/>
        </IconBase>
        <div class="h3 text-center">
            {{skill.heading}}
        </div>
        <div class="h6">
            {{skill.details}}
        </div>
    </div>
</template>

<script>
    import IconBase from './icons/IconBase';
    import MeterIcon from './icons/MeterIcon';
    import MeritIcon from './icons/MeritIcon';
    import PulseIcon from './icons/PulseIcon';
    import CloudIcon from './icons/CloudIcon';
    import RocketIcon from './icons/RocketIcon';
    import SkyscraperIcon from './icons/SkyscraperIcon';
    import ToolsIcon from './icons/ToolsIcon';
    import ComputerIcon from './icons/ComputerIcon';
    import BoxIcon from './icons/BoxIcon';

    export default {
        name: 'skillSet',
        components: {
            IconBase,
            RocketIcon,
            CloudIcon,
            MeterIcon,
            MeritIcon,
            PulseIcon,
            SkyscraperIcon,
            ToolsIcon,
            ComputerIcon,
            BoxIcon
        },
        props: {
            skill: {
                type: Object
            }
        },
    }
</script>

<style>
</style>
