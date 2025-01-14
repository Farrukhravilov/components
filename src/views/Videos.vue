<template>
    <div class="relative w-full z-100 h-[100%] bg-cover bg-center bg-fixed bg-[url('../assets/images/png/back-img-26055c57.png')] pt-[50px] ">
        <div class="relative mx-auto w-full max-w-[1320px] mt-[60px]">
            <div class="flex items-center gap-[10px]">
                <i class="fa-solid fa-slash text-white"></i>
                <h2 class="text-white text-[22px] tracking-[3px] uppercase " v-if="specificCategory1">{{specificCategory1.text}}</h2>
            </div>
            <p class="text-white font-normal  mt-[15px] text-[18px]" v-if="specificCategory2">{{specificCategory2.text}}</p>
            <WatchVideo/>
        </div>
        <div class="mx-auto w-full max-w-[1320px] relative mt-[120px]">
            <div class="flex items-center gap-[10px]">
                <i class="fa-solid fa-slash text-white"></i>
                <h2 class="text-white text-[22px] tracking-[3px] uppercase" v-if="specificCategory3" >{{ specificCategory3.text }}</h2>
            </div>
            <VideosAll/>
        </div> 
        <div class="w-full max-w-[1320px] mx-auto relative mt-[40px] pb-[40px]">
            <div class="flex items-center gap-[10px]">
                <i class="fa-solid fa-slash text-white"></i>
                <h2 class="text-white text-[22px] tracking-[3px] uppercase mb-[0px]">BIZ BILAN BOG'LANISH</h2>
            </div>
            <Footer/>
        </div> 
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import api from "../server/api";
import Header from "../components/Header/Header.vue";
import VideosAll from "../components/Videos-All/VideosAll.vue";
import WatchVideo from "../components/Watch/WatchVideo.vue";
import Footer from "../components/Footer/Footer.vue";
import { error } from "naive-ui/es/_utils/naive/warn";
const categories = ref("");
const specificCategory1 = ref(null);
const specificCategory2 = ref(null);
const specificCategory3 = ref(null);
const specificCategory4 = ref(null);
const specificCategory5 = ref(null);
const specificCategory6 = ref(null);
const specificCategory7 = ref(null);
const videos = ref("");
const Category = () => {
  return api
    .getOneCategory({ category_id: 9 })
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

const VideosGe = () => {
    return api
    .getVideos({ source_id: 6})
    .then((res) => {
        videos.value = res.data;
        console.log(res.data);
    })
    .catch((error) => {
        console.log('oshibka');
    });
}
onMounted(() => {
  Category();
  VideosGe();
});
</script>

<style>

</style>