import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export const useLoginLogic = () => {
	const router = useRouter();
	const username = ref("");
	const password = ref("");
	const errorMessage = ref("");
	const accessToken = ref([]);

	const performLogin = async () => {
		const isCredentialsValid =
			username.value === "user@praxxys.ph" && password.value === "password";

		if (!username.value || !password.value) {
			handleLoginError("Both username and password are required.");
		} else if (isCredentialsValid) {
			try {
				const response = await axios.post(
					"https://psi-exam-api.praxxys.dev/api/auth/login",
					{
						email: username.value,
						password: password.value,
					}
				);

				console.log(JSON.stringify(response.data));
				localStorage.setItem("token", JSON.stringify(response.data));
				await router.push("/home");
			} catch (error) {
				console.error(error);
				if (error.response) {
					if (error.response.status === 401) {
						handleLoginError("Incorrect password.");
					} else {
						handleLoginError(
							"Error in the login process. Please try again later."
						);
					}
				} else {
					handleLoginError(
						"Error in the login process. Please try again later."
					);
				}
			}
		} else {
			// Check if the username is incorrect
			if (username.value !== "user@praxxys.ph") {
				handleLoginError("Incorrect username.");
			} else {
				handleLoginError("Incorrect passwrod.");
			}
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
		accessToken
	};
};
