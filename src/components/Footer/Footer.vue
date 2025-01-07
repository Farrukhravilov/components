<template>
    <div class="border border-white rounded-[12px] mt-[40px] relative  mx-auto w-full max-w-[1320px]">
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
                <div class="mr-[20px] ml-[20px]">
                    <form class="flex flex-col gap-[50px] h-[46vh] items-center justify-center w-full">
                        <input type="number" class="inputs text-white focus:none" placeholder="number">
                        <input type="text" class="inputs  text-white focus:none" placeholder="tekst">
                        <button class="sumbit">Jonatish</button>
                    </form>
                </div>
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