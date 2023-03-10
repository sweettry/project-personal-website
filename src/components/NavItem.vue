<script setup lang="ts">
import { RouterLink } from 'vue-router'
defineProps({
  name: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
})
</script>
<template>
  <li>
    <RouterLink
      aria-label="Home"
      title="Home"
      class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
      :to="`${link}`"
      >{{ name }}</RouterLink
    >
  </li>
</template>
