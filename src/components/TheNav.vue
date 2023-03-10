<script setup lang="ts">
import { useAppDataStore } from '@/stores/appData'
import { RouterView } from 'vue-router'
import TheLogo from '@/components/TheLogo.vue'
import NavItem from './NavItem.vue'

const store = useAppDataStore()
</script>

<template>
  <div
    class="fixed h-16 w-full border-b border-solid border-gray-500 bg-gray-50 px-8 shadow-lg"
  >
    <div class="mx-auto flex h-full flex-nowrap">
      <TheLogo />
      <nav class="ml-12 h-16 items-center text-sm">
        <ul class="flex h-full items-center space-x-10 lg:flex">
          <NavItem
            class="flex h-full items-center space-x-10 lg:flex"
            v-for="menuItem in store.menuItems"
            :key="menuItem.name"
            :name="menuItem.name"
            :link="menuItem.link"
          >
          </NavItem>
        </ul>
        <RouterView />
      </nav>
      <TheButton />
    </div>
  </div>
</template>
