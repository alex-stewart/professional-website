<template>
    <div>
        <div class="timeline-notch"/>
        <b-card :title="companyName">
            <b-card-text>
                <div class="h5">{{title}}</div>
                <div>{{startDate}} - {{endDate}}</div>
                <div>dsadadadsa</div>
                <div>dsadadadsa</div>
                <div>dsadadadsa</div>
            </b-card-text>
        </b-card>
    </div>
</template>

<script>
    export default {
        name: 'role',
        props: {
            companyName: {
                type: String
            },
            companyWebsite: {
                type: String
            },
            title: {
                type: String
            },
            startDate: {
                type: String
            },
            endDate: {
                type: String
            }
        }
    }
</script>

<style>
    .timeline-notch {
        width: 10px;
        height: 10px;
        background: black;
        position: relative;
        left: -10px;
        top: 30px;
    }
</style>
