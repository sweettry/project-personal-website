import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  // const count = ref(0)
  const menuItems = ref([
    { name: 'Home', link: '/' },
    { name: 'Projects', link: '/projects' },
    { name: 'Resume', link: '/resume' },
    { name: 'Contact', link: '/contact' },
  ])
  return { menuItems }
  // const doubleCount = computed(() => count.value * 2)
  // function increment() {
  //   count.value++
  // }

  // return { count, doubleCount, increment }
})
