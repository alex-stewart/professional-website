<template>
    <g>
        <path d="M416,221.25V416a48,48,0,0,1-48,48H144a48,48,0,0,1-48-48V96a48,48,0,0,1,48-48h98.75a32,32,0,0,1,22.62,9.37L406.63,198.63A32,32,0,0,1,416,221.25Z"
              fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32px"/>
        <path d="m256 56v120a32 32 0 0 0 32 32h120" fill="none" stroke="#000" stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="32px"/>
        <text x="0" y="0" fill="#000">CV</text>
        <text x="135" y="400" font-size=175px>CV</text>
    </g>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: 'CV'
            }
        }
    }
</script>