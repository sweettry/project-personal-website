<script setup lang="ts">
defineProps({
  image: {
    type: String,
    required: true,
  },
})
</script>
<template>
  <div id="block-el-4" class="my-1 block h-24 w-96 px-2">
    <p class="block text-base text-deep-purple-accent-400">
      <strong><slot></slot> </strong>
    </p>
    <span class="my-1 flex">
      <img :src="image" alt="" />
      <span> <slot name="stackItem"></slot></span>
    </span>
  </div>
</template>
