<template>
	
		<div class="pcontent ion-padding">
			<div class="foods">
				<img :src="image" alt="food" class="foodimg" />
			</div>
			<div class="foodproduct ">
				<p class="title">{{ name }}</p>
				<p class="title2 line-clamp-1">{{ description }}</p>
				<div class="flex-between">
					<ion-text class="pricetext"> P {{ price }} </ion-text>
					<ion-text> Rate {{ rate }} </ion-text>
					<!-- <img :src="rate"alt="rating" /> -->
				</div>
			</div>
		</div>
</template>

<script setup lang="ts">
import {
	IonText,
} from "@ionic/vue"

const props = defineProps({
	name: {
		type: String,
	},
	description: {
		type: String,
		default: "",
	},
	price: {
		type: Number,
	},
	image: {
		type: String,
		default: "/assets/product/food.png",
	},
	rate: {
		type: Number,
		// default: "/assets/product/Rating.svg",
	},
});
</script>
