<template>
  <main class="flex flex-col items-center justify-center p-4">
    <!-- <BaseCard :width="appStore.isMobile ? '100%' : '1200px'"> -->
    <BaseCard width="1200px">
      <template #content>
        <div class="flex items-center gap-4">
          <BaseFormSelect v-model="sportCenter" :options="sportCenterOptions" label="Centre sportif"> </BaseFormSelect>
          <BaseFormSelect v-model="field" :options="fieldOptions" label="Terrain"> </BaseFormSelect>
          <BaseFormDatepicker v-model="date" autocomplete="off" :manual-input="false" label="Date" date-format="dd/mm/yy" />
        </div>
      </template>
    </BaseCard>
  </main>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const sportCenter = ref()
  const field = ref()
  const date = ref(new Date())
  const sportCenterOptions = ref([])
  const fieldOptions = ref([])
</script>
