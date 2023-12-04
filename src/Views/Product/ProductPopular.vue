<template>
	<ion-page>
		<!-- Header -->
		<ProductHeader />
		<ion-content>
			<SideBar />

			<!-- Main Content -->
			<div>
				<div class="ion-padding-end ion-padding-start">
					<ion-searchbar
						placeholder="try our new Steak Fries Veggies"
						class="custom2"></ion-searchbar>
				</div>
				<!-- Button Slides -->
				<swiper
					:slidesPerView="'auto'"
					:spaceBetween="8"
					class="mySwiper productswiper ml mt"
				>
					<swiper-slide>
						<ion-button class="buttons"> All </ion-button>
					</swiper-slide>
					<swiper-slide>
						<ion-button class="buttongrey"> Breakfast </ion-button>
					</swiper-slide>
					<swiper-slide>
						<ion-button class="buttongrey"> Chicken </ion-button>
					</swiper-slide>
					<swiper-slide>
						<ion-button class="buttongrey"> Seafood </ion-button>
					</swiper-slide>
					<swiper-slide>
						<ion-button class="buttongrey"> Nicki </ion-button>
					</swiper-slide>
					<swiper-slide>
						<ion-button class="buttongrey"> Minaj </ion-button>
					</swiper-slide>
				</swiper>
				<!-- End Button Slides -->
			</div>

			<!-- Products  -->
			<div class="ion-padding">
				<div class="grid-container">
					<div v-for="item in product" :key="item.id">
						<ProductBonchon 
							:name="item.name"
							:description="item.description"
							:price="item.price"
							:image="item.image"
							:rate="item.ratings"
						/>
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
	import { Swiper, SwiperSlide } from "swiper/vue";
	import { IonContent, IonSearchbar, IonButton, IonPage } from "@ionic/vue";
	import { ref, onMounted } from "vue";
	import "swiper/css";
	import "@ionic/vue/css/ionic-swiper.css";
	import axios from "axios";

	const bearerToken =
		"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3BzaS1leGFtLWFwaS5wcmF4eHlzLmRldi9hcGkvYXV0aC9sb2dpbiIsImlhdCI6MTcwMTY4NDI4MSwiZXhwIjoxNzAxNjg3ODgxLCJuYmYiOjE3MDE2ODQyODEsImp0aSI6InhSdUhYUHdYY1NtUDMzZXAiLCJzdWIiOiIxIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.Zu0j0suMpXhjtchIfHlqDb9Xb53YaZNYCWgb-LcmCbA"; // Your Bearer token here

	const product = ref([]);

	const fetchData = async () => {
		try {
			const response = await axios.get(
				"https://psi-exam-api.praxxys.dev/api/products",
				{
					headers: {
						Authorization: `Bearer ${bearerToken}`,
					},
				}
			);
			product.value = response.data.data.data;
			console.log(JSON.stringify(response.data));
		} catch (error) {
			console.log(error);
		}
	};

	onMounted(() => {
		fetchData();
	});
</script>
