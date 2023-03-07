<script lang="ts">
// const counter = useCounterStore()
// defineProps<{
//   msg: string
// }>()
export default {
  props: ['name', 'link'],
}
</script>
<template>
  <RouterLink
    aria-label="Home"
    title="Home"
    class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
    :to="`${link}`"
    >{{ name }}</RouterLink
  >
</template>
