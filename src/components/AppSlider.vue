<script>

    export default {
        name: 'AppSlider',
    }

</script>

<template>

        <div id="carouselExample" class="carousel slide">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="container h-100 d-flex align-items-center">
                        <div class="content-slider w-50 p-5 text-white">
                            <h1 class="mb-3">Welcome to<br>DogMilo Pets</h1>
                            <p class="mb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium distinctio sint eius illum amet.</p>
                            <button class="btn me-2">Get Started</button>
                            <img src="../../public/img/play.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="container h-100 d-flex align-items-center">
                        <div class="content-slider w-50 p-5 text-white">
                            <h1 class="mb-3">Welcome to<br>DogMilo Pets</h1>
                            <p class="mb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium distinctio sint eius illum amet.</p>
                            <button class="btn me-2">Get Started</button>
                            <img src="../../public/img/play.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="container h-100 d-flex align-items-center">
                        <div class="content-slider w-50 p-5 text-white">
                            <h1 class="mb-3">Welcome to<br>DogMilo Pets</h1>
                            <p class="mb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium distinctio sint eius illum amet.</p>
                            <button class="btn me-2">Get Started</button>
                            <img src="../../public/img/play.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

</template>

<style lang="scss">

    .carousel-inner{
        height: 700px;

        .carousel-item{
            height: 100%;
            background-image: url(../../public/img/b.png);
            background-size: cover;

            .btn{
                padding: 10px 25px;

            }

            img{
                width: 9%;
                padding: 10px;
                background-color: #70d0f7;
                border-radius: 7px;
            }
        }
    }
</style>