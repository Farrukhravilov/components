<template>
    <div class="">
        <AllCustomersTable/>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import AllCustomersTable from "../Customers/AllCustomersTable.vue";
export default defineComponent({
  components: {
    AllCustomersTable,
  },
});
</script>

<style></style>
