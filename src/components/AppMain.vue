<script>
    import AppAboutUs from './AppAboutUs.vue';
    import AppService from './AppService.vue';
    import AppChoose from './AppChoose.vue';
    import AppRatings from './AppRatings.vue';
    import AppSubscribe from './AppSubscribe.vue';

    export default {
        name: 'AppMain',

        components: {
            AppAboutUs,
            AppService,
            AppChoose,
            AppRatings,
            AppSubscribe,
        }
    }
</script>

<template>
        <AppAboutUs></AppAboutUs>
        <AppService></AppService>
        <AppChoose></AppChoose>
        <AppRatings></AppRatings>
        <AppSubscribe></AppSubscribe>
</template>

<style lang="scss">

</style>