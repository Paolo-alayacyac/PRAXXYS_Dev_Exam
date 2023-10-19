<template>
    <div id="main-content">
        <div class="flex">
            <div class="counter__section flex">
                <ion-button class="reactive" id="decrement" @click="decrement()">
                    -
                </ion-button>
                <p class="ion-padding-start ion-padding-end">{{ count }}</p>
                <ion-button class="reactive" id="increment" @click="increment()">
                    +
                </ion-button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import {
    IonButton,
} from "@ionic/vue";

import { defineComponent } from 'vue';

export default defineComponent({
    components: {
        IonButton,
    },
    data() {
        return {
            count: 0,
        };
    },
    methods: {
        increment() {
            this.count++;
        },
        decrement() {
            if (this.count > 0) {
                this.count--;
            }
        },
    },
});
</script>