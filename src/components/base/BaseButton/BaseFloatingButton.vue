<template>
  <PSpeedDial class="fixed bottom-4 right-4" :model="items" direction="up">
    <template #item="{ item }">
      <BaseButton style="padding: 1.4rem" :icon="item.icon" rounded />
      <div class="base-tooltip">{{ item.label }}</div>
    </template>
  </PSpeedDial>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const items = ref([
    {
      label: 'Lancer live',
      icon: 'pi pi-pencil',
      command: () => {
        console.log(1)
      },
    },
    {
      label: 'Add',
      icon: 'pi pi-pencil',
      command: () => {
        console.log(1)
      },
    },
    {
      label: 'Add',
      icon: 'pi pi-pencil',
      command: () => {
        console.log(1)
      },
    },
    {
      label: 'Add',
      icon: 'pi pi-pencil',
      command: () => {
        console.log(1)
      },
    },
  ])
</script>

<style>
  .p-speeddial div.base-tooltip {
    @apply absolute -left-4 top-1/2 -translate-y-1/2 -translate-x-full w-max;
    background: #383838;
    color: rgba(255, 255, 255, 0.87);
    padding: 0.5rem 0.5rem;
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
    border-radius: 3px;
  }
</style>
