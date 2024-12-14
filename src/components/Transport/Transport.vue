<template>
  <div class="flex flex-col gap-[60px]">
    <TransportForm />
    <TransportHistory/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TransportForm from "../Transport/TransportForm.vue";
import TransportHistory from "../Transport/TransportHistory.vue";
export default defineComponent({
  components: {
    TransportForm,
    TransportHistory,
  },
});
</script>

<style></style>
