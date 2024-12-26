<template>
    <div class="">
        <PackagingSellect/>
        <PackagingTable/>
        <KpiOperator />
    </div>
</template>

<script lang="ts" setup>  
import { defineComponent } from 'vue';  
import PackagingTable from '../Packaging-table/PackagingTable.vue';  
import KpiOperator from "../Kpi-Operator/KpiOperator.vue";
import PackagingSellect from "../Packaging-Sellect/PackagingSellect.vue";
</script>
<style>

</style>

