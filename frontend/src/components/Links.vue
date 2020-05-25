<template>
    <b-button-group>
        <b-button variant="light" href="mailto:contact@alestew.com">
            <MailIcon/>
        </b-button>
        <b-button variant="light" target="_blank" rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/ajstewart/">
            <LinkedInIcon/>
        </b-button>
        <b-button variant="light" target="_blank" rel="noopener noreferrer"
                  href="https://github.com/alex-stewart">
            <GitHubIcon/>
        </b-button>
    </b-button-group>

</template>

<script>
    import GitHubIcon from './icons/GitHubIcon.vue'
    import LinkedInIcon from './icons/LinkedInIcon.vue'
    import MailIcon from './icons/MailIcon.vue'

    export default {
        name: 'links',
        components: {
            GitHubIcon,
            LinkedInIcon,
            MailIcon
        }
    }
</script>

<style scoped>
</style>