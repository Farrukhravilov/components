<template>
  <div class="mt-[40px]">
    <MDBInput
      v-model="search1"
      inputGroup
      :formOutline="false"
      wrapperClass="mb-3"
      placeholder="Search"
      aria-label="Search"
      aria-describedby="button-addon2"
    >
      <MDBBtn color="primary">
        <MDBIcon icon="search" />
      </MDBBtn>
    </MDBInput>
  </div>
</template>
<script setup lang="ts">
import { MDBInput, MDBBtn, MDBIcon } from "mdb-vue-ui-kit";
import { ref } from "vue";

const search1 = ref("");
</script>

<style scoped>
.input-group>.form-control {
  height: calc(2.08rem + 16px) !important;
}
</style>
