<template>
    <b-button-group>
        <b-button variant="light" href="mailto:contact@alestew.com">
            <BaseIcon>
                <MailIcon/>
            </BaseIcon>
        </b-button>
        <b-button variant="light" target="_blank" rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/ajstewart/">
            <BaseIcon>
                <LinkedInIcon/>
            </BaseIcon>
        </b-button>
        <b-button variant="light" target="_blank" rel="noopener noreferrer"
                  href="https://github.com/alex-stewart">
            <BaseIcon>
                <GitHubIcon/>
            </BaseIcon>
        </b-button>
    </b-button-group>

</template>

<script>
    import GitHubIcon from './icons/GitHubIcon.vue'
    import LinkedInIcon from './icons/LinkedInIcon.vue'
    import MailIcon from './icons/MailIcon.vue'
    import BaseIcon from "./icons/IconBase";

    export default {
        name: 'links',
        components: {
            BaseIcon,
            GitHubIcon,
            LinkedInIcon,
            MailIcon
        }
    }
</script>
