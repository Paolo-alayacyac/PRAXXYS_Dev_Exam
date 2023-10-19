<template>
    <ion-page>
        <ion-content>
            <SideBar></SideBar>

            <!-- Header -->
            <ion-header class="ion-no-border ion-padding">
                    <ion-toolbar class="toolbar">
                        <ion-buttons slot="start">
                            <ion-menu-button class="burger">
                                <img alt="button" src="/assets/menu/burger.svg" />
                            </ion-menu-button>
                        </ion-buttons>
                        <div class="flex header3">
                            <h1 class="ml">
                                Loyalty Points
                            </h1>
                        </div>
                    </ion-toolbar>
                </ion-header>
            <!-- End of Header -->

            <!-- Main Content -->
            <div id="main-content">
                
                <div class="ion-padding-start ion-padding-end">
                    <div class="flex offer">
                        <div class="flex">
                            <img class="pointsh2" src="/assets/loyalty/loyaltycrown.png">
                            <h2 class="beginner">
                                Beginner Tier
                            </h2>
                        </div>
                        <div class="flex">
                            <ion-button href="/" fill="clear" color="danger" class="viewall">
                                View All
                            </ion-button>
                            <img class="ion-padding-start" src="/assets/homepage/Vector.svg">
                        </div>
                    </div>

                    <h2 class="beginnerp">
                        Earn points by purchasing from our store. 
                        Vestibulum ante ipsum primis in faucibus
                        orci luctus et.
                    </h2>

                    <div class="circle">
                        <img class="profile" alt="Profile pic" src="/assets/Loyalty/circle1.png" />
                        <p class="para2" style="position: absolute;">
                            0 / 160
                        </p>
                    </div>

                    <div class="flex offer">
                        <div class="flex">
                            <h2>
                                Rewards
                            </h2>
                        </div>
                        <div class="flex">
                            <ion-button href="/" fill="clear" color="danger" class="viewall">
                                How it Works
                            </ion-button>
                            <img class="ion-padding-start" src="/assets/homepage/Vector.svg">
                        </div>
                    </div>

                    <!-- Buttons -->
                    <div class="between gap ion-margin-top ion-margin-bottom">
                        <ion-button class="loyaltybutton">
                            All
                        </ion-button>
                        <ion-button class="loyaltybuttongrey">
                            Beginner
                        </ion-button>
                        <ion-button class="loyaltybuttongrey">
                            Intermediate
                        </ion-button>
                        <ion-button class="loyaltybuttongrey">
                            Loyal
                        </ion-button>
                    </div>

                    <div class="addons">
                        <div class="flex">
                            <img class="img1loyal" src="/assets/product/food.png" alt="button" />
                            <div>
                                <p>
                                    Steak Fries Veggies
                                </p>
                                <p class="loyaltytext1">
                                    meat
                                </p>
                                <div class="flex">
                                    <img class="crown3" src="/assets/loyalty/loyaltycrown.png" alt="button" />
                                    <p class="pricetext red">
                                        20 point
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End of Main Content -->
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import SideBar from "../../partials/SideBar.vue";
import {
    IonContent,
    IonHeader,
    IonToolbar,
    IonMenuButton,
    IonButtons,
    IonButton,
    IonPage
} from "@ionic/vue";
</script>