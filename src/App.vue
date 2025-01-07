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
    <!-- <AllCustomersTable/> -->
    <!-- <sendSms /> -->
    <!-- <DebtorsSection/> -->
    <!-- <Delivery/> -->
    <!-- delivery FOYIZ/BOLISH BUTTONDI COMPONENTASI !!!! -->
    <!-- <Receipt/> -->
    <!-- TEPADGI DELIVERY NIKI -->
    <!-- <Orders /> -->
    <!-- <PutTable/> -->
    <!-- <OnDelivery/> -->
    <!-- <TransportSection /> -->
    <!-- <OrderReceivingDepartment/> -->
    <!-- <TransportAcceptanceDepartment/> -->
    <!-- <RetryOrders/> -->
    <!-- <TransportReadyOrders/> -->
    <!-- <Washing/> -->
    <!-- <WashingSection/> -->
    <!-- <PackagingSection /> -->
    <!-- <Shelves /> -->
    <!-- <GlobInput
      type="number"
      v-model="inputValue"
      placeholder=""
      containerClass="py-2"
      iconClass="fas fa-user"
      textAlignClass="text-left"
      iconPositionClass="right-[10px] top-[25px]"
    /> -->
    <!-- <p class="mt-2">Текущее значение: {{ inputValue }}</p> -->
    <!-- <TableToDo /> -->
    <!-- <Input /> -->
  </div>
  <!-- <router-view /> -->
  <!-- <HomeView /> -->
  <!-- <Map /> -->
  <!-- <Faq/> -->
  <!-- <DropDown /> -->
  <!-- <i18 /> -->
  <!-- <DarkMode /> -->
  <!-- <GroupInput/> -->
  <About/>
</template>

<script setup lang="ts">

import { ref } from "vue";
import Faq from "./views/Faq.vue";
import About from "./views/About.vue";
import HomeView from "./views/HomeView.vue";
import DarkMode from "./components/DarkMode/DarkMode.vue";
import i18 from "./components/i18-locales/i18.vue";
import DropDown from "./components/Drop-down/DropDown.vue";
import Map from "./components/Gps-Map/Map.vue";
import Input from "./components/Global-Input/Input.vue";
import GlobInput from "./components/CustomInput/GlobInput.vue";
import TableToDo from "./components/Table-Todo/TableToDo.vue";
import GroupInput from "./components/Input-groups/GroupInput.vue";
// import Shelves from "./components/Shelves/Shelves.vue";
// import PackagingSection from "./components/Packaging-Section/PackagingSection.vue";
// import WashingSection from "./components/Washing/WashingSection.vue";
// import Washing from "./components/Washing/Washing.vue";
// import RetryOrders from "./components/TransportSection/RetryOrders.vue";
// import TransportReadyOrders from "./components/TransportSection/TransportReadyOrders.vue";
// import TransportAcceptanceDepartment from "./components/TransportSection/TransportAcceptanceDepartment.vue";
// import OrderReceivingDepartment from "./components/TransportSection/OrderReceivingDepartment.vue";
// import TransportSection from "./components/TransportSection/TransportSection.vue";
// import OnDelivery from "./components/OnDelivery/OnDelivery.vue";
// import PutTable from "./components/OrdersStatus/PutTable.vue";
// import Orders from "./components/OrdersStatus/Orders.vue";
// import Receipt from "./components/Delivery/Receipt.vue";
// import Delivery from "./components/Delivery/Delivery.vue";
// import DebtorsSection from "./components/Customers/DebtorsSection.vue";
// import sendSms from "./components/Customers/SendSms.vue";
// import AllCustomersTable from "./components/Customers/AllCustomers.vue";
// import Customers from "./components/Customers/Customers.vue";
// import Operator from "./components/Operator/Operator.vue";
// import Transport from "./components/Transport/Transport.vue";
// import Payment from "./components/Payment/Payment.vue";
// import Packaging from "./components/Packaging/Packaging.vue";
// import KpiSection from "./components/Kpi-section/KpiSection.vue";
// import Company from "./components/Company/Company.vue";
// import ReportsFilterModal from "./components/reports-filter-modal/ReportsFilterModal.vue";
// import Reports from "./components/reports/Reports.vue";
// import ExpenceModalUse from "./components/expence-modal/ExpenceModalUse.vue";
// import Expence from "./components/expense/Expence.vue";
// import DavomatTable from "./components/davomat-table/DavomatTable.vue";
// import KassaCard from "./components/kassa-card/KassaCard.vue";
// import TaminotDetail from "./components/taminot-detail/TaminotDetail.vue";
// import TableCollapseUse from "./components/table-collapse/TableCollapseUse.vue";
// import TaminotItem from "./components/taminot/TaminotItem.vue";
const inputValue = ref("");
</script>

<style lang="scss" scoped></style>
