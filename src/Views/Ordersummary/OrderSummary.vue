<template>
    <ion-page>
        <ion-content>
            <div id="main-content">
                <ion-header class="ion-no-border ion-header">
                    <ion-toolbar class="toolbar">
                        <ion-button slot="start" class="backbutton" @click="$router.go(-1)">
                            <img alt="button" src="/assets/summary/back.png" />
                        </ion-button>
                        <div class="flex header3">
                            <h1 class="ml">Order Summary</h1>
                        </div>
                    </ion-toolbar>
                </ion-header>
            </div>

            <!-- Main Content -->
            <div class="summarycontent ion-padding">
                <!-- Client Information -->

                <swiper :slidesPerView="'auto'" :spaceBetween="8" :pagination="{ clickable: true }" class="mySwiper">
                    <swiper-slide class="clnt__info">
                        <div class="flex Clnt__ct">
                            <div class="info ion-padding-info">
                                <h3>Chou Tzuyu</h3>
                                <p class="p10 mt8">
                                    +63 912 345 6789<br />chou.tzu-yu@email.com
                                </p>
                            </div>
                            <img class="mlll" src="/assets/summary/Group14.png" />
                        </div>
                    </swiper-slide>
                    <swiper-slide class="clnt__info2">
                        <div class="flex Clnt__ct">
                            <div class="info__edit ion-padding">
                                <img class="ord_icon" src="/assets/icon/edit.png" />
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide class="clnt__info2">
                        <div class="flex Clnt__ct">
                            <div class="info__delete ion-padding">
                                <img src="/assets/icon/trash.png" />
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>

                <swiper :slidesPerView="'auto'" :spaceBetween="8" :pagination="{ clickable: true }" class="mySwiper mt">
                    <swiper-slide class="clnt__info">
                        <div class="flex Clnt__ct">
                            <div class="info ion-padding-info">
                                <div class="between">
                                    <h3>My Home Address</h3>
                                    <ion-radio slot="start"></ion-radio>
                                </div>
                                <p class="p10 mt8">
                                    No. 21 St. Agustin Street, Brgy. De Jose
                                    <br />Delgado City 2234 Philippines
                                </p>
                            </div>
                            <img class="mlll" src="/assets/summary/Group14.png" />
                        </div>
                    </swiper-slide>
                    <swiper-slide class="clnt__info2">
                        <div class="flex Clnt__ct">
                            <div class="info__edit ion-padding">
                                <img class="ord_icon" src="/assets/icon/edit.png" />
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide class="clnt__info2">
                        <div class="flex Clnt__ct">
                            <div class="info__delete ion-padding">
                                <img src="/assets/icon/trash.png" />
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>

                <swiper :slidesPerView="'auto'" :spaceBetween="8" :pagination="{ clickable: true }" class="mySwiper mt">
                    <swiper-slide class="clnt__info">
                        <div class="flex Clnt__ct">
                            <div class="info ion-padding-info">
                                <div class="between">
                                    <h3>Work/Office</h3>
                                    <ion-radio color="warning" slot="start"></ion-radio>
                                </div>
                                <p class="p10 mt8">
                                    3rd flr Anyeong Bldg. Seareal St. Joaqin
                                    <br />
                                    City 3456 Philippines
                                </p>
                            </div>
                            <img class="mlll" src="/assets/summary/Group14.png" />
                        </div>
                    </swiper-slide>
                    <swiper-slide class="clnt__info2">
                        <div class="flex Clnt__ct">
                            <div class="info__edit ion-padding">
                                <img class="ord_icon" src="/assets/icon/edit.png" />
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide class="clnt__info2">
                        <div class="flex Clnt__ct">
                            <div class="info__delete ion-padding">
                                <img src="/assets/icon/trash.png" />
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
                <!-- End of Client Information -->

                <!-- ORDERS -->
                <h2 class="ion-padding-top">Orders</h2>
                <div>
                    <swiper :slidesPerView="'auto'" :spaceBetween="8" :pagination="{ clickable: true }" class="swiper mt"
                        v-for="item in itemsRaw" :key="item.id">
                        <swiper-slide class="clnt__info">
                            <div class="flex Clnt__ct">
                                <div class="orders">
                                    <div class="flex">
                                        <div class="w-12">
                                            <img :src="item.product.image" alt="food" class="w-full h-full" />
                                        </div>
                                        <div class="ml">
                                            <p class="steak">{{ item.product.name }}</p>
                                            <p class="psummary">1x Tomato Sauce</p>
                                            <p class="psummary">1x Regular Coke</p>
                                            <p class="psummary">1x Fried Chicken</p>
                                        </div>
                                    </div>
                                    <hr class="hr2 mt" />
                                    <div class="flex3">
                                        <p class="foods">P {{ item.product.price }}</p>
                                        <div class="flex">
                                            <div class="counter__section flex">
                                                <ion-button class="reactive" id="decrement"
                                                    @click="decrement()">-</ion-button>
                                                <p class="ion-padding-start ion-padding-end">
                                                    {{ item.quantity + count }}
                                                </p>
                                                <ion-button class="reactive" id="increment"
                                                    @click="increment()">+</ion-button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <img class="" src="/assets/summary/Group14.png" />
                            </div>
                        </swiper-slide>
                        <swiper-slide class="clnt__info2">
                            <div class="flex Clnt__ct">
                                <div class="info__editOrder ion-padding">
                                    <img class="ord_icon" src="/assets/icon/edit.png" />
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide class="clnt__info2">
                            <div class="flex Clnt__ct">
                                <div class="info__deleteOrder ion-padding" @click="deleteProduct(item.product_id)">
                                    <img src="/assets/icon/trash.png" alt="Delete" />
                                </div>
                            </div>
                        </swiper-slide>

                    </swiper>
                </div>
                <!-- END ORDERS -->

                <!-- Payment Option Section -->
                <h2 class="mt">Payment Option</h2>
                <div class="payment">
                    <div class="flex7">
                        <div class="flex8">
                            <h3>Cash on Delivery</h3>
                            <p class="p5">
                                Pay using your earned loyalty points
                            </p>
                        </div>
                        <ion-radio color="warning" slot="start"></ion-radio>
                    </div>
                </div>
                <div class="payment">
                    <div class="flex7">
                        <div class="flex8">
                            <h3 class="paymenttext">
                                Loyalty Points
                                <span class="points"> (0 points) </span>
                            </h3>
                            <p class="p5">
                                Pay using your earned loyalty points
                            </p>
                        </div>
                        <ion-radio color="warning" slot="start"></ion-radio>
                    </div>
                </div>
                <div class="payment">
                    <div class="flex7">
                        <div class="flex8">
                            <img class="paymentimg" src="/assets/summary/PayPal.png" alt="payment pic" />
                            <p class="p5">
                                Pay using your earned loyalty points
                            </p>
                        </div>
                        <ion-radio color="warning" slot="start"></ion-radio>
                    </div>
                </div>
                <div class="payment">
                    <div class="flex7">
                        <div class="flex8">
                            <img class="paymentimg1" src="/assets/summary/Paynamics.png" alt="payment pic" />
                            <p class="p5">
                                Pay using your earned loyalty points
                            </p>
                        </div>
                        <ion-radio color="warning" slot="start"></ion-radio>
                    </div>
                </div>
                <!-- End of Payment Option Section -->

                <!-- Last Section -->
                <div>
                    <div class="between mt">
                        <p class="p11">Subtotal</p>
                        <p>P 185</p>
                    </div>
                    <div class="between mtm">
                        <p class="p11">Delivery Charge</p>
                        <p>P 59</p>
                    </div>
                    <div placeholder="change for" class="custom4">
                        <div class="change">
                            <p class="change__title">Change for</p>
                            <p class="change__total">e.g. 1,000</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End of Main Content -->

            <!-- Fixed Button -->
            <div class="lowerbutton">
                <div class="flex10">
                    <div>
                        <p class="text2">Grand Total</p>
                        <p>P 244</p>
                    </div>
                    <ion-button href="/orderreceived" class="buttonsummary1">
                        Place Order
                    </ion-button>
                </div>
            </div>
            <!-- End Fixed Button -->
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import {
    IonButton,
    IonHeader,
    IonContent,
    IonToolbar,
    IonRadio,
    IonPage,
} from "@ionic/vue";

