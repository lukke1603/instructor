<script setup lang="ts">
import axios from "axios";
import moment from "moment";
import Card from "primevue/card";
import DataTable from "primevue/dataTable";
import Column from "primevue/column";
import Avatar from "primevue/avatar";
import { onMounted, ref } from "vue";

type Trainee = {
  _id: string;
  firstname: string;
  lastname: string;
};

let trainees = ref<Trainee[]>([]);

function getYearOfDate(date: string) {
  return moment(date).format("YYYY");
}

onMounted(async () => {
  const res = await axios.get(
    "https://instructor-d6f38-default-rtdb.europe-west1.firebasedatabase.app/trainees.json"
  );

  trainees.value = Object.values(res.data);
});
</script>

<template>
  <Card class="trainees-view">
    <template #content>
      <DataTable
        :value="trainees"
        :paginator="true"
        :rows="10"
        dataKey="_id"
        :rowHover="true"
      >
        <Column body-class="flex !px-4" header-class="w-8">
          <template #body>
            <Avatar
              icon="pi pi-user"
              class="mx-auto"
              size="large"
              shape="circle"
            />
          </template>
        </Column>
        <Column header="Name">
          <template #body="{ data }">
            {{ data.firstname }} {{ data.lastname }}
          </template>
        </Column>
        <Column
          header="Eingestellt am"
          header-class="center"
          body-class="!text-center"
        >
          <template #body="{ data }">
            {{ getYearOfDate(data.hired_at) }}
          </template>
        </Column>
        <Column
          header="Lehrjahr"
          header-class="center"
          body-class="!text-center"
          field="apprenticeship_year"
        />
        <Column
          header="Ausbilder"
          header-class="center"
          body-class="!text-center"
        >
          <template #body="{ data }">
            {{ data.instructor.firstname }} {{ data.instructor.lastname }}
          </template>
        </Column>
      </DataTable>
    </template>
  </Card>
</template>

<style lang="scss">
.trainees-view {
  .center {
    .p-column-header-content {
      @apply justify-center;
    }
  }

  .p-datatable-tbody tr {
    @apply cursor-pointer;
  }
}
</style>
