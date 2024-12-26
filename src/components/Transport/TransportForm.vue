<template>
  <div class="w-full p-[20px]">
    <!-- tepadegi div da bg boladi uni qoymadm -->
    <h2
      class="text-[26px] text-[#000] tracking-[3px] border-b border-gray-300 pb-[20px]"
    >
      Transport
    </h2>
    <form class="w-full flex pb-[40px]">
      <select
        id="names"
        class="block appearance-none w-[50%] bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded shadow leading-tight focus:outline-none focus:ring focus:ring-blue-300 transition duration-150 ease-in-out"
      >
        <option value="" disabled selected>ТанLang</option>
        <option value="1">Имя</option>
        <option value="2">Имя</option>
        <option value="3">Имя</option>
        <option value="4">Имя</option>
        <option value="5">Имя</option>
        <option value="6">Имя</option>
      </select>
      <input type="number" placeholder="0" class="w-[50%] border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-blue-300 transition duration-150 ease-in-out">
      <input
        type="number"
        class="w-[50%] border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-blue-300 transition duration-150 ease-in-out"
      />
      <button class="btn bg-indigo-600 text-white rounded px-4 py-2">+</button>
    </form>
    <table class="table w-full border text-[#000] text-center">
      <thead>
        <tr>
          <th>Id</th>
          <th>Hodim</th>
          <th>Buyurtma olgandagi kpi</th>
          <th>Buyurtma topshirgandagi kpi</th>
        </tr>
      </thead>
      <tbody>
        <!-- <tr>
          <td>1</td>
          <td>Azamat</td>
          <td>5000 so`m</td>
          <td>
            <button class="btn btn-warning btn-sm mr-2 hover:bg-yellow-400">
              <i class="fas fa-edit"></i>
            </button>
            <button class="btn btn-error btn-sm hover:bg-red-600">
              <i class="fas fa-trash-alt"></i>
            </button>
          </td>
        </tr> -->
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts"></script>

<style></style>
