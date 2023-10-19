<template>
    <ion-page>
        <!-- Header -->
        <FoodHeader />
        <ion-content>
            <!-- Main Content -->
            <div class="foodsummarypadding">
                <div>
                    <div class="summaryitem">
                        <img class="aspect" alt="Profile pic" src="/assets/summary/food1.svg" />
                    </div>

                    <p class="mt">Steak Fries Veggies</p>
                    <img class="mt" alt="Profile" src="/assets/product/Rating.svg" />
                    <p class="p3 mt">
                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
                        cubilia curae; Nam eu aliquam ipsum, sed accumsan metus. Maecenas neque nunc,
                        tincidunt nec dui ac, rutrum consectetur ligula.
                    </p>
                </div>

                <div class="flex3">
                    <p class="foodp">P 172</p>
                    <!-- Button Component -->
                    <Incrementation></Incrementation>
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
    IonPage
} from "@ionic/vue";

</script>