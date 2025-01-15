<template>
    <div class="p-7 bg-gradient-to-r bg-opacity-50 from-blue-500 backdrop-blur-md to-purple-500 text-white mx-auto w-full max-w-[1320px] border border-white rounded-[12px]"
        data-aos="fade-down" data-aos-delay="1000">
        <h2 class="text-3xl font-bold text-left mb-4">
            <span class="text-white" v-if="hozmaq">{{ hozmaq.text }}</span>
        </h2>
        <div class="p-6 rounded-lg">
            <div class="flex items-center justify-between">
                <div class="bg-gray-900 rounded-lg p-4 shadow-lg">
                    <img src="../assets/images/png/vector.png" alt="" />
                </div>
                <div class="w-full max-w-[450px]">
                    <p class="mt-4 font-normal text-white text-[19px]">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book. It has survived not only five centuries, but also
                        the leap into electronic typesetting, remaining essentially unchanged. It
                        was popularised in the 1960s with the release of Letraset sheets containing
                        Lorem Ipsum passages, and more recently with desktop publishing software
                        like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts"></script>