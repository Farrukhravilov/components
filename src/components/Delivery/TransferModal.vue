<template>
  <div
    v-if="isVisible"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
  >
    <div class="bg-white rounded-lg shadow-lg w-[33%]">
      <!-- Header -->
      <div class="flex items-center justify-between p-4 border-b">
        <h2 class="text-[30px] font-semibold">{{ title }}</h2>
        <button
          @click="closeModal"
          class="text-white w-[40px] h-[35px] bg-red-500 rounded"
        >
          <i class="fa-solid fa-times"></i>
        </button>
      </div>

      <!-- Content -->
      <div class="p-4">
        <p
          class="text-gray-700 text-[30px]  pb-[20px]"
          v-if="content"
        >
          {{ content }}
        </p>
        <template v-if="hasInput">
          <label class="text-center">
            {{ selectLabel }}
          </label>
          <select
            v-model="selectedOption"
            class="form-select block w-full mt-1 p-2 border border-gray-300 rounded"
          >
            <option v-for="option in options" :key="option" :value="option">
              {{ option }}
            </option>
          </select>
        </template>
      </div>

      <!-- Footer -->
      <div class="p-4 border-t">
        <button
          @click="confirmAction"
          class="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {{ confirmButtonText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, ref } from "vue";

// Пропсы
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  isVisible: {
    type: Boolean,
    required: true,
  },
  content: {
    type: String,
    default: "",
  },
  confirmButtonText: {
    type: String,
    default: "OK",
  },
  hasInput: {
    type: Boolean,
    default: false,
  },
  selectLabel: {
    type: String,
    default: "Выберите значение",
  },
  options: {
    type: Array as () => string[],
    default: () => [],
  },
});

// Локальное состояние для выбора
const selectedOption = ref("");

// Эмиты
const emit = defineEmits(["close", "confirm"]);

// Закрытие модального окна
function closeModal() {
  emit("close");
}

// Подтверждение действия
function confirmAction() {
  emit("confirm", selectedOption.value);
}
</script>

<style scoped>
/* Дополнительные стили, если нужно */
</style>
