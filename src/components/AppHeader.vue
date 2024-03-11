<script>
    import AppNavContacts from './AppNavContacts.vue';
    import AppNav from './AppNav.vue';
    import AppSlider from './AppSlider.vue';

    export default {
        name: 'AppHeader',

        components: {
            AppNavContacts,
            AppNav,
            AppSlider,
        }
    }
</script>

<template>

    <AppNavContacts></AppNavContacts>
    <AppNav></AppNav>
    <AppSlider></AppSlider>
    
</template>

<style lang="scss">

</style>