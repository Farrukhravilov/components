<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
  >
    <div class="bg-white rounded-lg shadow-lg p-6 w-[38%]">
      <div
        class="flex justify-between items-center mb-4 border-b border-gray-300 pb-[40px]"
      >
        <h2 class="text-[28px] font-semibold">Filtlash</h2>
        <button
          type="button"
          @click="closeModal"
          class="text-white w-[50px] h-[40px] rounded bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          ✕
        </button>
      </div>
      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <input
            v-model="formData.kvNomeri"
            type="number"
            placeholder="KV-NOMERI"
            class="border border-gray-300 rounded-lg px-3 py-2 w-full"
            required
          />
        </div>
        <div class="mb-4">
          <input
            v-model="formData.telefonRagam"
            type="tel"
            placeholder="Telefon Raqam"
            class="border border-gray-300 rounded-lg px-3 py-2 w-full"
            required
          />
        </div>
        <div class="mb-4">
          <select
            v-model="formData.status"
            class="border border-gray-300 rounded-lg px-3 py-2 w-full text-gray-400"
            required
          >
            <option value="">Statusti Tanglang</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <div class="mb-4">
          <select
            v-model="formData.status2"
            class="border border-gray-300 rounded-lg px-3 py-2 w-full text-gray-400"
            required
          >
            <option disabled value="">-- Tanlang --</option>
            <option value="approved">Approved</option>
            <option value="pending">Pending</option>
          </select>
        </div>
        <div class="mb-4">
          <select
            v-model="formData.muddat"
            class="border border-gray-300 rounded-lg px-3 py-2 w-full text-gray-400"
            required
          >
            <option disabled value="">-- Tanlang --</option>
            <option value="short-term">Short-term</option>
            <option value="long-term">Long-term</option>
          </select>
        </div>
        <div class="flex justify-end">
          <button
            type="button"
            @click="closeModal"
            class="bg-red-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            X
          </button>
          <button
            type="submit"
            class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            ✓
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from "vue";

// Props
defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  closeModal: {
    type: Function,
    required: true,
  },
});

// Reactive form data
const formData = ref({
  kvNomeri: "",
  telefonRagam: "",
  status: "",
  status2: "",
  muddat: "",
});

// Submit handler
const submitForm = () => {
  console.log(formData.value);
  // Здесь добавьте логику обработки формы
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
