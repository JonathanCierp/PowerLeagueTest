<template>
  <svg width="30" height="30" viewBox="0 0 105 106" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse opacity="0.3" cx="52.5" cy="53" rx="51.5" ry="52" fill="#BDBDBD" stroke="#FFF" stroke-width="2" />
    <path
      d="M69.2818 77.706L51.2769 89.6211L33.2717 77.7063C27.4821 73.875 24 67.3952 24 60.4527V26.0611L51.2769 16L78.5537 26.0611V60.4524C78.5537 67.3949 75.0716 73.8747 69.2818 77.706Z"
      :fill="primaryColor"
    />
    <path
      d="M51.2769 16V89.6211L69.2821 77.706C75.0716 73.8747 78.5537 67.3949 78.5537 60.4524V26.0611L51.2769 16Z"
      :fill="secondaryColor"
    />
  </svg>
</template>

<script setup lang="ts">
  interface BaseIconShieldProps {
    primaryColor?: string
    secondaryColor?: string
  }

  withDefaults(defineProps<BaseIconShieldProps>(), {
    primaryColor: '#ffffff',
    secondaryColor: '#ffffff',
  })
</script>
