<template>
    <ion-page class="z-50">
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
                <swiper-slide v-for="i in 10" :key="i">
                    <img class="special" src="/assets/homepage/Special.png">
                </swiper-slide>
            </swiper>
            <!-- End SWIPER FOR SPECIAL OFFER -->

            <!-- SWIPER FOR CATEGORY -->
            <div>
                <h2 class="ion-padding">Category</h2>
                <swiper :slides-per-view="1.65" :spaceBetween="8" class="ml">
                    <swiper-slide v-for="i in 10" :key="i">
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
                        <div v-for="item in product" :key="item.id">
                            <router-link :to="{ name: 'Summary', params: { id: item.id } }">
                                <ProductBonchon :name="item.name" :description="item.description" :price="item.price"
                                    :image="item.image" :rate="item.ratings" />
                            </router-link>
                        </div>
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

import { ref, onMounted } from "vue";
import axios from "axios";

const username = ref("user@praxxys.ph");
const password = ref("password");
const product = ref([]);


let accessToken = '';

const fetchToken = async () => {
    try {
        const response = await axios.post(
            "https://psi-exam-api.praxxys.dev/api/auth/login",
            { email: username.value, password: password.value }
        );
        accessToken = response.data.access_token;
        // console.log(JSON.stringify(accessToken));
    } catch (error) {
        console.error(error);
    }
};

const fetchData = async () => {
    try {
        await fetchToken();

        const response = await axios.get(
            "https://psi-exam-api.praxxys.dev/api/products",
            { headers: { Authorization: `Bearer ${accessToken}` } }
        );
        product.value = response.data.data.data;
        // console.log(JSON.stringify(response.data));
    } catch (error) {
        console.log(error);
    }
};


onMounted(() => {
    fetchData();
});
</script>
