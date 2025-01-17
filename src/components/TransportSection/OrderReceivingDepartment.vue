<template>
  <div class="bg-gray-100 min-h-screen p-8">
    <!-- Заголовок -->
    <h1 class="text-[32px] font-norma; mb-4">Buyurtma olish bo`limi</h1>
    <h2 class="text-gray-600 mb-8 text-[20px]">
      Bu bo'limda mijozlar tomonidan berilgan buyurtmalar uchun kvitansiyalar
      kiritiladi.
    </h2>

    <!-- Карточка клиента -->
    <DepartamentHeader />

    <!-- Форма -->
    <DepartamentForm />
  </div>
</template>

<script setup lang="ts">
import DepartamentHeader from "../TransportSection/DepartamentHeader.vue";
import DepartamentForm from "../TransportSection/DepartamentForm.vue";
</script>

<style scoped>
/* Добавьте стили, если нужно */
</style>
