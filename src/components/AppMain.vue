<script>
    import AppAboutUs from './AppAboutUs.vue';
    import AppService from './AppService.vue';
    import AppChoose from './AppChoose.vue';
    import AppRatings from './AppRatings.vue';

    export default {
        name: 'AppMain',

        components: {
            AppAboutUs,
            AppService,
            AppChoose,
            AppRatings,
        }
    }
</script>

<template>
    <AppAboutUs></AppAboutUs>
    <AppService></AppService>
    <AppChoose></AppChoose>
    <AppRatings></AppRatings>
</template>

<style lang="scss">

</style>