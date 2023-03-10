<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="ml-auto flex h-full items-center space-x-10">
    <RouterLink
      aria-label="Our product"
      title="Our product"
      class="mb-3 inline-flex h-12 w-full items-center justify-center rounded bg-deep-purple-accent-400 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none md:mr-4 md:mb-0 md:w-auto"
      to="/resume"
      ><span class="mr-3">Button</span>
    </RouterLink>
  </div>
</template>
