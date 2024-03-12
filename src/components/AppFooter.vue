<script>
    export default {
        name: 'AppFooter',
    }
</script>

<template>
    <footer>
        <div class="container footer-top d-flex justify-content-between">
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
            <div class="footer-links d-flex">
                <div class="link-list d-flex flex-column gap-4">
                    <h3>Support</h3>
                    <ul class="list-unstyled d-flex flex-column gap-2">
                        <li>Contact Us</li>
                        <li>Contact Us</li>
                        <li>Contact Us</li>
                        <li>Contact Us</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div class="link-list d-flex flex-column gap-4">
                    <h3>Support</h3>
                    <ul class="list-unstyled d-flex flex-column gap-2">
                        <li>Contact Us</li>
                        <li>Contact Us</li>
                        <li>Contact Us</li>
                        <li>Contact Us</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div class="link-list d-flex flex-column gap-4">
                    <h3>Support</h3>
                    <ul class="list-unstyled d-flex flex-column gap-2">
                        <li>Contact Us</li>
                        <li>Contact Us</li>
                        <li>Contact Us</li>
                        <li>Contact Us</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
            <div class="contact-me d-flex flex-column gap-4">
                <h3>Contact Me</h3>
                <ul class="list-unstyled d-flex flex-column gap-4">
                    <li class="d-flex"><i class="fa-solid fa-location-arrow pt-2 pe-3"></i><span>4500 Mercantile plaza, suite<br>300, fort worth, TX, 76137, USA</span></li>
                    <li><i class="fa-solid fa-phone pe-3"></i>+1(817)901 3377</li>
                    <li><i class="fa-solid fa-envelope pe-3"></i>info@example.com</li>
                </ul>
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
            
            .footer-links{
                gap: 90px;
            }

            h3{
                margin: 0;
                color: $primaryColor;
            }

            span, li{
                color: $secondaryColor;
            }

            li i{
                color: $primaryColor;
            }

            
        }

        .footer-bottom{
            border-top: 1px solid gray;
        }
    }
</style>