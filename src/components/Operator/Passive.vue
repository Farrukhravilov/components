<template>
  <div class="p-5 bg-gray-50 rounded-lg shadow-md">
    <ButtonsType />
    <div class="flex items-center justify-between pb-[20px]">
      <h1 class="text-xl font-bold border border-yellow-500 rounded-[8px] p-2">
        <i class="fas fa-phone-alt"></i>
      </h1>
      <OperatorDropDown />
    </div>

    <table class="min-w-full border border-gray-300 text-center">
      <thead class="bg-blue-200">
        <tr>
          <th>№</th>
          <th>Mijoz</th>
          <th>Telefon raqam</th>
          <th>Qo`ng`iroqlar soni</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(customer, index) in customers" :key="customer.id">
          <td class="text-blue-600">{{ index + 1 }}</td>
          <td class="text-blue-600">{{ customer.name }}</td>
          <td class="text-blue-600">{{ customer.phone }}</td>
          <td class="text-blue-600">{{ customer.income }}</td>
          <!-- <td>
            <span class="text-[#000] p-1 rounded-[8px]">
              {{ customer.daysLeft }} kun
            </span>
          </td> -->
          <td class="p-2">
            <button
              class="border border-blue-500 p-2 flex items-center justify-center rounded-[6px] text-blue-500 hover:bg-blue-500 transition duration-200 hover:text-[#fff]"
            >
              <i class="fas fa-redo"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import OperatorDropDown from "../Operator/OperatorDropDown.vue";
import ButtonsType from "../Operator/ButtonsType.vue";
import Pagination from "../Operator/Pagination.vue";
interface Customer {
  id: number;
  name: string;
  phone: string;
  income: string;
  daysLeft: number;
}

export default defineComponent({
  setup() {
    const customers: Customer[] = [
      {
        id: 1,
        name: "Saidjon",
        phone: "+98934500095",
        income: "3",
        daysLeft: -152,
      },
      {
        id: 2,
        name: "Sputnik",
        phone: "+98985289061",
        income: "1",
        daysLeft: -151,
      },
      {
        id: 3,
        name: "Anjirchi Shoira 4wt 1adyol",
        phone: "+98950511060",
        income: "1",
        daysLeft: -147,
      },
      {
        id: 4,
        name: "Eshmetov Sulton - Paxtakor 1 wt",
        phone: "+98974530249",
        income: "2",
        daysLeft: -144,
      },
      {
        id: 5,
        name: "Javohir - Avesta 622201192 2 wt",
        phone: "+99862201192",
        income: "1",
        daysLeft: -144,
      },
      {
        id: 6,
        name: "Goybu kollej 3 wt 12000",
        phone: "+98937444882",
        income: "3",
        daysLeft: -144,
      },
      {
        id: 6,
        name: "Goybu kollej 3 wt 12000",
        phone: "+98937444882",
        income: "4",
        daysLeft: -144,
      },
      {
        id: 6,
        name: "Goybu kollej 3 wt 12000",
        phone: "+98937444882",
        income: "5",
        daysLeft: -144,
      },
      {
        id: 6,
        name: "Goybu kollej 3 wt 12000",
        phone: "+98937444882",
        income: "5",
        daysLeft: -144,
      },
      {
        id: 6,
        name: "Goybu kollej 3 wt 12000",
        phone: "+98937444882",
        income: "2",
        daysLeft: -144,
      },
      // Добавьте больше клиентов по необходимости
    ];

    const callCustomer = (phone: string) => {
      // Здесь вы можете реализовать функциональность звонка
      alert(`Zvonimo na: ${phone}`);
    };

    return {
      customers,
      callCustomer,
    };
  },
  components: {
    OperatorDropDown,
    ButtonsType,
    Pagination,
  },
});
</script>

<style>
/* @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"); */
</style>
