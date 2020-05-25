<template>
    <div id="experience">
        <b-container>
            <b-col>
                <b-row align-h="center" v-for="role in roles" v-bind:key="role">
                    <div class="timeline-segment"/>
                    <Role class="row-card" :role="role"/>
                </b-row>
            </b-col>
        </b-container>
    </div>
</template>

<script>
    import Role from './Role.vue'

    export default {
        name: 'experience',
        components: {
            Role
        },
        data: () => {
            return {
                roles: [
                    {
                        companyName: 'The Hut Group',
                        title: 'Senior Software Engineer',
                        startDate: 'November 2019',
                        endDate: 'Present'
                    }, {
                        companyName: 'Hermes Parcelnet Ltd.',
                        title: 'Senior Developer',
                        startDate: 'July 2019',
                        endDate: 'November 2019'
                    }, {
                        companyName: 'Hermes Parcelnet Ltd.',
                        title: 'Developer',
                        startDate: 'July 2018',
                        endDate: 'July 2019'
                    }, {
                        companyName: 'Hermes Parcelnet Ltd.',
                        title: 'Junior Java Engineer',
                        startDate: 'August 2017',
                        endDate: 'July 2018'
                    }, {
                        companyName: 'Dion Global Solution',
                        title: 'Junior Developer',
                        startDate: 'October 2016',
                        endDate: 'July 2017'
                    }, {
                        companyName: 'Omnicom Engineering Ltd.',
                        title: 'Computer Science Placement Student',
                        startDate: 'July 2014',
                        endDate: 'July 2015'
                    }, {
                        companyName: 'University of York',
                        title: 'BEng. Computer Science With Year in Industry',
                        startDate: 'October 2011',
                        endDate: 'July 2016',
                        details: [
                            'Automatic Gesture Generation for Virtual Actors from Text',
                            'Designing Habitable Software',
                            'Software Engineering Group Project'
                        ]
                    }
                ]
            }
        }
    }
</script>

<style>
    #experience {
        padding-top: 20px;
    }

    .row-card {
        width: calc(100% - 100px);
        max-width: 500px;
        margin: 10px;
    }

    .timeline-segment {
        width: 10px;
        background: black;
    }
</style>

