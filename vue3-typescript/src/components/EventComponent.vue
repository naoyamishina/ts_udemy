<script setup lang="ts">
  const handleChange = (e: Event) => {
    console.log((e.target as HTMLInputElement).value) 
  }
</script> 

<template>
  <div>
    <h2>
        Event
    </h2>
    <input @change="handleChange"> 
  </div>
</template>
