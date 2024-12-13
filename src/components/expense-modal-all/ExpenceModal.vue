<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 flex items-center justify-center z-50"
  >
    <div class="absolute inset-0 bg-black opacity-50" @click="close"></div>
    <div class="bg-white rounded-lg shadow-lg p-6 z-10 w-[50%] h-[35%] mx-auto relative">
      <div class="flex justify-between items-center border-b border-gray-300 pb-[30px]">
        <h2 class="text-lg font-semibold">Doimiy chiqim qo`shish</h2>
        <button @click="close" class="text-red-500 text-[30px] flex items-center justify-center text-center h-[40px] w-[40px] bg-red-300 rounded-[8px]">&times;</button>
      </div>
      <div class="mt-4">
        <slot name="body"></slot>
      </div>
      <div class="mt-4 flex justify-end">
        <slot name="footer">
          <button
            @click="close"
            class="bg-gray-300 text-gray-700 rounded px-4 py-2 mr-2"
          >
          </button>
          <button
            @click="confirm"
            class="bg-blue-500 text-white rounded px-4 py-2"
          >
            Подтвердить
          </button>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
    confirm() {
      this.$emit("confirm");
      this.close();
    },
  },
};
</script>

<style scoped>
/* Дополнительные стили, если необходимо */
</style>
