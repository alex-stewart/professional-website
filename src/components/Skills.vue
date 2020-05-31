<template>
    <div id="skills">
        <div class="h1 text-center">Skills</div>
        <div class="flex-container">
            <div class="flex-item" v-for="skill in skills" v-bind:key="skill.heading">
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
                        details: 'Amazon Web Services Certified Developer - Associate'
                    }, {
                        icon: 'CloudIcon',
                        heading: 'Cloud Infrastructure',
                        details: 'CloudFormation - Jenkins - Concourse - Docker - Ansible'
                    }, {
                        icon: 'RocketIcon',
                        heading: 'Agile Team Leadership',
                        details: 'Scrum - Kanban - Test Driven Development - Mentoring'
                    }, {
                        icon: 'SkyscraperIcon',
                        heading: 'Solution Architecture',
                        details: 'Event Driven Architecture - REST - SQL - NoSQL'
                    }, {
                        icon: 'BoxIcon',
                        heading: 'Logistics Background',
                        details: 'Parcel Delivery - Parcel Sortation - Warehouse Management'
                    }, {
                        icon: 'MeterIcon',
                        heading: 'Scalable Java Microservices',
                        details: 'Java - Spring Boot - Apache Camel'
                    }, {
                        icon: 'PulseIcon',
                        heading: 'Service Visibility',
                        details: 'Grafana - Prometheus - AppDynamics - CloudWatch'
                    }, {
                        icon: 'ToolsIcon',
                        heading: 'Test Automation',
                        details: 'JUnit - Mockito - Wiremock - REST Assured - Selenium'
                    }, {
                        icon: 'ComputerIcon',
                        heading: 'Web Design',
                        details: 'JavaScript - AngularJS - Vue.js - React - SVG'
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
