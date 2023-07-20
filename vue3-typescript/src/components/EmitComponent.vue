<script setup lang="ts">
const emit = defineEmits<{
  (e: 'btnClick', message: string) : void
}>() 

const buttonClick = (message: string) : void => {
  emit('btnClick', message)
}
</script>

<template>
  <div>
    <h2>Emit</h2>
    <button @click="buttonClick('子でクリックされた')">クリック</button>
  </div>
</template>
