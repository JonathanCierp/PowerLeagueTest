<template>
  <PButton v-bind="$attrs" :class="[blockClass, roundedClass, textClass]" :loading="loading">
    <slot />
  </PButton>
</template>

<script setup lang="ts">
  import { computed } from 'vue'

  interface ButtonProps {
    block?: boolean
    rounded?: boolean
    text?: boolean
    loading?: boolean
  }

  const props = withDefaults(defineProps<ButtonProps>(), {
    block: false,
    rounded: false,
    text: false,
    loading: false,
  })

  const blockClass = computed(() => (props.block ? 'w-full items-center justify-center' : ''))
  const roundedClass = computed(() => (props.rounded ? 'p-button-rounded' : ''))
  const textClass = computed(() => (props.text ? 'p-button-text' : ''))
</script>
