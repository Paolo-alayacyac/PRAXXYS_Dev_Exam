<template>
    <div>
        <div class="w-full h-[60px] relative mt-6">
            <div class="w-full h-[60px] absolute left-0 top-0 bg-gray-50 rounded-2xl border border-gray-500"></div>
            <div class="absolute left-[16px] top-[10px] text-gray-500 text-xs font-normal font-Nunito">{{ label }}</div>
            <ion-input class="absolute left-[10px] w-[95%] top-[20px] right-10 text-base font-normal text-black" :value="value" :v-model="model"/>
            <div class="w-18 h-0 left-138 top-29 absolute origin-top-left rotate-90 border border-gray-500"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { IonInput } from '@ionic/vue';

const props = defineProps ({
  label: {
      type: String,
      default: 'Email Address'
  },
  value: {
      type: String,

  },
  model: {
      type: String,

  },
})
</script>