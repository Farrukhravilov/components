<template>
  <div class="p-4">
    <h2 class="text-[#000] font-normal text-[34px]">Tayyor buyurtmalar</h2>
    <p class="text-[000] font-normal text-[16px]">
      Bu bo`limda tayyor bo`lgan buyurtmalar mijozlarga topshiriladi
    </p>
    <div
      class="grid grid-cols-[repeat(auto-fill,minmax(420px,1fr))] gap-[20px]"
    >
      <OrderCountCard>
        <template #title> Topshiriladiganlar soni </template>
        <template #text> 17 ta </template>
      </OrderCountCard>

      <OrderCountCard>
        <template #title> Omborda </template>
        <template #text> 5 ta </template>
      </OrderCountCard>

      <OrderCountCard>
        <template #title>Topshiriladiganlar soni </template>
        <template #text> 4 ta </template>
      </OrderCountCard>
    </div>
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-[50px] mt-[20px]">
        <button
          @click="
            showOrders = false;
            showUnordered = true;
          "
          class="border bg-blue-800 p-3 text-white rounded border-purple-600 hover:bg-blue-900 transition"
        >
          Tartiblanmagan buyurtmalar
        </button>
        <button
           @click="showOrders = true; showUnordered = false;"
          class="border bg-blue-800 p-3 text-white rounded border-purple-600 hover:bg-blue-900 transition"
        >
          Tartiblangan buyurtmalar
        </button>
      </div>
      <button
      
        class="border bg-blue-800 p-2 text-white rounded border-purple-600 hover:bg-blue-900 transition"
      >
        <i class="fa-solid fa-bars"></i>
      </button>
    </div>
    <!-- tartiblanmagan !!!! -->
    <div class="pt-[40px]" v-if="showUnordered">
      <OrderHeader @toggle-line="toggleLine" :lineVisible="showLine" />
      <div
        v-if="showCards"
        class="grid grid-cols-[repeat(auto-fill,minmax(420px,1fr))] gap-[20px]"
      >
        <OrdersCard
          v-for="item in 3"
          :invoiceNumber="245"
          :daysLeft="-818"
          userName="gg"
          phone="+998987456321"
          location="uzb"
          role="Yuvuvchi Hodimnn"
          additionalInfo="test"
        />
      </div>
    </div>
    <!-- tartiblangan  -->
    <div class="p-4" v-if="showOrders">
      <div class="flex items-center justify-between pb-[40px]">
        <h2 class="text-[32px] text-green-500 font-normal">
          Tartiblangan buyurtmalar
        </h2>
        <div class="flex items-center gap-[20px]">
          <OrdersDropDown />
        </div>
      </div>
      <div
        class="grid grid-cols-[repeat(auto-fill,minmax(420px,1fr))] gap-[20px]"
      >
        <OrdersCard
          v-for="item in 3"
          :invoiceNumber="245"
          :daysLeft="-818"
          userName="gg"
          phone="+998987456321"
          location="uzb"
          role="Yuvuvchi Hodimnn"
          additionalInfo="test"
        />
      </div>
      <div class="mt-[40px]">
        <span class="p-4 rounded bg-blue-800 text-white" >
          Jami: 792 440 so`m
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import OrderCountCard from "../TransportSection/OrderCountCard.vue";
import OrdersDropDown from "../OrdersStatus/OrdersDropDown.vue";
import OrderHeader from "../TransportSection/OrderHeader.vue";
import OrdersCard from "../TransportSection/OrdersCard.vue";
const invoiceNumber = ref(123);  
const daysLeft = ref(5);  
const userName = ref('Иван Иванов');  
const phone = ref('999-999-9999');  
const location = ref('Ташкент');  
const role = ref('Клиент');  
const additionalInfo = ref('Дополнительная информация');  

// Создаем реактивное свойство для отслеживания видимости содержимого  
const isContentVisible = ref(true);  

// Функция для переключения видимости содержимого  
const toggleContent = () => {  
  isContentVisible.value = !isContentVisible.value;  
}; 
const showOrders = ref(false); // По умолчанию скрыто
const showUnordered = ref(false); // По умолчанию скрыто

// Изначально можно установить любую из секций как видимую, если это нужно
// showOrders.value = true; // Раскомментируйте это, чтобы показать 'Tartiblangan buyurtmalar' по умолчанию
// showUnordered.value = false;
const showLine = ref(true); // Состояние для отображения линии
const showCards = ref(false); // Состояние для отображения карточек
// const showOrders = ref(false);
const toggleLine = () => {
  showLine.value = !showLine.value; // Если линия видима, она исчезнет
  showCards.value = !showCards.value; // Переключить отображение карточек
};

// Метод для переключения видимости секции заказов
// const toggleOrders = () => {
//   showOrders.value = !showOrders.value;
// };
</script>

<style></style>
