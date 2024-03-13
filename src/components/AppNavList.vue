<script>

    export default {
        name: 'AppNavList',

        props: {
            navLinks: String,
        }
       
    }
</script>

<template>

    <li class="nav-item">
        <a class="nav-link" href="#">{{ navLinks }}</a>
    </li>

</template>

<style lang="scss">

</style>