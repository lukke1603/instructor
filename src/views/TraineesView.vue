<script setup lang="ts">
import axios from "axios";
import Card from "primevue/card";
import Divider from "primevue/divider";
import { onMounted, ref } from "vue";

type Trainee = {
  _id: string;
  firstname: string;
  lastname: string;
};

let trainees = ref<Trainee[]>([]);

onMounted(async () => {
  const res = await axios.get(
    "https://instructor-d6f38-default-rtdb.europe-west1.firebasedatabase.app/trainees.json"
  );

  trainees.value = Object.values(res.data);
});
</script>

<template>
  <Card>
    <template #content>
      <template v-for="trainee of trainees" :key="trainee._id">
        <div>
          <span>{{ trainee.firstname }} {{ trainee.lastname }}</span>
        </div>
        <Divider />
      </template>
    </template>
  </Card>
</template>
