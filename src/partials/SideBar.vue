<template>
    <ion-menu class="menu" contentId="main-content">
        <!-- HEADER -->
        <ion-header class="ion-no-border headermenu">
            <ion-toolbar class="toolbar ion-no-border">
                <div class="flex">
                    <ion-avatar class="profilepic">
                        <img src="/assets/menu/Avatar.svg">
                    </ion-avatar>
                    <a href="/loyalty">
                    <div class="header1 flex">
                        <img src="/assets/menu/crown1.png">
                        <ion-text class="text">0 points</ion-text>
                        <img class="vector1" src="/assets/menu/Vector.png">
                    </div>
                    </a>
                </div>
            </ion-toolbar>
        </ion-header>
        <!-- END HEADER -->

        <!-- Main Content -->
        <ion-content>
            <div class="profiletext">
                <h1>Chou Tzuyu</h1>
                <ion-text>+63 912 345 6789</ion-text>
            </div>
            <ion-item href="/home" class="mt">
                <img class="ion-padding-end" src="/assets/menu/icon1.svg" alt="">
                <p>Home</p>
            </ion-item>
            <ion-item href="/product">
                <img class="ion-padding-end" src="/assets/menu/icon2.svg" alt="">
                <p>Order Now!</p>
            </ion-item>
            <ion-item>
                <img class="ion-padding-end" src="/assets/menu/icon3.svg" alt="">
                <p>Notifications</p>
                <div slot="end" class="badge">4</div>
            </ion-item>
            <ion-item>
                <img class="ion-padding-end" src="/assets/menu/icon4.svg" alt="">
                <p>Store Locator</p>
            </ion-item>
            <ion-item>
                <img class="ion-padding-end" src="/assets/menu/icon5.svg" alt="">
                <p>FAQ's</p>
            </ion-item>
            <hr class="hr">
            <ion-item>
                <img class="ion-padding-end" src="/assets/menu/icon6.svg" alt="">
                <p>My Orders</p>
                <div slot="end" class="badge">2</div>
            </ion-item>
            <ion-item>
                <img class="padding18" src="/assets/menu/myaccount.png" alt="">
                <p class="menuicon">My Account</p>
            </ion-item>
            <ion-item>
                <img class="padding18" src="/assets/menu/icon8.svg" alt="">
                <p>My Favorites</p>
            </ion-item>
            <ion-item>
                <img class="padding18" src="/assets/menu/icon9.svg" alt="">
                <p>Order Tracker</p>
            </ion-item>
            <ion-item>
                <img class="ion-padding-end" src="/assets/menu/icon10.svg" alt="">
                <p>Order History</p>
            </ion-item>
            <!-- Log out Button -->
            <PrimaryButton></PrimaryButton>
        </ion-content>
    </ion-menu>
</template>

<script setup lang="ts">
import {
    IonContent,
    IonHeader,
    IonToolbar,
    IonAvatar,
    IonText,
    IonMenu,
    IonItem,
} from "@ionic/vue";

import PrimaryButton from "../Views/components/PrimaryButton.vue";
</script>




