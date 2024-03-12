<script>

    export default {
        name: 'AppChoose',
    }

</script>

<template>

    <div class="choose d-flex">
            <div class="col-left p-0"><img class="w-100" src="../../public/img/why.png" alt=""></div>
            <div class="col-right p-5">
                <div class="choose-logo mb-3">
                    <img src="../../public/img/dog-icon.png" alt="">
                    <span class="ps-4">Choose Us</span>
                </div>
                <h2 class="mb-5">Why Choose Us?</h2>
                <div class="row">
                    <div class="col-12 choose-us">
                        <img src="../../public/img/w-3.png" alt="">
                        <div class="ps-4">
                            <h4 class="mb-3">Safety First</h4>
                            <p>It is a long established fact that a reader will be distructed by the readable content of a page when looking at its layout.</p>
                        </div>
                    </div>
                    <div class="col-10 offset-2 choose-us">
                        <img src="../../public/img/w-2.png" alt="">
                        <div class="ps-4">
                            <h4 class="mb-3">Play Yards</h4>
                            <p>It is a long established fact that a reader will be distructed by the readable content of a page when looking at its layout.</p>
                        </div>
                    </div>
                    <div class="col-8 offset-4 choose-us">
                        <img src="../../public/img/w-1.png" alt="">
                        <div class="ps-4">
                            <h4 class="mb-3">Monitor Your Pets</h4>
                            <p>It is a long established fact that a reader will be distructed by the readable content of a page when looking at its layout.</p>
                        </div>
                    </div>
                </div>
            </div>
    </div>

</template>

<style lang="scss">
    .choose{
        .col-left{
            width: 50%;
        }

        .col-right{
            width: 50%;
        }

        .choose-us{
            display: flex;
            flex-direction: row;
    
            img{
                width: 150px;
                height: 150px;
            }
        }
    }

</style>