<script>
    export default {
        name: 'AppNavContacts',
    }
</script>

<template>

    <div class="nav-contacts">
        <div class="container">
            <div class="row">
                <div class="contacts col-6 d-flex gap-4">
                    <span><i class="fa-solid fa-envelope pe-3"></i>info@example.com</span>
                    <span><i class="fa-solid fa-phone pe-3"></i>+1(817)901 3377</span>
                </div>
                <div class="socials col-6 d-flex gap-2 justify-content-end align-items-center">
                    <a href="#"><i class="fa-brands fa-square-facebook"></i></a>
                    <a href="#"><i class="fa-brands fa-pinterest-p"></i></a>
                    <a href="#"><i class="fa-brands fa-twitter"></i></a>
                    <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                    <a href="#"><i class="fa-brands fa-instagram"></i></a>
                </div>
            </div>
        </div>
    </div>
    
</template>

<style lang="scss">
@use '../styles/variables' as *;

    .nav-contacts{
        padding: 10px 0;
        background-color: $fourthColor;

        .contacts{
            color: white;
            
            i{
                color: $primaryColor;
            }
        }

    }
    
    .socials{
        .fa-brands {
            font-size: 16px;
            padding: 4px;
            border-radius: 20%;
            color: white;
        }
        .fa-square-facebook{              
            background-color: blue;
        }

        .fa-pinterest-p{
            padding-left: 5px;
            padding-right: 5px;
            background-color: #BC2C4D;
        }

        .fa-twitter{
            background-color: #81D1D4;
        }

        .fa-linkedin-in{
            padding-left: 5px;
            padding-right: 5px;
            background-color: #0963CB;
        }

        .fa-instagram{
            padding-left: 5px;
            padding-right: 5px;
            background-color: purple;
        }
    }
</style>