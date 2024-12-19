<template>
  <div
    v-if="show"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
  >
    <div class="bg-white rounded-lg shadow-lg w-[33%]">
      <!-- Header -->
      <div class="flex items-center justify-between p-4 border-b">
        <h2 class="text-[30px] font-semibold">{{ title }}</h2>
        <button @click="closeModal" class="text-white w-[40px] h-[35px] bg-red-500 rounded">
          <i class="fa-solid fa-times"></i>
        </button>
      </div>

      <!-- Content -->
      <div class="p-4">
        <p class="text-gray-700 text-[30px] border-b border-gray-300 pb-[20px]" v-if="content">{{ content }}</p>
        <template v-if="hasInput" >
          <label
            for="input"
            class="block mb-2 pt-[20px] text-sm font-medium text-gray-700"
          >
            {{ inputLabel
            }}<span v-if="inputRequired" class="text-red-500">*</span>
          </label>
          <input
            id="input"
            type="text"
            v-model="inputValue"
            class="w-full px-4 py-3 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
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
  show: {
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
  inputLabel: {
    type: String,
    default: "Введите значение",
  },
  inputRequired: {
    type: Boolean,
    default: false,
  },
});

// Локальное состояние для ввода
const inputValue = ref("");

// Эмиты
const emit = defineEmits(["close", "confirm"]);

// Закрытие модалки
function closeModal() {
  emit("close");
}

// Подтверждение действия
function confirmAction() {
  emit("confirm", inputValue.value);
}
</script>

<style scoped>
/* Дополнительные стили */
</style>
