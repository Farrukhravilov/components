<template>
  <div>
    <!-- <TaminotItem /> -->
    <!-- <TaminotTableHeader/> -->
    <!-- <TaminotTable/> -->
    <!-- <TaminotDetail /> -->
    <!-- <TaminotDetail /> -->
    <!-- <TableCollabse /> -->
    <!-- <TableCollapseUse/> -->
    <!-- <DavomatTable/> -->
    <!-- <KassaCard/> -->
    <!-- <Expence/> -->
    <!-- <ExpenceModalUse/> -->
    <!-- <Reports /> -->
    <!-- <ReportsFilterModal /> -->
     <!-- <Company/> -->
    <!-- <KpiSection/> -->
     <!-- <Packaging/> -->
      <!-- <Payment/> -->
    <!-- <Transport/> -->
     <!-- <Operator/> -->
      <!-- <Customers/> -->
       <AllCustomersTable/>
  </div>
</template>

<script setup>
import AllCustomersTable from "./components/Customers/AllCustomers.vue";
import Customers from "./components/Customers/Customers.vue";
import Operator from "./components/Operator/Operator.vue";
import Transport from "./components/Transport/Transport.vue";
import Payment from "./components/Payment/Payment.vue";
import Packaging from "./components/Packaging/Packaging.vue";
import KpiSection from "./components/Kpi-section/KpiSection.vue";
import Company from "./components/Company/Company.vue";
import ReportsFilterModal from "./components/reports-filter-modal/ReportsFilterModal.vue";
import Reports from "./components/reports/Reports.vue";
import ExpenceModalUse from "./components/expence-modal/ExpenceModalUse.vue";
import Expence from "./components/expense/Expence.vue";
import DavomatTable from "./components/davomat-table/DavomatTable.vue";
import KassaCard from "./components/kassa-card/KassaCard.vue";
import TaminotDetail from "./components/taminot-detail/TaminotDetail.vue";
// import TableCollabse from "./components/table-collabse/TableCollabse.vue";
// import TaminotTableHeader from "./components/taminot-table-header/TaminotTableHeader.vue";
import TableCollapseUse from "./components/table-collapse/TableCollapseUse.vue";
import TaminotItem from "./components/taminot/TaminotItem.vue";
</script>

<style lang="scss" scoped></style>