import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "@ionic/vue/css/ionic-swiper.css";

import { ref, onMounted } from "vue";
import axios from "axios";

const count = ref(0);
const product = ref([]);
const cartItems = ref([]);
const itemsRaw = ref([]);

const increment = () => {
    count.value++;
};

const decrement = () => {
    if (count.value > 0) {
        count.value--;
    }
};

// const storedTokens = localStorage.getItem("token");

// const fetchData = async () => {
//     try {
//         if (!storedTokens) {
//             console.error("Token not found in local storage");
//             return;
//         }

//         const tokenData = JSON.parse(storedTokens);
//         const accessToken = tokenData.access_token;

//         const response = await axios.get(
//             "https://psi-exam-api.praxxys.dev/api/products",
//             { headers: { Authorization: `Bearer ${accessToken}` } }
//         );
//         product.value = response.data.data.data;
//         // console.log(product.value);
//     } catch (error) {
//         console.log(error);
//     }
// };

const apiUrl = 'https://psi-exam-api.praxxys.dev/api/cart/delete';

// Function to delete a product
// const deleteProduct = async (itemId: any) => {
//     const storedTokens = localStorage.getItem("token");

//     if (!storedTokens) {
//         console.error("Token not found in local storage");
//         return;
//     }

//     const tokenData = JSON.parse(storedTokens);
//     const accessToken = tokenData.access_token;

