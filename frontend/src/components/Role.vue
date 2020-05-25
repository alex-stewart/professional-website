<template>
    <div>
        <div class="timeline-notch"/>
        <b-card :title="title"
                :sub-title="companyName"
                :footer="formatFooter()">
            <b-card-text>
                <div>- points</div>
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
            title: {
                type: String
            },
            startDate: {
                type: String
            },
            endDate: {
                type: String
            }
        },
        methods: {
            formatFooter: function() {
                return this.startDate + ' - ' + this.endDate;
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
