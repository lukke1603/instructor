<script setup lang="ts">
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import Sidebar from "primevue/sidebar";
import Menubar from "primevue/menubar";
import LayoutDashboard from "./components/LayoutDashboard.vue";

const sidebarVisible = ref(true);
const isProfileMenuVisible = ref(false);

const tieredMenuItems = ref([
  {
    label: "Customers",
    icon: "pi pi-fw pi-table",
    items: [
      {
        label: "New",
        icon: "pi pi-fw pi-user-plus",
        items: [
          {
            label: "Customer",
            icon: "pi pi-fw pi-plus",
          },
          {
            label: "Duplicate",
            icon: "pi pi-fw pi-copy",
          },
        ],
      },
      {
        label: "Edit",
        icon: "pi pi-fw pi-user-edit",
      },
    ],
  },
]);
</script>

<template>
  <LayoutDashboard />
</template>
