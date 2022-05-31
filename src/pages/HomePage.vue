<template>
  <main v-if="isLoadedPage" class="flex flex-col items-center justify-center p-4 gap-4">
    <BaseCard width="1200px">
      <template #content>
        <div class="flex items-center gap-4">
          <BaseFormSelect
            v-model="sportCenterValue"
            :options="appStore.sportCenters"
            label="Centre sportif"
            option-label="name"
            data-key="id"
            filter
            @change="onChangeSportCenter"
          />
          <BaseFormSelect
            v-model="fieldValue"
            :options="appStore.fields"
            label="Terrain"
            option-label="name"
            data-key="id"
            filter
            @change="onLoadSession"
          />
          <BaseFormDatepicker
            v-model="dateValue"
            autocomplete="off"
            :manual-input="false"
            label="Date"
            date-format="dd/mm/yy"
            @update:model-value="onLoadSession"
          />
        </div>
      </template>
    </BaseCard>
    <BaseCard width="1200px">
      <template #header>
        <h3 class="p-4 text-center text-2xl font-bold">{{ appStore.sessions.length }} Sessions</h3>
      </template>
      <template #content>
        <div v-if="isLoaded" class="flex flex-col gap-4">
          <HomePageSessionItem v-for="session in appStore.sessions" :key="session.id" :session="session" />
        </div>
        <AppLoader v-else />
      </template>
    </BaseCard>
  </main>
  <AppLoader v-else class="h-screen" />
</template>

<script setup lang="ts">
  import { computed, onMounted, ref } from 'vue'
  import useAppStore from '@/app.store'
  import useLuxon from '@/composables/useLuxon'
  import { Field, SportCenter, FilterSessionPayload } from '@/types'

  const appStore = useAppStore()
  const { dateStartOf, dateEndOf, formatDate } = useLuxon()

  const isLoadedPage = ref<boolean>(false)
  const isLoaded = ref<boolean>(false)
  const dateValue = ref(new Date())
  const sportCenterValue = ref<SportCenter>({})
  const fieldValue = ref<Field>({})

  const payload = computed<FilterSessionPayload>(() => ({
    'ngtvSessionType.id': 2,
    'field.id': fieldValue.value.id,
    'localActualStartedAt[after]': formatDate(dateStartOf(dateValue.value), 'yyyy-MM-dd HH:mm:ss'),
    'localActualStartedAt[before]': formatDate(dateEndOf(dateValue.value), 'yyyy-MM-dd HH:mm:ss'),
    'order[localActualStartedAt]': 'asc',
  }))

  const onChangeSportCenter = async ({ value }: any = {}) => {
    await appStore.getFields(value.id)
    Object.assign(fieldValue.value, appStore.fields[0])
    await onLoadSession()
  }

  const onLoadSession = async () => {
    isLoaded.value = false
    await appStore.getSessions(payload.value)
    isLoaded.value = true
  }

  onMounted(async () => {
    await appStore.getSportCenters()
    Object.assign(sportCenterValue.value, appStore.sportCenters[0])
    await onChangeSportCenter({ value: sportCenterValue })

    isLoadedPage.value = true
  })
</script>
