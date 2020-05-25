<template>
    <div>
        <div class="timeline-notch"/>
        <b-card :title="role.title"
                :sub-title="role.companyName"
                :footer="formatFooter()">
            <b-card-text>
                <ul>
                    <li v-for="detail in role.details" v-bind:key="detail">
                        {{detail}}
                    </li>
                </ul>
            </b-card-text>
        </b-card>
    </div>
</template>

<script>
    export default {
        name: 'role',
        props: {
            role: {
                type: Object
            }
        },
        methods: {
            formatFooter: function () {
                return this.role.startDate + ' - ' + this.role.endDate;
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
        top: 40px;
    }
</style>
