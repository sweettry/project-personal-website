import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppDataStore = defineStore('appData', () => {
  // const count = ref(0)
  const menuItems = [
    { name: 'Home', link: '/' },
    { name: 'Projects', link: '/projects' },
    { name: 'Resume', link: '/resume' },
    { name: 'Contact', link: '/contact' },
  ]
  const action = ref('Work Hard')
  const actions = [
    'Work Hard',
    'Create Prototype',
    'Learn Fast',
    'Make a Difference',
  ]

  const interval = ref(0)

  function changeAction() {
    interval.value = setInterval(() => {
      const currentActionIndex = actions.indexOf(action.value)
      const nextActionIndex = (currentActionIndex + 1) % 4
      const nextAction = actions[nextActionIndex]
      action.value = nextAction
    }, 3000)
  }

  return { menuItems, action, changeAction, interval }
  // const doubleCount = computed(() => count.value * 2)
  // function increment() {
  //   count.value++
  // }

  // return { count, doubleCount, increment }
})
