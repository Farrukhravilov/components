<template>
  <div
    class="border border-white rounded-[12px] mt-[40px] relative mx-auto w-full max-w-[1320px]"
  >
    <div class="flex items-center">
      <div class="flex p-5 gap-[60px]">
        <div class="">
          <nav>
            <ul class="flex flex-col items-center gap-[32px] justify-left">
              <!-- <pre>{{categories}}</pre> -->
              <li
                v-if="specificCategory2"
                class="flex flex-col gap-[15px] text-white text-[18px] items-center justify-left"
              >
                {{ specificCategory2.text}}
              </li>
              <i class="fa-solid fa-house text-white"></i>
              <li
                v-if="specificCategory3"
                class="flex flex-col gap-[15px] text-white text-[18px] items-center justify-left"
              >
              {{ specificCategory3.text}}
              </li>
              <li
                v-if="specificCategory4"
                class="flex flex-col gap-[15px] text-white text-[18px] items-center justify-left"
              >
              {{ specificCategory4.text}}
              </li>
              <li
                v-if="specificCategory5"
                class="flex flex-col gap-[15px] text-white text-[18px] items-center justify-left"
              >
                {{specificCategory5.text}}
              </li>
              <li
                v-if="specificCategory6"
                class="flex flex-col gap-[15px] text-white text-[22px] items-center justify-left"
              >
                {{specificCategory6.text}}
              </li>
            </ul>
          </nav>
        </div>
        <div class="mt-[3px]">
          <h2 class="text-white text-[24px]" v-if="specificCategory7">{{specificCategory7.text}}</h2>
          <Map />
        </div>
      </div>
      <div class="border-l border-white w-full h-[45vh]">
        <div class="mr-[20px] ml-[20px]">
          <form
            class="flex flex-col gap-[50px] h-[46vh] items-center justify-center w-full"
          >
            <input
              type="number"
              class="inputs text-white focus:none"
              placeholder="number"
            />
            <input type="text" class="inputs text-white focus:none" placeholder="tekst" />
            <button class="sumbit">Jonatish</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import api from "../../server/api";
import Map from "../Gps-Map/Map.vue";
import GlobInput from "../CustomInput/GlobInput.vue";
const categories = ref("");
const specificCategory1 = ref(null);
const specificCategory2 = ref(null);
const specificCategory3 = ref(null);
const specificCategory4 = ref(null);
const specificCategory5 = ref(null);
const specificCategory6 = ref(null);
const specificCategory7 = ref(null);
const Category = () => {
  return api
    .getOneCategory({ category_id: 5 })
    .then((res) => {
      categories.value = res.data;
      specificCategory1.value = categories.value?.category_items.find(
        (item) => item.ordinal_number === 1
      );
      specificCategory2.value = categories.value?.category_items.find(
        (item) => item.ordinal_number === 2
      );
      specificCategory3.value = categories.value?.category_items.find(
        (item) => item.ordinal_number === 3
      );
      specificCategory4.value = categories.value?.category_items.find(
        (item) => item.ordinal_number === 4
      );
      specificCategory5.value = categories.value?.category_items.find(
        (item) => item.ordinal_number === 5
      );
      specificCategory6.value = categories.value?.category_items.find(
        (item) => item.ordinal_number === 6
      );
      specificCategory7.value = categories.value?.category_items.find(
        (item) => item.ordinal_number === 7
      );
      console.log(res.data);
    })
    .catch((error) => {
      console.error(`Ошибка при получении категории ${id}:`, error);
    });
};

const inputValue = ref("");

onMounted(() => {
  Category();
});
</script>

<style>
.inputs {
  background-color: transparent;
  border: 2px solid gray;
  border-radius: 12px;
  padding: 20px;
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  color: white;
}

.sumbit {
  padding: 20px;
  color: white;
  background-color: #700;
  border-radius: 12px;
  width: 100%;
  max-width: 150px;
}
</style>
