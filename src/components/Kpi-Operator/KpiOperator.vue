<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold">Kpi - Operator tarixi</h1>
    <p class="text-gray-600">
      2024-12-01 -> 2024-12-31 || oralig'da kpi yozilg'anlar.
    </p>
    <div class="flex items-center justify-between mt-4">
      <span class="font-semibold">Jami summa: 0 so'm</span>
      <button class="btn btn-primary">🔍</button>
    </div>
    <table class="table w-full mt-4">
      <thead>
        <tr>
          <th>T/r</th>
          <th>Xodim</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Sample Xodim</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Sample Xodim 2</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "KpiOperator",
});
</script>

<style scoped>
</style>
