<template>
	<div class="mx-4 h-screen">
		<img
			class="pt-9"
			src="/assets/icon/Logo.png" 
		/>
		<p class="text-2xl font-bold pt-6">Bonjour!</p>
		<p class="text-gray-600 text-sm pt-2"> Welcome to all new FastFood mobile app. Kindly login your account.Thank you!</p>

		<Input class="pt-6" />
		<Input
			class="pt-2"
			label="Password"
			value="Enter your password" 
		/>
		<div class="mt-12">
			<a href="/home">
				<Button> </Button>
			</a>
		</div>

		<a
			class="flex mt-6 text-red-500 justify-center item-center"
			href="/"
		>
			Login as guest
		</a>

		<div class="flex mt-28 justify-center items-end">
			<p class="pr-2">Don’t have an account yet?</p>
			<p class="text-red-500">Create?</p>
		</div>
	</div>
</template>

<script setup lang="ts">
	import Input from "../components/InputLogin.vue";
	import Button from "../components/MainButton.vue";

	import { ref } from "vue";
	import axios from "axios";

	const email = "user@praxxys.ph";
	const password = "password";

	const performLogin = async () => {
		try {
			const response = await axios.post(
				"https://psi-exam-api.praxxys.dev/api/auth/login",
				{
					email,
					password,
				}
			);

			console.log(JSON.stringify(response.data));
		} catch (error) {
			console.error(error);
		}
	};

	(async () => {
		console.log(await performLogin());
	})();
</script>
