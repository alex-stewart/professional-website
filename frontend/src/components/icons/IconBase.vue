<template>
    <svg xmlns='http://www.w3.org/2000/svg' :width='width' :height='height' :fill='colour' :stroke='colour' viewBox='0 0 512 512'>
        <title>GitHub</title>
        <slot/>
    </svg>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: 'icon'
            },
            width: {
                type: [Number, String],
                default: 50
            },
            height: {
                type: [Number, String],
                default: 50
            },
            colour: {
                type: String,
                default: '#000000'
            }
        }
    }
</script>