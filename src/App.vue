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
    <GlobInput
      type="number"
      v-model="inputValue"
      placeholder=""
      containerClass="py-2"
      iconClass="fas fa-user"
      textAlignClass="text-left"
      iconPositionClass="right-[10px] top-[25px]"
    />
    <p class="mt-2">Текущее значение: {{ inputValue }}</p>
    <TableToDo />
    <Input />
  </div>
  <!-- <div className="relative z-0 w-full mb-5 group">
    <input
      type="email"
      name="floating_email"
      id="floating_email"
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=" "
      required
    />
    <label
      htmlFor="floating_email"
      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >Email address</label
    >
  </div> -->
  <Map/>
  <Relax/>
  <DropDown/>
</template>

<script setup lang="ts">
import { ref } from "vue";
import DropDown from "./components/Drop-down/DropDown.vue";
import Relax from "./components/Relax/Relax.vue";
import Map from "./components/Gps-Map/Map.vue";
import Input from "./components/Global-Input/Input.vue";
import GlobInput from "./components/CustomInput/GlobInput.vue";
import TableToDo from "./components/Table-Todo/TableToDo.vue";
import Shelves from "./components/Shelves/Shelves.vue";
import PackagingSection from "./components/Packaging-Section/PackagingSection.vue";
import WashingSection from "./components/Washing/WashingSection.vue";
import Washing from "./components/Washing/Washing.vue";
import RetryOrders from "./components/TransportSection/RetryOrders.vue";
import TransportReadyOrders from "./components/TransportSection/TransportReadyOrders.vue";
import TransportAcceptanceDepartment from "./components/TransportSection/TransportAcceptanceDepartment.vue";
import OrderReceivingDepartment from "./components/TransportSection/OrderReceivingDepartment.vue";
import TransportSection from "./components/TransportSection/TransportSection.vue";
import OnDelivery from "./components/OnDelivery/OnDelivery.vue";
import PutTable from "./components/OrdersStatus/PutTable.vue";
import Orders from "./components/OrdersStatus/Orders.vue";
import Receipt from "./components/Delivery/Receipt.vue";
import Delivery from "./components/Delivery/Delivery.vue";
import DebtorsSection from "./components/Customers/DebtorsSection.vue";
import sendSms from "./components/Customers/SendSms.vue";
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
import TableCollapseUse from "./components/table-collapse/TableCollapseUse.vue";
import TaminotItem from "./components/taminot/TaminotItem.vue";
const inputValue = ref("");
</script>

<style lang="scss" scoped></style>
