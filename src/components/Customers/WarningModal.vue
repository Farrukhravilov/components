<template>
  <div
    v-if="isVisible"
    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
  >
    <div class="bg-white rounded-lg shadow-lg w-[35%] p-6">
      <div class="flex items-center justify-between border-b border-gray-300 pb-[40px] items-center">
        <h2 class="text-lg font-bold">Ogohlantirish</h2>
        <button @click="closeModal" class="text-white w-[40px] h-[35px] bg-red-500 rounded">&times;</button>
      </div>
      <div class="mt-4">
        <div class="flex items-center justify-between  mb-4">
          <div
            class="flex items-center justify-center w-8 h-8 bg-red-100 rounded-full"
          >
            <span class="text-red-500">!</span>
          </div>
          <p class="ml-2 text-[24px] ml-[18px] w-full max-w-[350px] text-gray-500">
            Siz rostan ham <br> <span class="font-normal text-[#000]">Dilmurodjon</span> 340 000 so'm qarzini kechib
            yubormoqchimiz.
          </p>
        </div>
        <label class="block mb-2" for="comment">Izoh <span class="text-red-600">*</span></label>
        <input
          id="comment"
          v-model="comment"
          type="text"
          class="w-full px-3 py-2 border rounded"
          placeholder="Izohni kiriting"
        />
        <button
        class="w-full mt-[10px] bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 transition-colors duration-300"
      >
        <!-- Иконка подтверждения -->
        <i class="fas fa-check mr-2"></i>
        Kechib Yuborish
      </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineProps,defineEmits } from "vue";

const props = defineProps<{  
  isVisible: boolean;  
}>();  

const emit = defineEmits<{  
  (e: 'close'): void; // Определяем событие закрытия  
}>();  

const comment = ref<string>("");  

const closeModal = () => {  
  emit("close"); // Эмитируем событие закрытия  
};  

const submit = () => {  
  alert(`Комментарий: ${comment.value}`);  
  closeModal(); // Закрыть модальное окно после отправки  
};
</script>

<style scoped>
/* Можно добавить стили для модального окна */
</style>
