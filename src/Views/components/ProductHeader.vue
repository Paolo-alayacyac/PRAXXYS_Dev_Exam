<template>
    <div id="main-content">
        <ion-header class="ion-no-border ion-padding">
            <ion-toolbar class="toolbar">
                <ion-buttons slot="start">
                    <ion-menu-button class="burger">
                        <img alt="button" src="/assets/menu/burger.svg" />
                    </ion-menu-button>
                </ion-buttons>
                <div class="flex header3">
                    <h1 class="ml">Our Foods</h1>
                    <a href="/ordersummary">
                        <img alt="Profile pic" src="/assets/product/bag.svg" />
                    </a>
                </div>
            </ion-toolbar>
        </ion-header>
    </div>
</template>

<script setup lang="ts">
import {
    IonButtons,
    IonMenuButton,
    IonHeader,
    IonToolbar,
} from "@ionic/vue";
</script>