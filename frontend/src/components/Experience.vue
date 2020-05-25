<template>
    <div id="experience">
        <b-container>
            <b-col>
                <b-row align-h="center">
                    <div class="timeline-segment"/>
                    <Role class="row-card"
                          company-name="The Hut Group"
                          company-website="https://www.thg.com"
                          title="Senior Software Engineer"
                          start-date="November 2019"
                          end-date="Present"/>
                </b-row>
                <b-row align-h="center">
                    <div class="timeline-segment"/>
                    <Role class="row-card"
                          company-name="Hermes"
                          company-website="https://www.hermesworld.com/us/about-us/hermes-group/hermes-uk/hermes-uk"
                          title="Senior Developer"
                          start-date="July 2017"
                          end-date="November 2019"/>
                </b-row>
                <b-row align-h="center">
                    <div class="timeline-segment"/>
                    <Role class="row-card"
                          company-name="Hermes"
                          company-website="https://www.hermesworld.com/us/about-us/hermes-group/hermes-uk/hermes-uk"
                          title="Developer"
                          start-date="July 2018"
                          end-date="July 2019"/>
                </b-row>
                <b-row align-h="center">
                    <div class="timeline-segment"/>
                    <Role class="row-card"
                          company-name="Hermes"
                          company-website="https://www.hermesworld.com/us/about-us/hermes-group/hermes-uk/hermes-uk"
                          title="Junior Java Engineer"
                          start-date="August 2017"
                          end-date="July 2019"/>
                </b-row>
                <b-row align-h="center">
                    <div class="timeline-segment"/>
                    <Role class="row-card"
                          company-name="Dion Global Solutions"
                          company-website="https://www.dionglobal.com/"
                          title="Junior Developer"
                          start-date="July 2018"
                          end-date="August 2017"/>
                </b-row>
                <b-row align-h="center">
                    <div class="timeline-segment"/>
                    <Role class="row-card"
                          company-name="Omnicom Engineering"
                          company-website="https://www.balfourbeatty.com/expertise/rail-engineering/digital-technology/omnicom-balfour-beatty"
                          title="Placement Student"
                          start-date="July 2018"
                          end-date="August 2017"/>
                </b-row>
            </b-col>
        </b-container>
    </div>
</template>

<script>
    import Role from './experience/Role.vue'

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
        width: 50%;
        margin: 10px;
    }

    .timeline-segment{
        width: 10px;
        background: black;
    }
</style>

