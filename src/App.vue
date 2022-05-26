<template>
  <main v-if="isLoaded" class="flex flex-col items-center justify-center p-4">
    <!-- <BaseCard :width="appStore.isMobile ? '100%' : '1200px'"> -->
    <BaseCard width="1200px">
      <template #content>
        <div class="flex items-center gap-4">
          <BaseFormSelect
            v-model="sportCenterValue"
            :options="appStore.sportCenters"
            label="Centre sportif"
            option-label="name"
            data-key="_id"
          />
          <BaseFormSelect v-model="fieldValue" :options="appStore.fields" label="Terrain" option-label="name" data-key="_id" />
          <BaseFormDatepicker v-model="dateValue" autocomplete="off" :manual-input="false" label="Date" date-format="dd/mm/yy" />
        </div>
      </template>
    </BaseCard>
  </main>
</template>

<script setup lang="ts">
  import { onMounted, reactive, ref } from 'vue'
  import useAppStore from '@/app.store'
  import { SportCenter } from '@/types'

  const appStore = useAppStore()

  const isLoaded = ref<boolean>(false)
  const sportCenterValue: SportCenter = reactive({})
  const fieldValue = ref()
  const dateValue = ref(new Date())

  const onChangeSportCenter = async () => {
    await appStore.getFields(sportCenterValue.id)
  }

  onMounted(async () => {
    await appStore.getSportCenters()
    Object.assign(sportCenterValue, appStore.sportCenters[0])
    await onChangeSportCenter()
    isLoaded.value = true
  })
</script>
