<template>
    <svg xmlns='http://www.w3.org/2000/svg' :width='width' :height='height' :stroke='colour' viewBox='0 0 512 512'>
        <title>Mail</title>
        <rect x='48' y='96' width='416' height='320' rx='40' ry='40'
              style='fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px'/>
        <polyline points='112 160 256 272 400 160'
                  style='fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px'/>
    </svg>
</template>

<script>
    export default {
        props: {
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
                default: "#000000"
            }
        }
    }
</script>