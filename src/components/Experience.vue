<template>
    <div id="experience">
        <div class="h1 text-center">Experience</div>
        <b-container>
            <b-col>
                <b-row align-h="center" v-for="role in roles" v-bind:key="role.startDate">
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
                        endDate: 'Present',
                        details: [
                            'Leading a team of graduates in designing and building a warehouse inventory auditing system.',
                            'Lead a project to replace the existing messaging infrastructure of a warehouse management system with RabbitMQ.'
                        ]
                    }, {
                        companyName: 'Hermes Parcelnet Ltd.',
                        title: 'Senior Developer',
                        startDate: 'July 2019',
                        endDate: 'November 2019',
                        details: [
                            'Coaching junior members of the team on a revenue protection project, handling measurements of hundreds of thousands of parcels daily.',
                            'Responsible for maintaining and documenting cloud infrastructure and continuous integration pipelines for a suite of microservices for handling parcel tracking data.'
                        ]
                    }, {
                        companyName: 'Hermes Parcelnet Ltd.',
                        title: 'Developer',
                        startDate: 'July 2018',
                        endDate: 'July 2019',
                        details: [
                            'Designed new microservices for interfacing with third party tracking data sources, providing real time tracking to millions of customers and tens of thousands of clients.',
                            'Obtained AWS Developer Associate certification.'
                        ]
                    }, {
                        companyName: 'Hermes Parcelnet Ltd.',
                        title: 'Junior Java Engineer',
                        startDate: 'August 2017',
                        endDate: 'July 2018',
                        details: [
                            'Worked as part of a team to split a monolithic real time parcel tracking service into multiple independently deployable microservices.',
                            'Provided out of hours support and took ownership of implementing solutions to live incidents.'
                        ]
                    }, {
                        companyName: 'Dion Global Solution',
                        title: 'Junior Developer',
                        startDate: 'October 2016',
                        endDate: 'July 2017',
                        details: [
                            'Part of a development team building a mobile-first wealth management platform as a full stack developer.',
                            'Assisted in developing an automated end-to-end test suite.'
                        ]
                    }, {
                        companyName: 'Omnicom Engineering Ltd.',
                        title: 'Computer Science Placement Student',
                        startDate: 'July 2014',
                        endDate: 'July 2015',
                        details: [
                            'Developed an algorithm for aligning train track measurement data as part of a big data project to predict line faults.',
                            'Worked independently to build train track measurement conversion libraries in different languages.'
                        ]
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
        width: 100%;
        min-height: calc(100vh);
        background-image: linear-gradient(white, lightgray);
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

