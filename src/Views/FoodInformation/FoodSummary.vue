<template>
    <ion-page>
        <!-- Header -->
        <FoodHeader class="z-50 bg-white" />
        <ion-content>
            <!-- Main Content -->
            <div class="foodsummarypadding">
                <div class="h-full">
                    <div class="summaryitem h-full">
                        <img class="aspect" alt="Profile pic" :src="selectedItem.image" />
                    </div>

                    <p class="mt-7">{{ selectedItem.name }}</p>
                    <img class="mt" alt="Profile" src="/assets/product/Rating.svg" />
                    <p class="p3 mt">
                        {{ selectedItem.description }}
                    </p>
                </div>

                <div class="flex3">
                    <p class="foodp"> P {{ selectedItem.price }} </p>
                    <!-- Button Component -->

                    <div class="counter__section flex">
                        <ion-button class="reactive" id="decrement" @click="decrement()">-</ion-button>
                        <p class="ion-padding-start ion-padding-end">{{ count }}</p>
                        <ion-button class="reactive" id="increment" @click="increment()">+</ion-button>
                    </div>
                </div>

                <!-- Search Bar -->
                <div class="mt">
                    <h2>Beverages</h2>
                    <ion-searchbar placeholder="try our new Steak Fries Veggies" class="custom">
                    </ion-searchbar>
                </div>

                <div class="buttonsummary2 mt">
                    <ion-button class="regularbutton">
                        Regular
                    </ion-button>
                    <ion-button class="xbutton">
                        Large
                    </ion-button>
                    <ion-button class="xbutton">
                        X-Large
                    </ion-button>
                </div>

                <!-- ADD ONS -->
                <div class="addons1 mt">
                    <h2>Add-Ons</h2>
                    <div class="addons">
                        <div class="flex">
                            <img src="/assets/summary/sauce.png" alt="button" />
                            <div>
                                <p>White Rice</p>
                                <p>rice</p>
                                <p class="pricetext">P 25</p>
                            </div>
                        </div>
                        <div class="flex2">
                            <ion-radio class="checkbox" slot="start"></ion-radio>
                            <!-- Button Component -->
                            <Incrementation></Incrementation>
                        </div>
                    </div>
                    <div class="addons">
                        <div class="flex">
                            <img src="/assets/summary/rice.png" alt="button" />
                            <div>
                                <p>White Rice</p>
                                <p>rice</p>
                                <p class="pricetext">P 25</p>
                            </div>
                        </div>
                        <div class="flex2">
                            <ion-radio class="checkbox" slot="start"></ion-radio>
                            <!-- Button Component -->
                            <Incrementation></Incrementation>
                        </div>
                    </div>
                </div>
            </div>

            <!-- MODAL -->
            <ion-modal id="example-modal" ref="modal" trigger="open-custom-dialog">
                <div class="wrapper">
                    <img class="imgmodal" src="/assets/HandSign.png" alt="ThumbsUp">
                    <h2 class="mt">Successfully Added!</h2>
                    <p class="modalt">What do you want to do now?</p>
                    <ion-button href="/ordersummary" class="modalbutton">
                        Proceed to Checkout
                    </ion-button>
                    <ion-button href="/product" fill="clear" class="modalbutton2">
                        Add More
                    </ion-button>
                </div>
            </ion-modal>

            <!-- Fixed Button -->
            <div class="ion-padding-start ion-padding-end">
                <ion-button expand="block" class="buttonsummary" id="open-custom-dialog" @click="addCart(selectedItem.id)">
                    Add to Bag
                </ion-button>
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import FoodHeader from "./FoodHeader.vue";
import Incrementation from "./IncrementButton.vue";

import {
    IonButton,
    IonContent,
    IonSearchbar,
    IonModal,
    IonRadio,
    IonPage,
} from "@ionic/vue";

import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from "axios";
import FormData from 'form-data';

const product = ref([]);
const count = ref(1);
const route = useRoute();
const selectedItem = ref({});
const itemId = Number(route.params.id);
const cart = ref([]);
const apiUrl = 'https://psi-exam-api.praxxys.dev/api/cart/add';

const increment = () => {
    count.value++;
};

const decrement = () => {
    if (count.value > 0) {
        count.value--;
    }
};

const fetchData = async () => {
    try {
        const itemId = Number(route.params.id);
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
        console.log(product);
        selectedItem.value = product.value.find(product => product.id === itemId);
    } catch (error) {
        console.log(error);
    }
};

const addCart = async (productId: any) => {
    const storedTokens = localStorage.getItem("token");

    if (!storedTokens) {
        console.error("Token not found in local storage");
        return;
    }

    const data = new FormData();

    data.append('quantity', count.value.toString());

    const tokenData = JSON.parse(storedTokens);
    const accessToken = tokenData.access_token;

    const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${apiUrl}/${productId}`,
        headers: {
            'Authorization': `Bearer ${accessToken}`,
        },
        data: data,
    };

    try {
        const response = await axios(config);
        console.log(JSON.stringify(response.data));

        const existingCartDataString = localStorage.getItem("getCart");
        const existingCartData = existingCartDataString ? JSON.parse(existingCartDataString) : [];

        // Add the new item to the cart data
        const newItem = {
            cart_id: selectedItem.value.id,
            productId: productId,
            quantity: count.value,
            product: {
                image: selectedItem.value.image,
                price: selectedItem.value.price,
                name: selectedItem.value.name,
                rating: selectedItem.value.ratings,
            },
        };

        existingCartData.push(newItem);

        localStorage.setItem("getCart", JSON.stringify(existingCartData));
        console.log(existingCartData);

    } catch (error) {
        console.error(error);
    }
};

const getCart = async () => {
    try {
        const storedTokens = localStorage.getItem("token");

        if (!storedTokens) {
            console.error("Token not found in local storage");
            return;
        }

        const tokenData = JSON.parse(storedTokens);
        const accessToken = tokenData.access_token;

        const response = await axios.get(
            "https://psi-exam-api.praxxys.dev/api/cart",
            { headers: { Authorization: `Bearer ${accessToken}` } }
        );

        const newCartItems = response.data.data.items;

        localStorage.setItem("getCart", JSON.stringify(newCartItems));
        console.log(newCartItems);
    } catch (error) {
        console.log(error);
    }
};

// Call the getCart function
getCart();



onMounted(() => {
    fetchData();
    getCart();
});
</script>