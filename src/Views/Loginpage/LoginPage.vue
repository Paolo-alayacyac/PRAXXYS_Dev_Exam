<template>
	<div class="mx-4 z-0 h-[100%]">
		<img
			class="pt-9"
			src="/assets/icon/Logo.png" />
		<p class="text-2xl font-bold pt-6">Bonjour!</p>
		<p class="text-gray-600 text-sm pt-2">
			Welcome to the all-new FastFood mobile app. Kindly log in to your
			account. Thank you!
		</p>

		<p
			v-if="errorMessage"
			class="text-red-500 mt-8 flex justify-center">
			{{ errorMessage }}
		</p>


		<div class="w-full h-[60px] relative mt-6">
			<div
				class="w-full h-[60px] absolute left-0 top-0 bg-gray-50 rounded-2xl border border-gray-500"></div>
			<div
				class="absolute left-[16px] top-[10px] text-gray-500 text-xs font-normal font-Nunito">
				username
			</div>
			<ion-input
				class="absolute left-[10px] w-[95%] top-[20px] right-10 text-base font-normal text-black"
				v-model="username"  placeholder="Enter Username"/>
			<div
				class="w-18 h-0 left-138 top-29 absolute origin-top-left rotate-90 border border-gray-500"></div>
		</div>

		<div class="w-full h-[60px] relative mt-6">
			<div
				class="w-full h-[60px] absolute left-0 top-0 bg-gray-50 rounded-2xl border border-gray-500"></div>
			<div
				class="absolute left-[16px] top-[10px] text-gray-500 text-xs font-normal font-Nunito">
				password
			</div>
			<ion-input
				class="absolute left-[10px] w-[95%] top-[20px] right-10 text-base font-normal text-black"
				v-model="password" placeholder="Enter Password"/>
			<div
				class="w-18 h-0 left-138 top-29 absolute origin-top-left rotate-90 border border-gray-500"></div>
		</div>

		<div class="mt-12">
			<a @click="performLogin">
				<Button>Login</Button>
			</a>
		</div>

		<a class="flex mt-6 text-red-500 justify-center item-center">
			Login as a guest
		</a>

		<div class="flex h-[33%] justify-center items-end">
			<p class="pr-2">Don’t have an account yet?</p>
			<router-link
				to=""
				class="text-red-500"
				>Create?</router-link
			>
		</div>

		<!-- Display error message to the user -->
	</div>
</template>

<script setup lang="ts">
	import Button from "../components/MainButton.vue";
	import { IonInput } from "@ionic/vue";
	import { useLoginLogic } from "../../../public/login";

	const { username, password, errorMessage, performLogin } = useLoginLogic();
</script>
