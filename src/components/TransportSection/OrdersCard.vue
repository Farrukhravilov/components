<template>
  <div class="bg-white border border-red-400 rounded-lg p-4 shadow-md">
    <div class="flex items-center justify-between">
        
        <h2 class="text-lg font-semibold text-red-600">
            KVITANSIYA: {{ invoiceNumber }}
        </h2>
        <p class="text-red-700">- {{ daysLeft }} kun</p>
    </div>

    <div class="flex items-center mt-2">
      <i class="fas fa-user mr-2"></i>
      <span class="font-bold">{{ userName }}</span>
    </div>

    <div class="flex items-center mt-1">
      <i class="fas fa-phone mr-2"></i>
      <span class="text-blue-600">{{ phone }}</span>
    </div>

    <div class="flex items-center mt-1">
      <i class="fas fa-map-marker-alt mr-2"></i>
      <span>{{ location }}</span>
    </div>

    <div class="flex items-center mt-1">
      <i class="fas fa-user-friends mr-2"></i>
      <span>{{ role }}</span>
    </div>

    <div class="mt-2">
      <p>{{ additionalInfo }}</p>
    </div>

    <div class="mt-4 flex justify-between">
      <button class="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500">
        Topshirish
      </button>
      <button
        class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
      >
        Tartiblash
      </button>
    </div>

    <div class="flex justify-end mt-4">
      <i
        class="fas fa-camera text-green-600 mr-2 cursor-pointer"
        @click="uploadPhoto"
      ></i>
      <i class="fas fa-info-circle text-gray-600 cursor-pointer"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    invoiceNumber: {
      type: Number,
      required: true,
    },
    daysLeft: {
      type: Number,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    additionalInfo: {
      type: String,
      required: true,
    },
  },
  methods: {
    uploadPhoto() {
      // Логика для загрузки фото
      console.log("Загрузка фотографии...");
    },
  },
};
</script>

<style scoped>
/* Добавьте дополнительные стили, если нужно */
</style>
