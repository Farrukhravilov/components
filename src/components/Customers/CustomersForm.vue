<template>
  <div class="w-full mx-auto p-5 bg-white shadow-lg rounded-lg">
    <h2 class="text-2xl font-bold mb-5">Mijoz ma'lumotlari</h2>
    <form @submit.prevent="submitForm">
      <div class="mb-4">
        <label for="mijozHolati" class="block text-sm font-medium text-gray-700">Mijoz holati</label>
        <select
          id="mijozHolati"
          v-model="customerStatus"
          class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="">Tanlang</option>
          <option value="active">Faol</option>
          <option value="inactive">No'aktiv</option>
        </select>
      </div>

      <div class="mb-4">
        <label for="mijozIsmi" class="block text-sm font-medium text-gray-700">Mijoz ismi <span class="text-red-600">*</span></label>
        <input
          type="text"
          id="mijozIsmi"
          v-model="customerName"
          required
          class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          placeholder="Mijozning Familiyasi va Ismini kiriting"
        />
      </div>

      <div class="mb-4 grid grid-cols-3 gap-4 md:grid-cols-3">
        <div>
          <label for="telefon1" class="block text-sm font-medium text-gray-700">Telefon 1 <span class="text-red-600">*</span></label>
          <input
            type="tel"
            id="telefon1"
            v-model="phone1"
            required
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="+998 XX XXX XX XX"
          />
        </div>
        <div>
          <label for="telefon2" class="block text-sm font-medium text-gray-700">Telefon 2</label>
          <input
            type="tel"
            id="telefon2"
            v-model="phone2"
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="+998 XX XXX XX XX"
          />
        </div>
        <div>
          <label for="manzil" class="block text-sm font-medium text-gray-700">Manzil <span class="text-red-600">*</span></label>
          <input
            type="text"
            id="manzil"
            v-model="address"
            required
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Mijoz manzili"
          />
        </div>
      </div>

      <div class="md:grid-cols-2 grid grid-cols-2 gap-[20px]">
        <div>
          <label for="manba" class="block text-sm font-medium text-gray-700">Manba</label>
          <select
            id="manba"
            v-model="source"
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Telegram</option>
            <option value="client">Klient</option>
            <option value="advertisement">Reklama</option>
          </select>
        </div>

        <div>
          <label for="mijozTuri" class="block text-sm font-medium text-gray-700">Mijozning turi</label>
          <select
            id="mijozTuri"
            v-model="customerType"
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Narx</option>
            <option value="quality">Sifat</option>
            <option value="premium">Premium</option>
            <option value="blacklist">Qora ro'yxat</option>
          </select>
        </div>
      </div>

      <div class="mb-4 mt-4 grid grid-cols-3 gap-4 md:grid-cols-3">
        <div>
          <label for="iroqSanasi" class="block text-sm font-medium text-gray-700">Qo'ng'iroq sanasi <span class="text-red-600">*</span></label>
          <input
            type="date"
            id="iroqSanasi"
            v-model="callDate"
            required
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label for="iroqVaqti" class="block text-sm font-medium text-gray-700">Qo'ng'iroq vaqti <span class="text-red-600">*</span></label>
          <input
            type="time"
            id="iroqVaqti"
            v-model="callTime"
            required
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label for="callDescription" class="block text-sm font-medium text-gray-700">Qo'ng'iroq izohi</label>
          <input
            type="text"
            id="callDescription"
            v-model="callDescription"
            required
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Izoh"
          />
        </div>
      </div>

      <div class="mb-4 mt-4">
        <input
          type="checkbox"
          id="buyurtmaOlish"
          v-model="orderPlacement"
          class="mr-2"
        />
        <label for="buyurtmaOlish" class="text-sm font-medium text-gray-700">Buyurtma olish</label>
      </div>

      <div class="grid grid-cols-2 mb-4 mt-4 w-full gap-4 md:grid-cols-2">
        <div>
          <label for="transportIzoh" class="block text-sm font-medium text-gray-700">Transport, yuвish, qadoqlashga izoh</label>
          <textarea
            id="transportIzoh"
            v-model="transportComment"
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Buyurtma uchun izoh"
          ></textarea>
        </div>
        <div>
          <label for="haydovchi" class="block text-sm font-medium text-gray-700">Haydovchi</label>
          <input
            type="text"
            id="haydovchi"
            v-model="driver"
            class="mt-1 block w-full p-4 border border-gray-300 rounded-md"
            placeholder="Hammaga"
          />
        </div>
      </div>

      <div class="grid grid-cols-2 mt-[20px] mb-[20px] gap-6">
        <div class="p-4 rounded">
          <div class="text-sm font-semibold mb-2">Buyurtma chegirma(foizda)</div>
          <div class="flex items-center">
            <input
              type="number"
              placeholder="Chegirma"
              class="flex-1 border rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span class="text-[#fff] text-sm bg-gray-300 p-2">%</span>
          </div>
        </div>

        <div class="p-4 rounded">
          <div class="text-sm font-semibold mb-2">Buyurtma chegirma(pulda)</div>
          <div class="flex items-center">
            <input
              type="number"
              placeholder="Chegirma"
              class="flex-1 border rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span class="text-[#fff] text-sm bg-gray-300 p-2">so'm</span>
          </div>
        </div>
      </div>

      <transition name="fade">
        <div v-if="orderPlacement" class="flex items-center space-x-4">
          <button @click="refresh" class="p-2 bg-blue-600 text-white rounded">
            <i class="fas fa-sync-alt"></i>
          </button>
          <input
            v-model="location"
            type="text"
            placeholder="Lokatsiya"
            class="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button @click="remove" class="p-2 bg-red-600 text-white rounded">
            <i class="fas fa-trash-alt"></i>
          </button>
        </div>
      </transition>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const customerStatus = ref('');
const customerName = ref('');
const phone1 = ref('');
const phone2 = ref('');
const address = ref('');
const source = ref('');
const customerType = ref('');
const callDate = ref('');
const callTime = ref('');
const callDescription = ref('');
const orderPlacement = ref(false);
const transportComment = ref('');
const driver = ref('');
const location = ref('');

const submitForm = () => {
  // Your form submission logic here
};

const refresh = () => {
  // Your refresh logic here
};

const remove = () => {
  // Your remove logic here
};
</script>
