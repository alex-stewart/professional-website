<template>
    <g>
        <rect x='48' y='96' width='416' height='320' rx='40' ry='40'
              style='fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px'/>
        <polyline points='112 160 256 272 400 160'
                  style='fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px'/>
    </g>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: 'Mail'
            }
        }
    }
</script>
