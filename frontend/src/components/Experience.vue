<template>
    <div id="experience">
        <b-container>
            <b-col>
                <b-row align-h="center">
                    <div class="timeline-segment"/>
                    <Role class="row-card"
                          company-name="The Hut Group"
                          title="Senior Software Engineer"
                          start-date="November 2019"
                          end-date="Present"/>
                </b-row>
                <b-row align-h="center">
                    <div class="timeline-segment"/>
                    <Role class="row-card"
                          company-name="Hermes Parcelnet Ltd."
                          title="Senior Developer"
                          start-date="July 2017"
                          end-date="November 2019"/>
                </b-row>
                <b-row align-h="center">
                    <div class="timeline-segment"/>
                    <Role class="row-card"
                          company-name="Hermes Parcelnet Ltd."
                          title="Developer"
                          start-date="July 2018"
                          end-date="July 2019"/>
                </b-row>
                <b-row align-h="center">
                    <div class="timeline-segment"/>
                    <Role class="row-card"
                          company-name="Hermes Parcelnet Ltd."
                          title="Junior Java Engineer"
                          start-date="August 2017"
                          end-date="July 2019"/>
                </b-row>
                <b-row align-h="center">
                    <div class="timeline-segment"/>
                    <Role class="row-card"
                          company-name="Dion Global Solutions"
                          title="Junior Developer"
                          start-date="July 2018"
                          end-date="August 2017"/>
                </b-row>
                <b-row align-h="center">
                    <div class="timeline-segment"/>
                    <Role class="row-card"
                          company-name="Omnicom Balfour Beatty"
                          title="Placement Student"
                          start-date="July 2018"
                          end-date="August 2017"/>
                </b-row>
                <b-row align-h="center">
                    <div class="timeline-segment"/>
                    <Role class="row-card"
                          company-name="University of York"
                          title="BEng. Computer Science With Year in Industry"
                          start-date="October 2011"
                          end-date="June - 2016"/>
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

    .timeline-segment{
        width: 10px;
        background: black;
    }
</style>

