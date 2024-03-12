<script>

import { store } from '../store.js';

import AppNavList from './AppNavList.vue';

    export default {
        name: 'AppNav',

        components: {
            AppNavList,
        },

        data() {

            return {
                store,
            }
        },
       
    }
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
            <a class="navbar-brand" href="#"><img src="../../public/img/logo.png" alt=""></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end gap-3" id="navbarNav">
                <ul class="navbar-nav gap-3">
                    <AppNavList v-for="currentNavLink in store.navLinks" :navLinks="currentNavLink"></AppNavList>
                    <!-- <li class="nav-item">
                    <a class="nav-link" href="#">Features</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Pricing</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#" >Link</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#" >Link</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#" >Link</a>
                    </li> -->
                </ul>
                <button class="btn">Get In Touch!</button>
            </div>
        </div>
    </nav>
</template>

<style lang="scss">
@use '../styles/variables' as *;

    .navbar{
        padding: 20px 0;

        .nav-item:hover a{
            color: $primaryColor;
        }

    }
    
    .btn{
        padding: 10px 20px;
        border-radius: 30px;
        background-color: $primaryColor;
        color: white;

        &:hover{
            background-color: #173b67;
            color: white;
        }
    }
    
</style>