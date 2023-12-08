<template>
    <ion-page>
        <!-- Header -->
        <FoodHeader class="z-20" />
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
                <ion-button expand="block" class="buttonsummary" id="open-custom-dialog">
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

const username = ref("user@praxxys.ph");
const password = ref("password");
const product = ref([]);
const count = ref(1);
const route = useRoute();
const selectedItem = ref({});
const itemId = Number(route.params.id);
const cart = ref([]);

let accessToken = '';

const increment = () => {
    count.value++;
};

const decrement = () => {
    if (count.value > 0) {
        count.value--;
    }
};

const fetchToken = async () => {
    try {
        const response = await axios.post(
            "https://psi-exam-api.praxxys.dev/api/auth/login",
            { email: username.value, password: password.value }
        );
        return accessToken = response.data.access_token;
    } catch (error) {
        console.error(error);
    }
};

const fetchData = async () => {
    try {
        const itemId = Number(route.params.id);
        await fetchToken();

        const response = await axios.get(
            "https://psi-exam-api.praxxys.dev/api/products",
            { headers: { Authorization: `Bearer ${accessToken}` } }
        );
        product.value = response.data.data.data;
        selectedItem.value = product.value.find(product => product.id === itemId);
    } catch (error) {
        console.log(error);
    }
};

const addCart = async () => {
    try {
        await fetchToken();

        const response = await axios.get(
            "https://psi-exam-api.praxxys.dev/api/cart",
            { headers: { Authorization: `Bearer ${accessToken}` } }
        );
        cart.value = response.data;
        cart.value.data.items.push(newItem);
        console.log(JSON.stringify(response.data));
        console.log(cart.value.data.items)
    } catch (error) {
        console.log(error);
    }
};


const newItem = {
    // Add your item properties here
    itemName: 'New Item',
    quantity: 'New Items',
    // ...
}

const myData = ref({
    data: {
        id: 1,
        user_id: 1,
        status: 0,
        created_at: '2023-07-18T03:08:04.000000Z',
        updated_at: '2023-07-18T03:08:04.000000Z',
        status_meta: {
            description: 'Pending'
        },
        items: []
    }
})

myData.value.data.items.push(newItem);

console.log(myData.value.data);

onMounted(() => {
    fetchData();
    addCart();
    console.log(count);
    console.log(myData.value.data);
});
</script>