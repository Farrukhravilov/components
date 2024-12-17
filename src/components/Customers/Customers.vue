<template>
    <div>
        <CustomersForm/>
        <!-- ALL CUSTOMERS BOWGA PAGE -->
    </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import CustomersForm from "../Customers/CustomersForm.vue";
// import CustomersForm from "../Custmomers/CustomersForm.vue";
export default defineComponent({
  components: {
    CustomersForm,
  },
});
</script>

<style>

</style>