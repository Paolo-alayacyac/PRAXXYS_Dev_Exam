<template>
    <ion-content>
        <div class="flexorder">
            <img class="imgorder" src="/assets/HandSign.png" alt="ThumbsUp">
            <h1 class="ordertop">
                Order Received!
            </h1>
            <p class="ion-padding orderp">
                Your order 
                <span class="color">
                    No. 19049585
                </span> 
                has successfully take and now being processed. Kindly wait for our notification regarding your order.
            </p>
        </div>
        <div class="bottomlow ion-padding-end ion-padding-start">
            <ion-button class="buttonorder1">
                Track Order
            </ion-button>
            <ion-button fill="clear" href="/" class="lowerbutton1"> 
                Back to Home
            </ion-button>
        </div>
    </ion-content>
</template>

<script setup lang="ts">
import {
    IonButton,
    IonContent,
} from "@ionic/vue";
</script>