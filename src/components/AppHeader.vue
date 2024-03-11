<script>
    import AppNavContacts from './AppNavContacts.vue';
    import AppNav from './AppNav.vue';

    export default {
        name: 'AppHeader',

        components: {
            AppNavContacts,
            AppNav,
        }
    }
</script>

<template>

    <AppNavContacts></AppNavContacts>
    <AppNav></AppNav>
    
</template>

<style lang="scss">

</style>