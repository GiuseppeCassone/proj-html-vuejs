<script>

    export default{
        name: 'AppSubscribe',
    }

</script>

<template>
    <div class="subscribe">
        <div class="container h-100 position-relative">
            <div class="row newsletter">
                <div class="col-6 news-img"><img src="../../public/img/news.png" alt=""></div>
                <div class="col-6 d-flex flex-column justify-content-center gap-3">
                    <h3 class="text-white">Subscribe to Our Newsletter</h3>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control rounded-0 py-2" placeholder="Your Email Here" aria-label="Recipient's username" aria-describedby="basic-addon2">
                        <span class="input-group-text rounded-0" id="basic-addon2">@</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use '../styles/variables' as *;

    .subscribe{
        width: 100%;
        height: 200px;
        
        .newsletter{
            width: 80%;
            height: 200px;
            margin-left: auto;
            margin-right: auto;

            position: absolute;
            bottom: -50%;
            left: 50%;
            transform: translateX(-50%);

            background-color: $primaryColor;
            border-radius: 20px;

            .news-img{
                position: relative;
                
                img{
                    width: 100%;
                    position: absolute;
                    bottom: -63px;
                    left: -20px;
                    transform: scale(0.7);
                }
            }

            .input-group-text{
                border-color: white;
                color: white;
                background-color: $primaryColor;
                cursor: pointer;
            }
        }
    }

</style>