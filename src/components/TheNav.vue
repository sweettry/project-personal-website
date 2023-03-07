<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavItem from './NavItem.vue'
// import { useCounterStore } from '@/stores/counter'
import TheLogo from '@/components/TheLogo.vue'
// const counter = useCounterStore()
// defineProps<{
//   msg: string
// }>()

export default {
  components: {
    TheLogo,
    NavItem,
  },
  data() {
    return {
      menuItems: [
        { name: 'Home', link: '/' },
        { name: 'Projects', link: '/projects' },
        { name: 'Resume', link: '/resume' },
        { name: 'Contact', link: '/contact' },
      ],
    }
  },
}
</script>

<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 h-16 w-full bg-gray-50">
      <div
        id="test"
        class="mx-auto flex h-full flex-nowrap border-b border-solid border-gray-500 px-8 shadow-lg"
      >
        <TheLogo />
        <nav class="ml-12 h-16 items-center">
          <ul class="flex h-full items-center space-x-10 lg:flex">
            <li
              v-for="menuItem in menuItems"
              :key="menuItem.name"
              :name="menuItem.name"
              :link="menuItem.link"
            >
              <RouterLink
                aria-label="Home"
                title="Home"
                class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                :to="`${menuItem.link}`"
                >{{ menuItem.name }}</RouterLink
              >
              <NavItem />
            </li>
          </ul>
          <RouterView />
        </nav>
        <TheButton />
      </div>
    </div>
  </header>
</template>
