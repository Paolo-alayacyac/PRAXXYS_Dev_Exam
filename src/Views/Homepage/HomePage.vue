<template>
    <ion-page>
        <!-- header -->
        <TopNavigation />
        <ion-content>
            <SideBar />

            <!-- section 1 -->
            <div class="content">
                <div class="flex">
                    <img alt="Logo" src="/assets/homepage/Logo.png" />
                    <div class="ion-padding-start">
                        <p class="p1">Anneoyong, Chou!</p>
                        <p class="p2">What do you want <br />to eat?</p>
                    </div>
                </div>

                <ion-searchbar placeholder="try our new Steak Fries Veggies" class="custom">
                </ion-searchbar>
            </div>

            <div class="flex offer ion-padding">
                <h2>Special Offers!</h2>
                <div class="flex">
                    <ion-button href="/" fill="clear" color="danger" class="viewall">
                        View All
                    </ion-button>
                    <img class="ion-padding-start" src="/assets/homepage/Vector.svg">
                </div>
            </div>

            <!-- SWIPER FOR SPECIAL OFFER -->
            <swiper :slides-per-view="1.1" :spaceBetween="8" class="ml">
                <swiper-slide>
                    <img class="special" src="/assets/homepage/Special.png">
                </swiper-slide>
                <swiper-slide>
                    <img class="special" src="/assets/homepage/Special.png">
                </swiper-slide>
                <swiper-slide>
                    <img class="special" src="/assets/homepage/Special.png">
                </swiper-slide>
            </swiper>
            <!-- End SWIPER FOR SPECIAL OFFER -->

            <!-- SWIPER FOR CATEGORY -->
            <div>
                <h2 class="ion-padding">Category</h2>
                <swiper :slides-per-view="1.65" :spaceBetween="8" class="ml">
                    <swiper-slide>
                        <img class="special" src="/assets/homepage/category.png">
                    </swiper-slide>
                    <swiper-slide>
                        <img class="special" src="/assets/homepage/category.png">
                    </swiper-slide>
                    <swiper-slide>
                        <img class="special" src="/assets/homepage/category.png">
                    </swiper-slide>
                    <swiper-slide>
                        <img class="special" src="/assets/homepage/category.png">
                    </swiper-slide>
                    <swiper-slide>
                        <img class="special" src="/assets/homepage/category.png">
                    </swiper-slide>
                </swiper>
            </div>
            <!-- End SWIPER FOR CATEGORY -->

            <div>
                <h2 class="ion-padding">What's New?</h2>
                <img class="news" src="/assets/homepage/capture.png">
            </div>

            <!-- Popular Products -->
            <div class="homepage">
                <h2 class="ion-padding">Most Popular</h2>
                <section>
                    <div class="grid-container ion-padding-start ion-padding-end">
                        <ProductBonchon v-for="i in 4" :key="i"></ProductBonchon>
                    </div>
                </section>
            </div>
            <!-- End Popular Products -->

            <!-- fixed Button -->
            <a href="/product">
                <HomeButton class="homebutton">Order Now!</HomeButton>
            </a>
            <!-- End fixed Button -->

        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import SideBar from "../../partials/SideBar.vue";
import ProductBonchon from "../components/ProductBonchon.vue";
import TopNavigation from "./../../partials/TopNavigation.vue";
import HomeButton from '../components/HomeButton.vue';

import {
    Swiper,
    SwiperSlide
} from 'swiper/vue';

import {
    IonButton,
    IonSearchbar,
    IonPage,
    IonContent,
} from "@ionic/vue";

import 'swiper/css';
import '@ionic/vue/css/ionic-swiper.css';
</script>