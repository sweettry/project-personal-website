<script setup lang="ts"></script>
<template>
  <div id="block-el-2" class="h-26 my-2 flex w-96">
    <h2
      class="ml-1 flex pl-1 font-sans text-3xl font-bold tracking-tight text-gray-900"
    >
      Ready to&nbsp;
      <span class="inline-block text-deep-purple-accent-400"
        ><slot></slot
      ></span>
    </h2>
  </div>
  <div id="block-el-3" class="my-1 h-28 w-96 px-2">
    <p class="text-base text-gray-700">
      <slot name="plus"></slot>
      <!-- {{ userStore.me.description }} -->
    </p>
  </div>
</template>
