<script>

    export default {
        name: 'AppFooterList',

        props: {
            links: Object,
        },
       
    }
</script>

<template>

        <div class="link-list d-flex flex-column gap-4">
            <h3>{{ links.title }}</h3>
            <ul class="list-unstyled d-flex flex-column gap-2">
                <li v-for="currentListLink in links.links">{{ currentListLink }}</li>
            </ul>
        </div>

</template>

<style lang="scss">

</style>