<template>
    <div id="skills">
        <div class="h1 text-center">Skills</div>
        <div class="flex-container">
            <div class="flex-item" v-for="skill in skills" v-bind:key="skill">
                <SkillSet :skill="skill"></SkillSet>
            </div>
        </div>
    </div>
</template>

<script>
    import SkillSet from './SkillSet';

    export default {
        name: 'skills',
        components: {
            SkillSet
        },
        data: () => {
            return {
                skills: [
                    {
                        icon: 'MeritIcon',
                        heading: 'AWS Certified',
                        details: 'Developer Associate'
                    }, {
                        icon: 'MeterIcon',
                        heading: 'Microservice Architecture',
                        details: 'Event Driven Architecture - REST'
                    }, {
                        icon: 'RocketIcon',
                        heading: 'Team Leadership',
                        details: 'API Documentation - Scrum - Kanban - Test Driven Development'
                    }, {
                        icon: 'MeterIcon',
                        heading: 'Scalable Java Microservices',
                        details: 'Java - Spring Boot - Apache Camel'
                    },
                    {
                        icon: 'CloudIcon',
                        heading: 'Cloud Infrastructure',
                        details: 'Jenkins - Ansible - CloudFormation - Docker'
                    },

                    {
                        icon: 'PulseIcon',
                        heading: 'Service Visibility',
                        details: 'Grafana - Prometheus - AppDynamics - CloudWatch'
                    }, {
                        icon: 'MeterIcon',
                        heading: 'Scalable Java Microservices',
                        details: 'Java - Spring Boot - Apache Camel'
                    },
                    {
                        icon: 'CloudIcon',
                        heading: 'Cloud Infrastructure',
                        details: 'Jenkins - Ansible - CloudFormation - Docker'
                    },

                    {
                        icon: 'PulseIcon',
                        heading: 'Service Visibility',
                        details: 'Grafana - Prometheus - AppDynamics - CloudWatch'
                    }
                ]
            }
        }
    }
</script>

<style>
    #skills {
        padding-top: 20px;
        width: 100%;
        min-height: calc(100vh);
    }

    .flex-container {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        padding: 0;
        margin: 0;
        list-style: none;
    }

    .flex-item {
        padding: 10px;
        width: 500px;
        height: 200px;
        margin-top: 30px;
        margin-bottom: 70px;
        color: black;
        font-weight: bold;
        font-size: 3em;
        text-align: center;
    }
</style>
