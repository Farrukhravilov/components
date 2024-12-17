<template>
  <div class="p-6 bg-gray-100 border-b border-gray-300 pb-[20px]">
    <div class="bg-indigo-600 flex items-center justify-between text-white text-center p-4 mb-4">
      <p>Sms limit: {{ smsLimit }} ta</p>
      <p>Jamni yuborilgan: {{ totalSent }} ta</p>
      <p>Sms qoldiq: {{ smsRemaining }} ta</p>
    </div>

    <div class="mb-4">
      <label for="clientSelect" class="block mb-2"
        >Barcha mijozlar ({{ totalClients }} ta)</label
      >
      <select
        id="clientSelect"
        v-model="selectedClient"
        class="form-select block w-full p-2 border border-gray-300 rounded"
      >
        <option disabled value="">Tanlang</option>
        <option v-for="client in clients" :key="client.id" :value="client.id">
          {{ client.name }}
        </option>
      </select>
    </div>

    <div>
      <label for="message" class="block mb-2">Xabar:</label>
      <textarea
        id="message"
        v-model="message"
        class="form-textarea block w-full h-32 p-2 border border-gray-300 rounded"
        maxlength="160"
        @input="updateCharacterCount"
      ></textarea>
      <div class="flex items-center justify-between mt-[10px] mb-[10px]">
          <p>SMS:</p>
          <p class="text-right">{{ messageCount }} / 160</p>
      </div>
    </div>

    <button
      @click="sendSms"
      class="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
    >
    <i class="fa-solid fa-share"></i>
      Sms Yuborish
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const smsLimit = 5000;
const totalSent = ref(2);
const clients = ref([
  { id: 1, name: "Client 1" },
  { id: 2, name: "Client 2" },
  { id: 3, name: "Client 3" },
]);
const totalClients = clients.value.length;
const selectedClient = ref("");
const message = ref("");
const messageCount = ref(0);
const smsRemaining = ref(smsLimit - totalSent.value);

const updateCharacterCount = () => {
  messageCount.value = message.value.length;
};

const sendSms = () => {
  if (messageCount.value > 0 && totalSent.value < smsLimit) {
    totalSent.value++;
    smsRemaining.value = smsLimit - totalSent.value;
    message.value = "";
    messageCount.value = 0;
  }
};
</script>

<style scoped>
</style>
