<script setup lang="ts">
import LayoutDashboardSidebar from "./LayoutDashboardSidebar.vue";
import LayoutDashboardHeader from "./LayoutDashboardHeader.vue";
</script>

<template>
  <div class="flex h-screen bg-gray-200 font-roboto">
    <LayoutDashboardSidebar />

    <div class="flex-1 flex flex-col overflow-hidden">
      <LayoutDashboardHeader />

      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
        <div class="container mx-auto px-6 py-8">
          <RouterView />
        </div>
      </main>
    </div>
  </div>
</template>