//     const existingCartDataString = localStorage.getItem("getCart");

//     const config = {
//         method: 'delete',
//         url: `${apiUrl}/${itemId}`,
//         headers: {
//             'Authorization': `Bearer ${accessToken}`,
//         }
//     };

//     try {
//         const parsedObject = JSON.parse(existingCartDataString);
//         cartItems.value = [parsedObject];
//         itemsRaw.value = cartItems.value[0];

//         const updatedCartData = itemsRaw.value.filter(product => product.productId !== itemId);

//         localStorage.setItem("getCart", JSON.stringify(updatedCartData));

//         itemsRaw.value = updatedCartData;

//         console.log(itemsRaw.value);

//         // window.location.reload();
//     } catch (error) {
//         console.error("An error occurred while deleting the product:", error);
//     }
// };

const deleteProduct = async (itemId: any) => {
    try {
        const storedTokens = localStorage.getItem("token");

        if (!storedTokens) {
            console.error("Token not found in local storage");
            return;
        }

        const tokenData = JSON.parse(storedTokens);
        const accessToken = tokenData.access_token;

        // Send the DELETE request to the API
        const response = await axios.delete(`${apiUrl}/${itemId}`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            }
        });

        if (response.status !== 200) {
            console.error("Failed to delete the product. Status:", response.status);
            return;
        }

        const existingCartDataString = localStorage.getItem("getCart");

        if (!existingCartDataString) {
            console.error("Cart data not found in local storage");
            return;
        }

        const parsedObject = JSON.parse(existingCartDataString);
        const updatedCartData = parsedObject.filter((item: { product_id: any; }) => item.product_id !== itemId);

        // Update both the reactive variable and localStorage
        cartItems.value = updatedCartData;
        localStorage.setItem("cartData", JSON.stringify(updatedCartData));

        console.log(cartItems.value);

        // You may not need to reload the entire page, consider updating only the necessary parts
        // window.location.reload();
    } catch (error) {
        console.error("An error occurred while deleting the product:", error);
    }
};

onMounted(() => {
    // const storedCartData = localStorage.getItem("getData");

    // // console.log(storedCartData);

    // if (storedCartData) {
    //     const parsedObject = JSON.parse(storedCartData);
    //     cartItems.value = [parsedObject];
    //     itemsRaw.value = cartItems.value[0];

    //     // console.log(cartItems.value);
    //     // console.log(itemsRaw.value);

    const storedCartData = localStorage.getItem("getCart");

    // console.log(storedCartData);

    if (storedCartData) {
        const parsedObject = JSON.parse(storedCartData);
        cartItems.value = [parsedObject];
        itemsRaw.value = cartItems.value[0];

        console.log(itemsRaw.value);
        // console.log(cartItems.value);
        // console.log(itemsRaw.value);
    }
});
</script>
