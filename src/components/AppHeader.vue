<script>
    import AppNavContacts from './AppNavContacts.vue';
    import AppNav from './AppNav.vue';
    import AppSlider from './AppSlider.vue';

    import { store } from '../store.js';

    export default {
        name: 'AppHeader',

        data() {

            return {
                store,
            }
        },

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