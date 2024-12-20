<template>
  <div>
    <button
      @click="toggleForm"
      class="w-full bg-green-500 rounded-[10px] hover:bg-green-600 flex items-center gap-[10px] justify-center text-white p-4 border-b border-gray-300 mb-[40px]"
    >
      <i class="fa-solid fa-user-plus"></i> Yangi Mijoz Qo`shish
    </button>

    <transition name="fade">
      <div v-if="isFormVisible" class="mt-5 p-5 bg-white rounded shadow">
        <h2 class="text-lg text-center font-bold mb-4">Yangi Mijoz qo'shish</h2>
        <form @submit.prevent="submitForm">
          <div class="grid grid-cols-[repeat(auto-fill,minmax(500px,1fr))] gap-[20px] p-2">
            <div class="mb-4">
              <label for="name" class="block mb-1"
                >Mijoz ismi <span class="text-red-600">*</span>
              </label>
              <input
                v-model="customer.name"
                id="name"
                placeholder="Mijozning Familya va Ismini kiriting"
                class="border p-2 w-full rounded"
                required
              />
            </div>
            <div class="mb-4">
              <label for="address" class="block mb-1">Manzil</label>
              <input
                v-model="customer.address"
                id="address"
                placeholder="mij_adres"
                class="border p-2 w-full rounded"
              />
            </div>
            <div class="mb-4">
              <label for="phone1" class="block mb-1">Telefon 1*</label>
              <input
                v-model="customer.phone1"
                id="phone1"
                placeholder="+998 XX XXX XX XX"
                class="border p-2 w-full rounded"
                required
              />
            </div>
          </div>
          <div class="grid grid-cols-[repeat(auto-fill,minmax(500px,1fr))] gap-[20px] p-2">
              <div class="mb-4">
                <label for="phone2" class="block mb-1">Telefon 2</label>
                <input
                  v-model="customer.phone2"
                  id="phone2"
                  placeholder="+998 XX XXX XX XX"
                  class="border p-2 w-full rounded"
                />
              </div>
              <div class="mb-4">
                <label for="source" class="block mb-1">Manba</label>
                <input
                  v-model="customer.source"
                  id="source"
                  placeholder="Manba"
                  class="border p-2 w-full rounded"
                />
              </div>
          </div>
          <div class="flex justify-between gap-[20px] w-full">
            <button
              type="button"
              class="border border-red-600  text-red-500  w-full  px-4 py-2 rounded"
              @click="toggleForm"
            >
              Bekor qilish
            </button>
            <button
              type="submit"
              class="border border-blue-500  text-blue-500  w-full  px-4 py-2 rounded"
            >
              Kiritish
            </button>
          </div>
        </form>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isFormVisible = ref(false);

const customer = ref({
  name: "",
  address: "",
  phone1: "",
  phone2: "",
  source: "",
});

const toggleForm = () => {
  isFormVisible.value = !isFormVisible.value;
};

const submitForm = () => {
  console.log("Submitted data:", customer.value);
  // Здесь вы можете добавить логику для отправки данных
  toggleForm(); // Закрывает форму после отправки
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
