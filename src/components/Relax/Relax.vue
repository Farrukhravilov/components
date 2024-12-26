<template>
  <div>
    <div class="rellax foreground" data-rellax-speed="-2">Я передний план</div>
    <div class="rellax background" data-rellax-speed="2">Я фон</div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import Rellax from "rellax";

onMounted(() => {
  // Инициализация Rellax.js после монтирования компонента
  const rellax = new Rellax(".rellax");
});
</script>

<style scoped>
body {
  height: 200vh; /* Высота для тестирования прокрутки */
  background: linear-gradient(to bottom, #333, #f0f0f0);
}

.rellax {
  position: relative;
  text-align: center;
  font-size: 2rem;
  color: white;
}

.foreground {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.background {
  margin-top: 500px; /* Отступ для тестирования */
}
</style>
