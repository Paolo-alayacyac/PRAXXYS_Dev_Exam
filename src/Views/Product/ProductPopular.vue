<template>
	<ion-page>
		<!-- Header -->
		<ProductHeader class="z-0"/>
		<ion-content>
			<SideBar />

			<!-- Main Content -->
			<div>
				<div class="ion-padding-end ion-padding-start">
					<ion-searchbar placeholder="try our new Steak Fries Veggies" class="custom2"></ion-searchbar>
				</div>
				<!-- Button Slides -->
				<swiper :slidesPerView="'auto'" :spaceBetween="8" class="productswiper swiper_layout ml mt">
					<swiper-slide class="swiper_layout">
						<ion-button class="buttons"> All </ion-button>
					</swiper-slide>
					<swiper-slide class="swiper_layout" v-for="data in category" :key="data.id">
						<ion-button class="buttongrey"> {{ data.category }} </ion-button>
					</swiper-slide>
				</swiper>
				<!-- End Button Slides -->
			</div>

			<!-- Products  -->
			<div class="ion-padding">
				<div class="grid-container">
					<div v-for="item in product" :key="item.id">
						<router-link :to="{ name: 'Summary', params: { id: item.id } }">
							<ProductBonchon 
								:name="item.name" 
								:description="item.description" 
								:price="item.price"
								:image="item.image" 
								:rate="item.ratings" 
							/>
						</router-link>
					</div>
				</div>
			</div>
			<!-- Products  -->
		</ion-content>
	</ion-page>
</template>

<script setup lang="ts">
import SideBar from "../../partials/SideBar.vue";
import ProductBonchon from "../components/ProductBonchon.vue";
import ProductHeader from "../components/ProductHeader.vue";
import { 
	IonContent, 
	IonSearchbar, 
	IonButton, 
	IonPage 
} from "@ionic/vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "@ionic/vue/css/ionic-swiper.css";

import { ref, onMounted } from "vue";
import axios from "axios";

const product = ref([]);

const fetchData = async () => {
	try {
		const storedTokens = localStorage.getItem("token");

		if (!storedTokens) {
            console.error("Token not found in local storage");
            return;
        }

        const tokenData = JSON.parse(storedTokens);
        const accessToken = tokenData.access_token;
		
		const response = await axios.get(
			"https://psi-exam-api.praxxys.dev/api/products",
			{ headers: { Authorization: `Bearer ${accessToken}` } }
		);
		product.value = response.data.data.data;
		console.log(JSON.stringify(response.data));
	} catch (error) {
		console.log(error);
	}
};

const category = ref ([
	{id: 1, category: 'Chicken'},
	{id: 2, category: 'Seafood'},
	{id: 3, category: 'Nicki'},
	{id: 4, category: 'Minaj'},
])

onMounted(() => {
	fetchData();
});
</script>
