<template>
  <div class="bg-gray-100 p-6 flex flex-col items-center">
    <div class="w-full flex max-w-lg items-center justify-between mb-[25px]">
      <h2 class="text-xl text-left font-bold">Kassaga kirim</h2>
      <button class="rounded-[6px] w-[40px] h-[40px] flex items-center justify-center bg-blue-600">
        <i class="fa-solid fa-question text-white"></i>
      </button>
    </div>
    <div class="flex justify-center items-center w-full mb-[20px]">
      <button
        class="flex gap-[10px] items-center justify-center w-full max-w-lg bg-blue-600 text-white font-semibold rounded-[10px] py-3 px-6 transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105"
      >
        <i class="fa-solid fa-arrows-rotate"></i>
        Kassa kirim tarixi
      </button>
    </div>
    <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
      <div class="flex justify-between items-start">
        <div class="flex justify-between mb-4">
          <div
            class="flex items-end gap-[3px] border-b border-gray-200 pb-[20px]"
          >
            <img
              class="w-[30px] h-[25px]"
              src="/src/assets/images/svg/login.svg"
              alt=""
            />
            <span class="font-semibold text-[20px]">TEST FILIAL ADMIN</span
            ><br />
            <span class="text-gray-500 text-[16px]">admin_filial</span>
          </div>
        </div>
        <button
          class="w-[40px] h-[30px] flex items-center justify-center bg-gray-200 rounded-[8px] text-blue-500 hover:text-blue-700 transition duration-200"
        >
          <i class="fa-solid fa-arrows-rotate"></i>
        </button>
      </div>
      <div class="flex items-center gap-[20px]">
        <div class="flex flex-col w-[50%]">
          <label class="block text-gray-700 mb-2" for="naqdPul">Naqd pul</label>
          <div
            class="border bg-gray-200 rounded w-full py-2 px-3 mb-4 transition duration-200"
          >
            200000 so'm
          </div>
          <!-- <input
              v-model="naqdPul"
              type="text"
              id="naqdPul"
              class="border rounded w-full py-2 px-3 mb-4 transition duration-200 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="200000 so‘m"
            /> -->
        </div>
        <div class="flex flex-col">
          <label class="block text-gray-700 mb-2" for="hisobPul"
            >Hisobchiga naqd pul topshirildi</label
          >
          <div class="flex items-center mb-4">
            <input
              v-model="hisobPul"
              type="text"
              id="hisobPul"
              class="border rounded-l py-2 px-3 w-full transition duration-200 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="summna"
            />
            <span class="h-[42px] bg-gray-200 text-gray-700 rounded-r py-2 px-3"
              >so‘m</span
            >
          </div>
        </div>
      </div>
      <label class="block text-gray-700 mb-2">
        Hisobchiga naqd pul topshirilmadi
      </label>
      <div class="flex">
        <div
          class="border bg-gray-200 rounded w-full py-2 px-3 mb-4 transition duration-200"
        >
          summa
        </div>
        <div
          class="bg-gray-200 border-l border-gray-500 rounded w-[13%] py-2 px-3 mb-4"
        >
          <span>so'm</span>
        </div>
      </div>
      <button
        @click="submit"
        class="bg-blue-500 flex items-center justify-center gap-[10px] text-white rounded py-2 w-full transition duration-200 hover:bg-blue-600 hover:shadow-lg"
      >
       Olindi <i class="fa-solid fa-check"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      naqdPul: "",
      hisobPul: "",
      hisobPulTop: "",
    };
  },
  methods: {
    submit() {
      // Handle form submission logic
      console.log("Form submitted: ", {
        naqdPul: this.naqdPul,
        hisobPul: this.hisobPul,
        hisobPulTop: this.hisobPulTop,
      });

      // Clear the form fields after submission
      this.naqdPul = "";
      this.hisobPul = "";
      this.hisobPulTop = "";
    },
  },
};
</script>

<style scoped>
/* Additional scoped styles can be added here */
</style>
