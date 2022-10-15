<script lang="ts" setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const props = defineProps<{
  label: string;
  name: string;
  icon: string;
}>();

const route = useRoute();
const routerLinkClass = computed(() => {
  if (route.name === props.name) {
    return "bg-gray-600 bg-opacity-25 text-gray-100 border-gray-100";
  }

  return "border-gray-900 text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100";
});
</script>

<template>
  <router-link
    class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
    :class="routerLinkClass"
    :to="{ name }"
  >
    <i :class="icon"></i>
    <span class="mx-4">{{ label }}</span>
  </router-link>
</template>
