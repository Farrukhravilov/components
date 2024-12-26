<template>
  <div class="flex flex-col gap-[60px]">
    <TransportForm />
    <TransportHistory/>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent } from "vue";
import TransportHistory from "../Transport/TransportHistory.vue";
import TransportForm from "../Transport/TransportForm.vue";
</script>

<style></style>
