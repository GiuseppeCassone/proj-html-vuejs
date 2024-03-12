<script>
    export default {
        name: 'AppCard',

        props: {
            cardItem: Object,
        },


    }
</script>

<template>
    <div class="card justify-content-center align-items-center gap-4">
        <img :src="cardItem.image" :alt="cardItem.title">
        <div class="card-body text-center p-0">
            <h5 class="card-title">{{ cardItem.title }}</h5>
            <p class="card-text">{{ cardItem.text }}</p>
        </div>
        <a href="#" class="btn btn-service"><img class="w-75 h-75" src="../../public/img/right.png" alt=""></a>
    </div>
</template>

<style lang="scss">

</style>