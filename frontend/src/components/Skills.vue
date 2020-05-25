<template>
    <div id="skills">
        <b-container>
            <b-row align-h="center">
                <div class="h1">Skills</div>
            </b-row>
        </b-container>
        <b-container>
            <b-row>
                <b-col v-for="skill in skills" v-bind:key="skill">
                    <SkillSet :skill="skill"></SkillSet>
                </b-col>
            </b-row>
        </b-container>
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
                        techList: ['Developer Associate']
                    }, {
                        icon: 'MeterIcon',
                        heading: 'High Performance Java Microservices',
                        techList: ['Java', 'Spring Boot', 'RabbitMQ', 'Camel', 'REST', 'Cassandra']
                    },
                    {
                        icon: 'PulseIcon',
                        heading: 'Service Visibility',
                        techList: ['Grafana', 'Prometheus', 'AppDynamics', 'CloudWatch']
                    },
                    {
                        icon: 'CloudIcon',
                        heading: 'Cloud Infrastructure',
                        techList: ['Jenkins', 'Ansible', 'CloudFormation', 'Docker']
                    },
                    {
                        icon: 'RocketIcon',
                        heading: 'Agile Development Methodologies',
                        techList: ['Scrum', 'Kanban', 'Test Driven Development']
                    }
                ]
            }
        }
    }
</script>

<style>
    #skills {
        padding-top: 20px;
    }
</style>
