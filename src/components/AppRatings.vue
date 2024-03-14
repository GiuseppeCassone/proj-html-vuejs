<script>

    export default {
        name: 'AppRatings',

            data() {
                return {
                            slide: [
                        {
                            rating: 5,
                            title: 'Great Place',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, delectus officiis aperiam totam consequatur omnis. Facilis ex eum aut doloribus! Magnam quia nam beatae eius omnis necessitatibus et a ducimus.',
                            user: {
                                name: 'Tobias May',
                                role: 'UI/UX Designer',
                                image: '../../public/img/t1.png'
                            }
                        },
                        {
                            rating: 5,
                            title: 'Great Place',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, delectus officiis aperiam totam consequatur omnis. Facilis ex eum aut doloribus! Magnam quia nam beatae eius omnis necessitatibus et a ducimus.',
                            user: {
                                name: 'Tobias May',
                                role: 'UI/UX Designer',
                                image: '../../public/img/t1.png'
                            }
                        },
                        {
                            rating: 5,
                            title: 'Great Place',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, delectus officiis aperiam totam consequatur omnis. Facilis ex eum aut doloribus! Magnam quia nam beatae eius omnis necessitatibus et a ducimus.',
                            user: {
                                name: 'Tobias May',
                                role: 'UI/UX Designer',
                                image: '../../public/img/t1.png'
                            }
                        },
                        {
                            rating: 5,
                            title: 'Great Place',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, delectus officiis aperiam totam consequatur omnis. Facilis ex eum aut doloribus! Magnam quia nam beatae eius omnis necessitatibus et a ducimus.',
                            user: {
                                name: 'Tobias May',
                                role: 'UI/UX Designer',
                                image: '../../public/img/t1.png'
                            }
                        },

                    ],
                }
            },

            methods: {
                nextRating() {
                const scrollTarget = this.$refs.myScrollTarget;
                const ratingWidth = this.$refs.myScrollTarget.offsetWidth / 2;
                const ratingsScrollWidth = scrollTarget.scrollWidth;
                const totalWidth = ratingsScrollWidth - scrollTarget.offsetWidth; 

                if (totalWidth - scrollTarget.scrollLeft < this.slide.length) {
                    scrollTarget.scrollLeft = 0;
                } else {
                    scrollTarget.scrollLeft += ratingWidth;
                }
            },

            prevRating() {
                const ratingWidth = this.$refs.myScrollTarget.offsetWidth / 2;
                const scrollTarget = this.$refs.myScrollTarget;

                if (scrollTarget.scrollLeft === 0) {
                    scrollTarget.scrollLeft = scrollTarget.scrollWidth;
                } else {
                    scrollTarget.scrollLeft -= ratingWidth;
                }
            },
        }

    }

</script>

<template>

    <div class="ratings">
        <div class="container">
            <div class="row">
                <div class="col-4 d-flex flex-column gap-4">
                    <div class="review">
                        <img src="../../public/img/dog-icon.png" alt="">
                        <span class="ps-4">Review & Rating</span>
                    </div>
                    <h2>Over 8000 Customers With 5-Star Review</h2>
                    <p>It is a long established fact that a reader will be distructed by the readable content of a page when looking at its layout.</p>
                    <div class="stars pb-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                </div>
                <div class="col-8 ratings-slider" ref="myScrollTarget">
                    <div class="rating-card" v-for="review in slide">
                        <div class="d-flex flex-column gap-3 p-4">
                            <div class="stars">
                                <i class="fa-solid fa-star" v-for="n in review.rating"></i>
                            </div>
                            <h4>{{ review.title }}</h4>
                            <p>{{ review.content }}</p>
                            <div class="ratings-users d-flex gap-3">
                                <img :src="review.user.image" alt="">
                                <div class="d-flex flex-column gap-2">
                                    <strong>{{ review.user.name }}</strong>
                                    <small>{{ review.user.role }}</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="arrows-box d-flex justify-content-end gap-4 mt-3">
                <div class="arrow p-1" @click="prevRating()"><img src="../../public/img/left-arrow.png" alt=""></div>
                <div class="arrow p-1" @click="nextRating()"><img src="../../public/img/next.png" alt=""></div>
            </div>
        </div>
    </div>

</template>

<style lang="scss">
@use '../styles/variables' as *;

    .ratings{
     
        padding-top: 90px;

        .fa-star{
            color: $tertiaryColor;
        }

        .arrow{
            background-color: $primaryColor;
            cursor: pointer;

            &:hover{
                background-color: $fourthColor;
            }

            img{
                width: 40px;
            }
        }

        .ratings-slider{
            display: flex;
            width: 800px;
        
            gap: 20px;
            overflow: hidden;
            scroll-behavior: smooth;

            .rating-card{
                width: calc(100% / 2 - 20px / 2 * 1 );
                
                flex-shrink: 0;
                background-color: $secondaryColor;

                .ratings-users{

                    img{
                        width: 60px;
                        height: 60px;
                        border-radius: 50%;
                        
                    }
                }
            }
        }

    }

</style>