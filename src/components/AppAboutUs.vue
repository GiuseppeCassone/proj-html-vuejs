<script>

    export default {
        name: 'AppAboutUs',
    }

</script>

<template>
    <div class="about-us position-relative">
        <div class="container about-inner">
            <div class="row">
                <div class="col-6"><img src="../../public/img/about.png" alt=""></div>
                <div class="col-6 d-flex flex-column justify-content-center ps-5 gap-4">
                    <div class="about-logo">
                        <img src="../../public/img/dog-icon.png" alt="">
                        <span class="ps-3">About Us</span>
                    </div>
                    <h1>Welcome DogMilo Pets</h1>
                    <p class="fs-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga esse excepturi soluta dolorem. Laborum, earum architecto dolor magnam aliquam temporibus corrupti ex excepturi labore at est consectetur, vitae, cum repellat?</p>
                    <p class="fs-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, magni vitae repudiandae aliquid provident nostrum beatae nesciunt repellat quis iusto reprehenderit rem! Asperiores earum deleniti aperiam similique vel. Natus, doloremque?</p>
                </div>
            </div>
        </div>
        <img class="dog-img" src="../../public/img/dog-logo.png" alt="">
    </div>

</template>

<style lang="scss">

    .about-us{
        background-color: white;

        .about-inner{
            padding: 90px 20px;
        }

    }
    
    .dog-img{
        width: 200px;
        position: absolute;
        top: 50px;
        right: 0;
        color: gray;
    }
    
</style>