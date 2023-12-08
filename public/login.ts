import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export const useLoginLogic = () => {
	const router = useRouter();
	const username = ref("email");
	const password = ref("password");
	const errorMessage = ref("");

	const performLogin = async () => {
		const isCredentialsValid =
			username.value === "user@praxxys.ph" &&
			password.value === "password";

		if (isCredentialsValid) {
			try {
				const response = await axios.post(
					"https://psi-exam-api.praxxys.dev/api/auth/login",
					{
						email: username.value,
						password: password.value,
					}
				);

				console.log(JSON.stringify(response.data));
				await router.push("/home");
			} catch (error) {
				console.error(error);
				handleLoginError(
					"Error in the login process. Please try again later."
				);
			}
		} else {
			handleLoginError("Invalid credentials.");
		}
	};

	const handleLoginError = (message: string) => {
		errorMessage.value = message;

		// Remove the error message after 2 seconds
		setTimeout(() => {
			errorMessage.value = "";
		}, 2000);
	};

	return {
		username,
		password,
		errorMessage,
		performLogin,
	};
};
