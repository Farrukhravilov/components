<template>
  <div>
    <button
      @click="showModal = true"
      class="bg-green-500 text-white rounded px-4 py-2"
    >
      Doimiy chiqim qo`shish
    </button>

    <ExpenceModal
      :isOpen="showModal"
      header="Добавление элемента"
      @close="showModal = false"
      @confirm="handleAdd"
    >
      <template #body>
        <div class="pt-[30px] flex flex-col gap-[15px]">
            <label>Nomi<span class="text-red-500">*</span></label>
            <input
              v-model="newItem"
              type="text"
              placeholder="Doimiy chiqim qo`shish"
              class="border rounded p-2 w-full"
            />
        </div>
      </template>
      <template #footer>
        <button
          @click="handleAdd"
          class="bg-blue-500 text-white rounded px-4 py-2 w-[90%] bottom-[20px] absolute"
        >
          Qo`shish
        </button>
      </template>
    </ExpenceModal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ExpenceModal from "../expense-modal-all/ExpenceModal.vue";

const showModal = ref(false);
const newItem = ref("");

const handleAdd = () => {
  console.log("Добавленный элемент:", newItem.value);
  newItem.value = ""; // очистка поля
  showModal.value = false;
};
</script>
