<script lang="ts">
import { defineComponent } from 'vue';
import PaymentTable from "../Payment/PaymentTable.vue";
import PaymentHistory from "../Payment/PaymentHistory.vue";
export default defineComponent({  
  components: {  
    PaymentTable,
    PaymentHistory,
  },  
});  
</script>

<template>
  <div class="">
    <PaymentTable/>
    <PaymentHistory/>
  </div>
</template>

<style></style>
