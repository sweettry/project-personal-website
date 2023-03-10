<script setup lang="ts">
import { useAppDataStore } from '@/stores/appData'
import { useUserDataStore } from '@/stores/userData'
import { onBeforeUnmount } from 'vue'
import TheButton from './UI/TheButton.vue'
import BaseCard from '@/components/UI/BaseCard.vue'
import BaseBage from './UI/BaseBage.vue'
import CardContentText from './UI/CardContentText.vue'
import CardContentStack from '@/components/UI/CardContentStack.vue'
import CardContentVideo from './UI/CardContentVideo.vue'
const appStore = useAppDataStore()
const userStore = useUserDataStore()
appStore.changeAction()
onBeforeUnmount(() => clearInterval(appStore.interval))
</script>
<template>
  <section id="hero" class="just flex w-auto flex-wrap justify-center p-4">
    <BaseCard>
      <div id="el1" class="m-4 h-96 w-128 p-1">
        <BaseBage>
          {{ userStore.me.status }}
        </BaseBage>
        <CardContentText>
          {{ appStore.action }}
          <template v-slot:plus> {{ userStore.me.description }}</template>
        </CardContentText>
        <CardContentStack :image="`${userStore.me.stack[0].stackImg}`">
          {{ userStore.me.stackTitle }}
          <template v-slot:stackItem>
            {{ userStore.me.stack[0].stackKey }}</template
          ></CardContentStack
        >
        <div id="card-button" class="m-2 h-12 w-96 p-2">
          <TheButton />
        </div>
      </div>
      <CardContentVideo />
    </BaseCard>
  </section>
</template>
