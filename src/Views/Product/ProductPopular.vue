<template>
    <ion-page>
        <!-- Header -->
        <ProductHeader />
        <ion-content>
            <SideBar />

            <!-- Main Content -->
            <div>
                <div class="ion-padding-end ion-padding-start">
                    <ion-searchbar placeholder="try our new Steak Fries Veggies" class="custom2">
                    </ion-searchbar>
                </div>
                <!-- Button Slides -->
                <swiper :slidesPerView="'auto'" :spaceBetween="8" class="mySwiper productswiper ml mt">
                    <swiper-slide>
                        <ion-button class="buttons">
                            All
                        </ion-button>
                    </swiper-slide>
                    <swiper-slide>
                        <ion-button class="buttongrey">
                            Breakfast
                        </ion-button>
                    </swiper-slide>
                    <swiper-slide>
                        <ion-button class="buttongrey">
                            Chicken
                        </ion-button>
                    </swiper-slide>
                    <swiper-slide>
                        <ion-button class="buttongrey">
                            Seafood
                        </ion-button>
                    </swiper-slide>
                    <swiper-slide>
                        <ion-button class="buttongrey">
                            Nicki
                        </ion-button>
                    </swiper-slide>
                    <swiper-slide>
                        <ion-button class="buttongrey">
                            Minaj
                        </ion-button>
                    </swiper-slide>
                </swiper>
                <!-- End Button Slides -->
            </div>

            <!-- Products  -->
            <div class="ion-padding">
                <div class="grid-container">
                    <ProductBonchon v-for="i in 8" :key="i"></ProductBonchon>
                </div>
            </div>
            <!-- Products  -->
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import SideBar from "../../partials/SideBar.vue";
import ProductBonchon from "../components/ProductBonchon.vue";
import ProductHeader from "../components/ProductHeader.vue"

import {
    Swiper,
    SwiperSlide
} from 'swiper/vue';

import {
    IonContent,
    IonSearchbar,
    IonButton,
    IonPage,
} from "@ionic/vue";

import 'swiper/css';
import '@ionic/vue/css/ionic-swiper.css';
</script>