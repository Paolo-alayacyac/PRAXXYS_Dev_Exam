<template>
    <div id="main-content">
        <ion-header class="ion-no-border ion-padding">
            <ion-toolbar class="toolbar">
                <ion-button slot="start" class="backbutton" href="/product">
                    <img alt="button" src="/assets/summary/back.png" />
                </ion-button>
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
    IonButton,
} from "@ionic/vue";
</script>