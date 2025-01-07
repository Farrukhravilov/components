<template>
    <div class="border border-white rounded mt-[40px] relative  mx-auto w-full max-w-[1320px]">
        <div class="flex items-center">
            <div class="flex p-5 gap-[60px]">
                <div class="">
                    <nav>
                        <ul class="flex flex-col items-center gap-[32px] justify-left ">
                            <li class="flex flex-col gap-[15px] items-center justify-left">
                                <span href="" class="text-white text-[19px] ">IJTIMOIY TARMOQLAR</span>
                                <i class="fa-solid fa-house text-white"></i>
                            </li>
                            <li>
                                <a class="text-white text-[22px]">TELEFON RAQAM:</a>
                            </li>
                            <span class="text-white">+998(33)509-09-01</span>
                            <li>
                                <span href="" class="text-white text-[22px]">EMAIL MANZIL:</span>
                            </li>
                            <a class="text-white text-[22px] hover:text-black">cruddev1@gmail.com</a>
                        </ul>
                    </nav>
                </div>
                <div class="mt-[3px]">
                    <h2 class="text-white text-[24px]">BIZNING MANZIL:</h2>
                    <Map />
                </div>
            </div>
            <div class="border-l border-white w-full h-[45vh]">
                <form class="flex flex-col gap-[50px] h-[46vh] items-center justify-center w-full">
                    <input  type="text" v-model="phoneValue"
                        class="peer block w-[97%] rounded border border-gray-500 mr-[20px] ml-[20px]  px-3 pt-4 pb-2 text-black-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                    <label for="float"
                        class="absolute left-3 top-2.5 text-black-500 transition-all duration-200 peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2.5 peer-focus:text-blue-500 peer-focus:text-sm">
                        ism familiyangiz
                    </label>
                    <GlobInput type="number" v-model="inputValue" placeholder="" containerClass="py-2" iconClass=""
                        textAlignClass="text-left" iconPositionClass="right-[10px] top-[25px]" />
                    <button class="text-white  rounded bg-red w-full max-w-[120px] p-3">Yuborish</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Map from '../Gps-Map/Map.vue';
import GlobInput from '../CustomInput/GlobInput.vue';
const inputValue = ref("");
</script>


<style></style>