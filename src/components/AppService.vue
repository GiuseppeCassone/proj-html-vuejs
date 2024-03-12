<script>

    export default {
        name: 'AppService',
    }

</script>

<template>

    <div class="service position-relative">
        <div class="container">
            <div class="inner-service d-flex flex-column align-items-center justify-content-center gap-5">
                <span>Service</span>
                <h2 class="text-center">DogMilo Pet Care Services<br>For Your Best Friends.</h2>
                <div class="card-inner d-flex w-100">
                    <div class="card justify-content-center align-items-center gap-4">
                        <img src="../../public/img/d-1.png" alt="...">
                        <div class="card-body text-center p-0">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">The readable content of a page when looking at its layout</p>
                        </div>
                        <a href="#" class="btn btn-service"><img class="w-75 h-75" src="../../public/img/right.png" alt=""></a>
                    </div>
                    <div class="card justify-content-center align-items-center gap-4">
                        <img src="../../public/img/d-1.png" alt="...">
                        <div class="card-body text-center p-0">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">The readable content of a page when looking at its layout</p>
                        </div>
                        <a href="#" class="btn btn-service"><img class="w-75 h-75" src="../../public/img/right.png" alt=""></a>
                    </div>
                    <div class="card justify-content-center align-items-center gap-4">
                        <img src="../../public/img/d-1.png" alt="...">
                        <div class="card-body text-center p-0">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">The readable content of a page when looking at its layout</p>
                        </div>
                        <a href="#" class="btn btn-service"><img class="w-75 h-75" src="../../public/img/right.png" alt=""></a>
                    </div>
                    <div class="card justify-content-center align-items-center gap-4">
                        <img src="../../public/img/d-1.png" alt="...">
                        <div class="card-body text-center p-0">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">The readable content of a page when looking at its layout</p>
                        </div>
                        <a href="#" class="btn btn-service"><img class="w-75 h-75" src="../../public/img/right.png" alt=""></a>
                    </div>
                    <div class="card justify-content-center align-items-center gap-4">
                        <img src="../../public/img/d-1.png" alt="...">
                        <div class="card-body text-center p-0">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">The readable content of a page when looking at its layout</p>
                        </div>
                        <a href="#" class="btn btn-service"><img class="w-75 h-75" src="../../public/img/right.png" alt=""></a>
                    </div>     
                </div>
            </div>
        </div>
        <img class="dog-img-left" src="../../public/img/dog-left.png" alt="">
        <img class="dog-img" src="../../public/img/dog-logo.png" alt="">
    </div>

</template>

<style lang="scss">
@use '../styles/variables' as *;

    .service{
        background-color: #f5f5f5;

        .inner-service{
            padding: 50px 0;

            .card-inner{
                gap: 40px;

                .card{
                    width: calc(100% / 5 - 40px / 5 * 4);
                    padding: 20px;
                    border-radius: 120px;
                    background-color: $primaryColor;
    
                    img{
                        width: 80px;
                        height: 80px;
                    }
    
                    .btn-service{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 60px;
                        height: 60px;
                        border-radius: 50%;
                        background-color: $tertiaryColor;
                    }
                }
            }

        }

        .dog-img-left{
            width: 150px;
            position: absolute;
            top: 40px;
            left: 0;
        }
    }
</style>