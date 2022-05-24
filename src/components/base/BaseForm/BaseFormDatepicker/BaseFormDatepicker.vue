<template>
  <div class="w-full">
    <label v-if="label" :for="id" class="inline-block mb-2 font-medium">{{ label }}</label>
    <PCalendar v-bind="$attrs" class="w-full" :placeholder="placeholder" />
  </div>
</template>

<script setup lang="ts">
  interface BaseFormDatepickerProps {
    label?: string
    id?: string
    placeholder?: string
  }

  withDefaults(defineProps<BaseFormDatepickerProps>(), {
    label: '',
    id: '',
    placeholder: '...',
  })
</script>
