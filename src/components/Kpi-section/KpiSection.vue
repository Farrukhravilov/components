<template>
  <div class="flex flex-col">
    <KpiItem />
    <KpiOperator />
  </div>
</template>

<script lang="ts" setup>
import { defineComponent } from "vue";
import KpiItem from "../Kpi-section-item/KpiItem.vue";
import KpiOperator from "../Kpi-Operator/KpiOperator.vue";
</script>

<style></style>
