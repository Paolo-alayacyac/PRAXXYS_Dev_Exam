<template>
    <div>
        <ion-button :class="[ 'login__button', button]">
            {{ text }}
        </ion-button>
    </div>
</template>

<script setup lang="ts">
import {
    IonButton,
} from "@ionic/vue";

const props = defineProps ({
  text: {
      type: String,
      default: 'Login'
  },
  button: {
      type: String,
      default: ''
  },
})
</script>