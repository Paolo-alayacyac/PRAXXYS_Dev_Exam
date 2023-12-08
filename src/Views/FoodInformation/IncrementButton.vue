<template>
    <div id="main-content">
        <div class="flex">
            <div class="counter__section flex">
                <ion-button class="reactive" id="decrement" @click="decrement()">-</ion-button>
                <p class="ion-padding-start ion-padding-end">{{ count }}</p>
                <ion-button class="reactive" id="increment" @click="increment()">+</ion-button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import {
    IonButton,
} from "@ionic/vue";

import { ref } from 'vue';

const count = ref(1);

const increment = () => {
    count.value++;
};

const decrement = () => {
    if (count.value > 0) {
        count.value--;
    }
};
</script>