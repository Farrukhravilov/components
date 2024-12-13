<template>
  <div class="container mx-auto mt-5">
    <h2 class="text-xl font-semibold mb-4 text-center">
      Kirgili Tokchadagi mahsulotlar
    </h2>
    <table class="min-w-full bg-white border border-gray-200 rounded-lg">
      <thead>
        <tr>
          <slot name="header-col1"
            ><th class="py-2 border-b border-gray-200">KV N°</th></slot
          >
          <slot name="header-col2"
            ><th class="py-2 border-b border-gray-200">Mijoz</th></slot
          >
          <slot name="header-col3"
            ><th class="py-2 border-b border-gray-200">Soni</th></slot
          >
        </tr>
      </thead>
      <tbody>
        <tr class="hover:bg-blue-100" @click="toggleCollapse(0)">
          <slot name="row-col1"
            ><td class="py-2 px-4 border-b border-gray-200">92</td></slot
          >
          <slot name="row-col2"
            ><td class="py-2 px-4 border-b border-gray-200">Test</td></slot
          >
          <slot name="row-col3"
            ><td class="py-2 px-4 border-b border-gray-200">1 ta</td></slot
          >
        </tr>
        <Transition name="collapse-transition">
          <tr v-show="isOpen(0)" key="collapse1">
            <td colspan="3" class="py-2 px-4 border-b border-gray-200">
              <div class="p-4 bg-gray-200">
                <slot name="details1">
                  <td class="py-2 px-4 border-b border-gray-200">92</td>
                  <td class="py-2 px-4 border-b border-gray-200">Test</td>
                  <td class="py-2 px-4 border-b border-gray-200">1 ta</td>
                </slot>
              </div>
            </td>
          </tr>
        </Transition>

        <tr class="hover:bg-blue-100" @click="toggleCollapse(1)">
          <slot name="row-col1"
            ><td class="py-2 px-4 border-b border-gray-200 text-center">
              103
            </td></slot
          >
          <slot name="row-col2"
            ><td class="py-2 px-4 border-b border-gray-200 text-center">
              Saygak uchun mijoz
            </td></slot
          >
          <slot name="row-col3"
            ><td class="py-2 px-4 border-b border-gray-200 text-center">
              3 ta
            </td></slot
          >
        </tr>
        <Transition name="collapse-transition">
          <tr v-show="isOpen(1)" key="collapse2">
            <td colspan="3" class="py-2 px-4 border-b border-gray-200">
              <div class="p-4 bg-gray-200">
                <slot name="details2">
                  <p>
                    Details for Saygak uchun mijoz. This space can contain more
                    information related to the customer.
                  </p>
                </slot>
              </div>
            </td>
          </tr>
        </Transition>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      openRows: [],
    };
  },
  methods: {
    toggleCollapse(index) {
      const rowIndex = this.openRows.indexOf(index);
      if (rowIndex === -1) {
        this.openRows.push(index);
      } else {
        this.openRows.splice(rowIndex, 1);
      }
    },
    isOpen(index) {
      return this.openRows.includes(index);
    },
  },
};
</script>

<style>
.collapse-transition-enter-active,
.collapse-transition-leave-active {
  transition: max-height 0.3s ease;
}
.collapse-transition-enter,
.collapse-transition-leave-to {
  max-height: 0;
  overflow: hidden;
}
</style>
