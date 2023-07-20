<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue'

const count1 = ref<number>(0)
const count2: Ref<number> = ref(0)
</script>

<template>
  <h2>
    Ref
  </h2>
  {{count1}}<br>
  {{count2}}<br>
  <button @click="count1++">クリック1</button>
  <button @click="count2++">クリック2</button>
</template>
