<template>
    <div class="">
        <PackagingSellect/>
        <PackagingTable/>
        <KpiOperator />
    </div>
</template>

<script lang="ts">  
import { defineComponent } from 'vue';  
import PackagingTable from '../Packaging-table/PackagingTable.vue';  
import KpiOperator from "../Kpi-Operator/KpiOperator.vue";
import PackagingSellect from "../Packaging-Sellect/PackagingSellect.vue";
export default defineComponent({  
  components: {  
    PackagingTable,
    KpiOperator,
    PackagingSellect,
  },  
});  
</script>
<style>

</style>

