<template>
  <PCard v-bind="$attrs">
    <template v-if="$slots.header" #header>
      <slot name="header" />
    </template>
    <template v-if="$slots.title" #title>
      <slot name="title" />
    </template>
    <template v-if="$slots.subtitle" #subtitle>
      <slot name="subtitle" />
    </template>
    <template v-if="$slots.content" #content>
      <slot name="content" />
    </template>
    <template v-if="$slots.footer" #footer>
      <slot name="footer" />
    </template>
  </PCard>
</template>

<script setup lang="ts">
  interface CardProps {
    width?: string
  }

  withDefaults(defineProps<CardProps>(), {
    width: '',
  })
</script>

<style>
  .p-card {
    width: v-bind(width);
  }
</style>
