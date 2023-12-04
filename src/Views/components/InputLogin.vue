<template>
    <div>
        <ion-input :label="text" label-placement="stacked" :value="value" />
    </div>
</template>

<script setup lang="ts">
import { IonInput } from '@ionic/vue';

const props = defineProps ({
  text: {
      type: String,
      default: 'Email Address'
  },
  value: {
    type: String,
    default: 'user@praxxys.ph'
  }
})
</script>