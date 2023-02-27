<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import Button from "./components/Button.vue";
</script>

<template>
  <div class="app">
    <Button type="primary">123</Button>
  </div>
</template>

<style scoped>
.app {
  display: flex;
  justify-content: center;
  padding: 20px;
}
</style>
