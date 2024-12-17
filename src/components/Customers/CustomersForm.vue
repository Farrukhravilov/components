<template>
  <div class="w-full mx-auto p-5 bg-white shadow-lg rounded-lg">
    <h2 class="text-2xl font-bold mb-5">Mijoz ma'lumotlari</h2>
    <form @submit.prevent="submitForm">
      <div class="mb-4">
        <label for="mijozHolati" class="block text-sm font-medium text-gray-700"
          >Mijoz holati</label
        >
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
        <label for="mijozIsmi" class="block text-sm font-medium text-gray-700"
          >Mijoz ismi <span class="text-red-600">*</span></label
        >
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
          <label for="telefon1" class="block text-sm font-medium text-gray-700"
            >Telefon 1 <span class="text-red-600">*</span></label
          >
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
          <label for="telefon2" class="block text-sm font-medium text-gray-700"
            >Telefon 2</label
          >
          <input
            type="tel"
            id="telefon2"
            v-model="phone2"
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="+998 XX XXX XX XX"
          />
        </div>
        <div>
          <label for="manzil" class="block text-sm font-medium text-gray-700"
            >Manzil <span class="text-red-600">*</span>
          </label>
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
        <div class="">
          <label
            for="mijozHolati"
            class="block text-sm font-medium text-gray-700"
            >Manba</label
          >
          <select
            id="mijozHolati"
            v-model="customerStatus"
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Telegram</option>
            <option value="active">Klient</option>
            <option value="inactive">Reklama</option>
          </select>
        </div>
        <!--  -->
        <div class="">
          <label
            for="mijozHolati"
            class="block text-sm font-medium text-gray-700"
            >Mijozning turi</label
          >
          <select
            id="mijozHolati"
            v-model="customerStatus"
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">narx</option>
            <option value="active">sifat</option>
            <option value="inactive">premium</option>
            <option value="inactive">qora royxat</option>
          </select>
        </div>
      </div>

      <div class="mb-4 mt-4 grid grid-cols-3 gap-4 md:grid-cols-3">
        <div>
          <label
            for="iroqSanasi"
            class="block text-sm font-medium text-gray-700"
            >Qo'ng'iroq sanasi <span class="text-red-600">*</span>
          </label>
          <input
            type="date"
            id="iroqSanasi"
            v-model="callDate"
            required
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label for="iroqVaqti" class="block text-sm font-medium text-gray-700"
            >Qo'ng'iroq vaqti <span class="text-red-600">*</span>
          </label>
          <input
            type="time"
            id="iroqVaqti"
            v-model="callTime"
            required
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div class="">
          <label for="mijozIsmi" class="block text-sm font-medium text-gray-700"
            >Qo`ng`iroq izohi</label
          >
          <input
            type="text"
            id="mijozIsmi"
            v-model="customerName"
            required
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="izoh"
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
        <label for="buyurtmaOlish" class="text-sm font-medium text-gray-700"
          >Buyurtma olish</label
        >
      </div>
      <div class="grid grid-cols-2 mb-4 mt-4 w-full gap-4 md:grid-cols-2">
        <div class="">
          <label
            for="transportIzoh"
            class="block text-sm font-medium text-gray-700"
            >Transport, yuвish, qadoqlashga izoh</label
          >
          <textarea
            id="transportIzoh"
            v-model="transportComment"
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Buyurtma uchun izoh"
          ></textarea>
        </div>
        <div class="">
          <label for="haydovchi" class="block text-sm font-medium text-gray-700"
            >Haydovchi</label
          >
          <input
            type="text"
            id="haydovchi"
            v-model="driver"
            class="mt-1 block w-full p-4 border border-gray-300 rounded-md"
            placeholder="Hammaga"
          />
        </div>
      </div>
      <!--  -->

      <div class="grid grid-cols-2  mt-[20px] mb-[20px] gap-6">
        <!-- Карточка товара -->
        <div
          class="p-4 rounded"
        >
          <!-- Название товара и цена -->
          <div class="text-sm font-semibold mb-2">
            <!-- {{ item.name }} -->
            Buyurtma chegirma(foizda)
          </div>
          <!-- Поле для скидки -->
          <div class="flex items-center">
            <input
              type="number"
              placeholder="Chegirma"
              class="flex-1 border rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span class="text-[#fff] text-sm bg-gray-300 p-2">%</span>
          </div>
        </div>
        <div
          class="p-4 rounded "
        >
          <!-- Название товара и цена -->
          <div class="text-sm font-semibold mb-2">
            <!-- {{ item.name }} -->
            Buyurtma chegirma(pulda)
          </div>
          <!-- Поле для скидки -->
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
      <!--  -->
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
      <div class="grid grid-cols-3  mt-[20px] mb-[20px] gap-6">
        <!-- Карточка товара -->
        <div
          class="p-4 rounded shadow-sm"
        >
          <!-- Название товара и цена -->
          <div class="text-sm font-semibold mb-2">
            <!-- {{ item.name }} -->
            ADIYOL 1 KISHI
            <span class="text-red-500"
              >(60 000 so`m)</span
            >
          </div>
          <!-- Поле для скидки -->
          <div class="flex items-center">
            <input
              type="number"
              placeholder="Chegirma"
              class="flex-1 border rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span class="text-[#fff] text-sm bg-gray-300 p-2">so'm</span>
          </div>
        </div>
        <div
          class="p-4 rounded shadow-sm"
        >
          <!-- Название товара и цена -->
          <div class="text-sm font-semibold mb-2">
            <!-- {{ item.name }} -->
            Yangi v
            <span class="text-red-500"
              >(4 000 so`m)</span
            >
          </div>
          <!-- Поле для скидки -->
          <div class="flex items-center">
            <div class="flex-1 border rounded p-2 bg-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" >
                <span class="text-[#fff]">Cheqirma</span>
            </div>
            <span class="text-[#fff] border-l border-[#fff] text-sm bg-gray-300 p-2">so'm</span>
          </div>
        </div>
        <div
          class="p-4 rounded shadow-sm"
        >
          <!-- Название товара и цена -->
          <div class="text-sm font-semibold mb-2">
            <!-- {{ item.name }} -->
            Yumshoq o'yinchoq
            <span class="text-red-500"
              >(60 000 so`m)</span
            >
          </div>
          <!-- Поле для скидки -->
          <div class="flex items-center">
            <div class="flex-1 border rounded  bg-gray-300 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <span class="text-[#fff]">Cheqirma</span>
            </div>
            <span class="text-[#fff] text-sm bg-gray-300 p-2">so'm</span>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="grid grid-cols-3 mt-[20px] mb-[20px] gap-6">
        <!-- Карточка товара -->
        <div
          class=" p-4 rounded shadow-sm"
        >
          <!-- Название товара и цена -->
          <div class="text-sm font-semibold mb-2">
            <!-- {{ item.name }} -->
            ADIYOL 1 KISHI
            <span class="text-red-500"
              >(60 000 so`m)</span
            >
          </div>
          <!-- Поле для скидки -->
          <div class="flex items-center">
            <div class="flex-1 border rounded  bg-gray-300 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <span class="text-[#fff] ">Cheqirma</span>
            </div>
            <span class="border-l text-[#fff] text-sm bg-gray-300 p-2 border-[#fff]">so`m</span>
          </div>
        </div>
        <div
          class="p-4 rounded shadow-sm"
        >
          <!-- Название товара и цена -->
          <div class="text-sm font-semibold mb-2">
            <!-- {{ item.name }} -->
            Yangi v
            <span class="text-red-500"
              >(4 000 so`m)</span
            >
          </div>
          <!-- Поле для скидки -->
          <div class="flex items-center">
            <div class="flex-1 border rounded p-2 bg-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" >
                <span class="text-[#fff]">Cheqirma</span>
            </div>
            <span class="text-[#fff] text-sm bg-gray-300 p-2 border-l border-[#fff]">so'm</span>
          </div>
        </div>
        <div
          class="p-4 rounded shadow-sm"
        >
          <!-- Название товара и цена -->
          <div class="text-sm font-semibold mb-2">
            <!-- {{ item.name }} -->
            Yumshoq o'yinchoq
            <span class="text-red-500"
              >(60 000 so`m)</span
            >
          </div>
          <!-- Поле для скидки -->
          <div class="flex items-center">
            <div class="flex-1  bg-gray-300 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <span class="text-[#fff]">Cheqirma</span>
            </div>
            <span class="text-[#fff] text-sm bg-gray-300 p-2 border-l border-[#fff]">so'm</span>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="grid grid-cols-3 mt-[20px] mb-[20px] gap-6">
        <!-- Карточка товара -->
        <div
          class="p-4 rounded shadow-sm"
        >
          <!-- Название товара и цена -->
          <div class="text-sm font-semibold mb-2">
            <!-- {{ item.name }} -->
            ADIYOL 1 KISHI
            <span class="text-red-500"
              >(60 000 so`m)</span
            >
          </div>
          <!-- Поле для скидки -->
          <div class="flex items-center">
            <div class="flex-1 border rounded  bg-gray-300 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <span class="text-[#fff]">Cheqirma</span>
            </div>
            <span class="text-[#fff] text-sm bg-gray-300 p-2 border-l border-[#fff]">s`om</span>
          </div>
        </div>
        <div
          class="p-4 rounded shadow-sm"
        >
          <!-- Название товара и цена -->
          <div class="text-sm font-semibold mb-2">
            <!-- {{ item.name }} -->
            Yangi v
            <span class="text-red-500"
              >(4 000 so`m)</span
            >
          </div>
          <!-- Поле для скидки -->
          <div class="flex items-center">
            <div class="flex-1 border border-gray-300 rounded p-2 bg-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" >
                <span class="text-[#fff]">Cheqirma</span>
            </div>
            <span class="text-[#fff] text-sm bg-gray-300 p-2 border-l border-[#fff]">so'm</span>
          </div>
        </div>
        <div
          class="p-4 rounded shadow-sm"
        >
          <!-- Название товара и цена -->
          <div class="text-sm font-semibold mb-2">
            <!-- {{ item.name }} -->
            Yumshoq o'yinchoq
            <span class="text-red-500"
              >(60 000 so`m)</span
            >
          </div>
          <!-- Поле для скидки -->
          <div class="flex items-center">
            <div class="flex-1 border rounded  bg-gray-300 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <span class="text-[#fff]">Cheqirma</span>
            </div>
            <span class="text-[#fff] text-sm bg-gray-300 p-2  border-l border-[#fff]">so'm</span>
          </div>
        </div>
      </div>
      <div class="w-full flex mt-[20px] gap-[20px]">
          <button class="w-full mt-4 bg-red-500 text-white font-medium p-2 rounded-md hover:bg-red-600">Bekor qilish </button>
          <button
            type="submit"
            class="w-full mt-4 bg-blue-500 text-white font-medium p-2 rounded-md hover:bg-blue-600"
          >
            Kiritish
          </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const customerStatus = ref("");
    const customerName = ref("");
    const phone1 = ref("");
    const phone2 = ref("");
    const address = ref("");
    const source = ref("");
    const callDate = ref("");
    const callTime = ref("");
    const orderPlacement = ref(false);
    const transportComment = ref("");
    const driver = ref("");
    interface Item {
      name: string;
      price: number;
      discount: string;
    }
    const location = ref(""); // Локальное состояние для input
    // Массив товаров
    const items: Item[] = [
      { name: "ADIYOL 1 KISHI", price: 60000, discount: "" },
      { name: "Yangi v4", price: 4000, discount: "" },
      { name: "Yumshoq o'yinchoq", price: 25000, discount: "" },
      { name: "Mebel", price: 50000, discount: "" },
      { name: "Adyol", price: 50000, discount: "" },
      { name: "Gilam 15000", price: 15000, discount: "" },
      { name: "bsfgshfs", price: 80000, discount: "" },
      { name: "tes", price: 123, discount: "" },
      { name: "Ko'rpacha", price: 15000, discount: "" },
    ];

    // Функция форматирования цены
    const formatPrice = (price: number) => {
      return price.toLocaleString();
    };
    const submitForm = () => {
      // Handle form submission logic here
      console.log({
        customerStatus,
        customerName,
        phone1,
        phone2,
        address,
        source,
        callDate,
        callTime,
        orderPlacement,
        transportComment,
        driver,
      });
    };

    return {
      customerStatus,
      customerName,
      phone1,
      phone2,
      address,
      source,
      callDate,
      callTime,
      orderPlacement,
      transportComment,
      submitForm,
      location,
    };
  },
});
</script>

<style scoped>
/* Add any additional styles here */
/* Анимация для плавного открытия блока */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
