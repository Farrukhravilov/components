<!-- <template>
  <TableCollabse :data="tableData">
    <template v-slot:header>
      <h2>kirgili Tokchadagi mahsulotlar</h2>
    </template>
    <template v-slot:column-1>KV №</template>
    <template v-slot:details="{ item }">
      <div class="flex items-center w-full justify-between">
        <td class="py-2 px-4">ADIYOL 1 KISHI</td>
        <td class="py-2 px-4">1 dona</td>
        <td class="py-2 px-4">btn</td>
      </div>
    </template>
    <template v-slot:column-2>Mijoz</template>
    <template v-slot:column-3>Soni</template>
  </TableCollabse>
</template>

<script>
// import TableCollabse from "./components/table-collabse/TableCollabse.vue";
import TaminotTableMain from "../taminot-table-main/TaminotTableMain.vue";
import TableCollabse from "../table-collabse/TableCollabse.vue";
export default {
  data() {
    return {
      tableData: [
        { column1: "92", column2: "1 dona", column3: "1 ta" },
        { column1: "103", column2: "1 dona", column3: "3 ta" },
      ],
    };
  },
  components: {
    TableCollabse,
  },
};
</script> -->

<!-- <template>
  <div id="app">
    <TableCollabse :items="tableItems">
      <template #header>
        <th class="py-2 border-b border-gray-200">ID</th>
        <th class="py-2 border-b border-gray-200">Customer Name</th>
        <th class="py-2 border-b border-gray-200">Quantity Ordered</th>
        <th class="py-2 border-b border-gray-200">Order Status</th>
      </template>

      <template #row="{ item }">
        <td class="py-2 px-4 border-b border-gray-200">
          {{ item.identifier }}
        </td>
        <td class="py-2 px-4 border-b border-gray-200">{{ item.customer }}</td>
        <td class="py-2 px-4 border-b border-gray-200">{{ item.quantity }}</td>
        <td class="py-2 px-4 border-b border-gray-200">
          <span
            class="flex items-center justify-center bg-green-500 text-white rounded-full w-8 h-8"
          >
            <i class="fas fa-check"></i>
          </span>
        </td>
      </template>

      <template #details="{ item }">
        <p>
          Additional Information for {{ item.customer }}: {{ item.details }}
        </p>
        <p>Here is more information about this order.</p>
      </template>
    </TableCollabse>
  </div>
</template>

<script>
// import TableCollabse from "./components/table-collabse/TableCollabse.vue";
import TaminotTableMain from "../taminot-table-main/TaminotTableMain.vue";
import TableCollabse from "../table-collabse/TableCollabse.vue";
export default {
  data() {
    return {
      tableItems: [
        {
          identifier: "ADIYOL 1 KISHI",
          customer: "Test",
          quantity: "1 dona",
          details: "Details for ADIYOL 1 KISHI goes here.",
        },
        {
          identifier: "093",
          customer: "Saygak uchun mijoz",
          quantity: "3 dona",
          details: "Details for Saygak uchun mijoz goes here.",
        },
      ],
    };
  },
  components: {
    TableCollabse,
  },
};
</script>

<style>
</style> -->

<!-- <template>
  <div id="app">
    <TableCollabse :items="tableItems">
      <template #header>
        <th class="py-2 border-b border-gray-200">ID</th>
        <th class="py-2 border-b border-gray-200">Customer Name</th>
        <th class="py-2 border-b border-gray-200">Quantity Ordered</th>
        <th class="py-2 border-b border-gray-200">Order Status</th>
      </template>

      <template #row="{ item }">
        <td class="py-2 px-4 border-b border-gray-200">
          {{ item.identifier }}
        </td>
        <td class="py-2 px-4 border-b border-gray-200">{{ item.customer }}</td>
        <td class="py-2 px-4 border-b border-gray-200">{{ item.quantity }}</td>
        <td class="py-2 px-4 border-b border-gray-200">
          <span
            class="flex items-center justify-center bg-green-500 text-white rounded-full w-8 h-8"
          >
            <i class="fas fa-check"></i>
          </span>
        </td>
      </template>

      <template #details="{ item }">
        <p>
          Additional Information for {{ item.customer }}: {{ item.details }}
        </p>
        <p>Here is more information about this order.</p>
      </template>
    </TableCollabse>
  </div>
</template>

<script>
import TableCollabse from "../table-collabse/TableCollabse.vue";
export default {
  data() {
    return {
      tableItems: [
        {
          identifier: "ADIYOL 1 KISHI",
          customer: "Test",
          quantity: "1 dona",
          details: "Details for ADIYOL 1 KISHI goes here.",
        },
        {
          identifier: "093",
          customer: "Saygak uchun mijoz",
          quantity: "3 dona",
          details: "Details for Saygak uchun mijoz goes here.",
        },
      ],
    };
  },
  components: {
    TableCollabse,
  },
};
</script>

<style>
/* Your global styles can go here */
</style> -->

<template>
  <div id="app">
    <TableCollabse>
      <template v-slot:header-col1>
        <th class="py-2 border-b border-gray-200 text-center">KV N°</th>
      </template>
      <template v-slot:header-col2>
        <!-- <th class="py-2 border-b border-gray-200">Новый Мijoz</th> -->
      </template>
      <template v-slot:header-col3>
        <th class="py-2 border-b border-gray-200 text-center">Soni</th>
      </template>

      <template v-slot:row-col1>
        <td class="py-2 px-4 border-b border-gray-200 text-center">94</td>
      </template>
      <template v-slot:row-col2>
        <td class="py-2 px-4 border-b border-gray-200 text-center">Test</td>
      </template>
      <template v-slot:row-col3>
        <td class="py-2 px-4 border-b border-gray-200 text-center">2 ta</td>
      </template>

      <template v-slot:details1>
        <!-- <p>Это собственные детали для первой записи.</p> -->
        <div class="flex items-center justify-around">
          <td class="py-2 pr-[57px] border-b border-gray-200">92</td>
          <td class="py-2 border-b border-gray-200">Test</td>
          <button
            class="flex items-center justify-center w-10 h-8 bg-green-500 rounded-full text-white hover:bg-green-600 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 12l5 5L20 7"
              />
            </svg>
          </button>
        </div>
      </template>
      <!-- <template v-slot:row-col1>
        <td class="py-2 px-4 border-b border-gray-200">105</td>
      </template>
       <template v-slot:row-col2>
        <td class="py-2 px-4 border-b border-gray-200">Клиент 2</td>
      </template>
       <template v-slot:row-col3>
        <td class="py-2 px-4 border-b border-gray-200">1 ta</td>
      </template> -->
      <template v-slot:details2>
        <div class="flex items-center justify-around">
          <td class="py-2 pr-[57px] border-b border-gray-200">92</td>
          <td class="py-2 border-b border-gray-200">Test</td>
          <button
            class="flex items-center justify-center w-10 h-8 bg-green-500 rounded-full text-white hover:bg-green-600 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 12l5 5L20 7"
              />
            </svg>
          </button>
        </div>
      </template>
    </TableCollabse>
  </div>
</template>

<script>
import TableCollabse from "../table-collabse/TableCollabse.vue";

export default {
  components: {
    TableCollabse,
  },
};
</script>
