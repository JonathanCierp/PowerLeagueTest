<template>
  <main v-if="isLoaded" class="flex flex-col items-center justify-center p-4 gap-4">
    <BaseCard width="1200px">
      <template #content>
        <div class="flex items-center gap-4">
          <BaseFormSelect
            v-model="sportCenterValue"
            :options="appStore.sportCenters"
            label="Centre sportif"
            option-label="name"
            data-key="id"
            @change="onChangeSportCenter"
          />
          <BaseFormSelect
            v-model="fieldValue"
            :options="appStore.fields"
            label="Terrain"
            option-label="name"
            data-key="id"
            @change="onChangeFields"
          />
          <BaseFormDatepicker v-model="dateValue" autocomplete="off" :manual-input="false" label="Date" date-format="dd/mm/yy" />
        </div>
      </template>
    </BaseCard>
    <BaseCard width="1200px">
      <template #header>
        <h3 class="p-4 text-center text-2xl font-bold">{{ appStore.sessions.length }} Sessions</h3>
      </template>
      <template #content>
        <div class="flex flex-col gap-4">
          <div v-for="session in appStore.sessions" :key="session.id" class="grid grid-cols-3 p-4 items-center bg-green-100">
            <div>
              <p class="font-bold">
                <span class="text-green-500">{{ session.name }}</span> - {{ session.field.name }}
              </p>
              <div class="flex items-center gap-2">
                <i class="pi pi-clock" />
                <p>
                  {{ $d(session.localActualStartedAt, 'shortTime') }}
                </p>
              </div>
            </div>
            <div class="flex items-center justify-center text-3xl font-bold gap-4">
              <BaseIconShield
                width="40"
                height="40"
                :primary-color="session.ngtvSessionHomeTeam.color"
                :secondary-color="session.ngtvSessionHomeTeam.color"
              />
              {{ session.ngtvSessionHomeTeam.fullScore[0] }} - {{ session.ngtvSessionAwayTeam.fullScore[0] }}
              <BaseIconShield
                width="40"
                height="40"
                :primary-color="session.ngtvSessionAwayTeam.color"
                :secondary-color="session.ngtvSessionAwayTeam.color"
              />
            </div>
            <BaseButton class="p-button-sm justify-self-end" @click="$router.push({ name: 'session-view', params: { id: session.id } })">
              Voir le match
            </BaseButton>
          </div>
        </div>
      </template>
    </BaseCard>
  </main>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import useAppStore from '@/app.store'
  import { Field, SportCenter } from '@/types'

  const appStore = useAppStore()

  const isLoaded = ref<boolean>(false)
  const dateValue = ref(new Date())
  const sportCenterValue = ref<SportCenter>({})
  const fieldValue = ref<Field>({})

  const onChangeSportCenter = async ({ value }: any = {}) => {
    await appStore.getFields(value.id)
    fieldValue.value = appStore.fields[0]
  }

  const onChangeFields = async ({ value }: any = {}) => {
    console.log(value)
  }

  onMounted(async () => {
    await appStore.getSportCenters()
    sportCenterValue.value = appStore.sportCenters[0]
    await onChangeSportCenter({ value: appStore.fields[0] })
    isLoaded.value = true
  })
</script>
