<script setup lang="ts">
import { ref, computed } from 'vue'
import type { ComputedRef } from 'vue' 

const amount = ref<number>(0)

// const subTotal : ComputedRef<number> = computed(() => amount.value * 3000) 

  const subTotal = computed<number>(() => amount.value * 3000) 
  
</script>
<template>
  <div>
  <h2>Computed</h2>
  単価: 3000 <br>
  商品数: <input type="number" v-model="amount"><br> 
  小計: {{ subTotal }}
  </div>
</template>
