import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useUserDataStore = defineStore('userData', () => {
  const me = reactive({
    status: 'Open to work',
    description:
      'As a highly motivated candidate, I am confident that I can bring value to your organization. Hire me to contribute my skills and enthusiasm to your team.',
    stackTitle: 'Stack:',
    stack: [
      {
        stackKey: 'Vue.js',
        stackImg: '/src/assets/logo.svg',
      },
      {
        stackKey: 'Vue.js',
        stackImg: 'img',
      },
    ],
  })
  return { me }
})
