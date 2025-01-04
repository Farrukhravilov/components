<template>
    <n-dynamic-input v-model:value="value" placeholder="Come on" show-sort-button />
    <pre>{{ JSON.stringify(value, null, 2) }}</pre>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Создаем реактивное значение
const value = ref<string[]>(['', '', '']);
</script>

<style></style>