<script>
    export default {
        name: 'AppFooter',
    }
</script>

<template>
    <footer>
        <div class="container footer-top">
            <div class="get-in-touch d-flex flex-column gap-4">
                <h3>Get In Touch</h3>
                <span>Have a Question for us?<br>we'll answer your problem here</span>
                <div class="socials col-6 d-flex gap-2">
                    <a href="#"><i class="fa-brands fa-square-facebook"></i></a>
                    <a href="#"><i class="fa-brands fa-pinterest-p"></i></a>
                    <a href="#"><i class="fa-brands fa-twitter"></i></a>
                    <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                    <a href="#"><i class="fa-brands fa-instagram"></i></a>
                </div>
            </div>
        </div>
        <div class="footer-bottom text-center p-4">
            <span class="text-white">Copyright 2022 by AttdogMilo.com</span>
        </div>
    </footer>
</template>

<style lang="scss">
@use '../styles/variables' as *;

    footer{
        background-color: black;
        
        .footer-top{
            height: 450px;
            padding-top: 145px;
            padding-bottom: 40px;
            

            h3{
                margin: 0;
                color: $primaryColor;
            }

            span{
                color: $secondaryColor;
            }
        }

        .footer-bottom{
            border-top: 1px solid gray;
        }
    }
</style>