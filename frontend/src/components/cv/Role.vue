<template>
    <div>
        <div class="h2">{{role}}</div>
        <div class="h3">{{company}}</div>
        <div class="h3">{{startDate}} - {{endDate}}</div>
    </div>
</template>

<script>
    export default {
        name: 'company',
        props: {
            company: {
                type: String
            },
            role: {
                type: String
            },
            startDate: {
                type: String
            },
            endDate: {
                type: String
            }
        },
        components: {}
    }
</script>
