<script>

    export default {
        name: 'AppRatings',
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
                <div class="col-8 ratings-slider">
                    <div class="rating-card d-flex flex-column gap-3 p-4">
                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <h4>Great Place</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, delectus officiis aperiam totam consequatur omnis. Facilis ex eum aut doloribus! Magnam quia nam beatae eius omnis necessitatibus et a ducimus.</p>
                        <div class="ratings-users d-flex gap-3">
                            <img src="../../public/img/t1.png" alt="">
                            <div class="d-flex flex-column gap-2">
                                <strong>Tobias May</strong>
                                <small>UI/UX Designer</small>
                            </div>
                        </div>
                    </div>
                    <div class="rating-card d-flex flex-column gap-3 p-4">
                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <h4>Great Place</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, delectus officiis aperiam totam consequatur omnis. Facilis ex eum aut doloribus! Magnam quia nam beatae eius omnis necessitatibus et a ducimus.</p>
                        <div class="ratings-users d-flex gap-3">
                            <img src="../../public/img/t1.png" alt="">
                            <div class="d-flex flex-column gap-2">
                                <strong>Tobias May</strong>
                                <small>UI/UX Designer</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="arrows-box d-flex justify-content-end gap-4 mt-3">
                <div class="arrow p-1"><img src="../../public/img/left-arrow.png" alt=""></div>
                <div class="arrow p-1"><img src="../../public/img/next.png" alt=""></div>
            </div>
        </div>
    </div>

</template>

<style lang="scss">
@use '../styles/variables' as *;

    .ratings{
        // height: 610px;
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
            gap: 20px;

            .rating-card{
                width: calc(100% / 2 - 20px / 2 * 1 );
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