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
  <!-- <HomeView/> -->
  <!-- <DropDown /> -->
  <!-- <i18 /> -->
  <!-- <DarkMode /> -->
  <!-- <GroupInput/> -->
  <!-- <About/> -->
  <!-- <Connection/> -->
  <Videos/>
  <!-- <CreateCategory/> -->
  <!-- <header class="relative z-100 w-full max-w-[1380px] m-auto">
    <nav class="p-4">
      <ul class="flex justify-between items-center">
        <li>
          <router-link to="/About" class="text-white hover:text-red-700 uppercase text-[25px]"
            active-class="active-link">
            Biz haqimizda
          </router-link>
        </li>
        <li>
          <span class="text-white">•</span>
        </li>
        <li>
          <router-link to="/Connection" class="text-white hover:text-red-700 uppercase text-[25px]"
            active-class="active-link">
            Aloqa uchun
          </router-link>
        </li>
        <li>
          <router-link to="/" class="text-2xl text-white font-bold text-center mt-2 uppercase text-[30px]"
            active-class="active-link">
            CRUD GROUP
          </router-link>
        </li>
        <li>
          <router-link to="/Faq" class="text-white hover:text-red-700 uppercase text-[25px]" active-class="active-link">
            FAQ
          </router-link>
        </li>
        <li>
          <span class="text-white">•</span>
        </li>
        <li>
          <router-link to="/Videos" class="text-white hover:text-red-700 uppercase text-[25px]"
            active-class="active-link">
            Video kushimchalar
          </router-link>
        </li>
      </ul>
    </nav>
  </header> -->
  <!-- footer -->
  <!-- <InfoPage/> -->
  <!-- <div class="border border-white rounded mt-[40px] relative  mx-auto w-full max-w-[1320px]">
    <div class="flex items-center">
      <div class="flex p-5 gap-[60px]">
        <div class="">
          <nav>
            <ul class="flex flex-col items-center gap-[32px] justify-left ">
              <li class="flex flex-col gap-[15px] items-center justify-left">
                <span href="" class="text-white text-[19px] ">IJTIMOIY TARMOQLAR</span>
                <i class="fa-solid fa-house text-white"></i>
              </li>
              <li>
                <a class="text-white text-[22px]">TELEFON RAQAM:</a>
              </li>
              <span class="text-white">+998(33)509-09-01</span>
              <li>
                <span href="" class="text-white text-[22px]">EMAIL MANZIL:</span>
              </li>
              <a class="text-white text-[22px] hover:text-black">cruddev1@gmail.com</a>
            </ul>
          </nav>
        </div>
        <div class="mt-[3px]">
          <h2 class="text-white text-[24px]">BIZNING MANZIL:</h2>
          <Map />
        </div>
      </div>
      <div class="border-l border-white w-full h-[45vh]">
        <form class="flex flex-col gap-[50px] h-[46vh] items-center justify-center w-full">
          <input type="text" v-model="phoneValue"
            class="peer block w-[97%] rounded border border-gray-500 mr-[20px] ml-[20px]  px-3 pt-4 pb-2 text-black-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" />
          <label for="float"
            class="absolute left-3 top-2.5 text-black-500 transition-all duration-200 peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2.5 peer-focus:text-blue-500 peer-focus:text-sm">
            ism familiyangiz
          </label>
          <GlobInput type="number" v-model="inputValue" placeholder="" containerClass="py-2" iconClass=""
            textAlignClass="text-left" iconPositionClass="right-[10px] top-[25px]" />
          <button class="text-white  rounded bg-red w-full max-w-[120px] p-3">Yuborish</button>
        </form>
      </div>
    </div>
  </div> -->
</template>

<script setup lang="ts">

import { ref } from "vue";
import Faq from "./views/Faq.vue";
import InfoPage from "./views/InfoPage.vue";
// import CreateCategory from "./components/Creater-Category/CreateCategory.vue";
import CreateCategory from "./components/Creater-Category/CreateCategory.vue";
import Connection from "./views/Connection.vue";
import Videos from "./views/Videos.vue";
// import About from "./views/About.vue";
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
