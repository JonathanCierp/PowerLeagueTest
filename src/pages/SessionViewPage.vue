<template>
  <main v-if="isLoaded" class="flex items-center justify-center p-4 gap-4">
    <BaseCard width="800px">
      <template #header>
        <h3 class="p-4 text-center text-2xl font-bold">{{ appStore.session.name }}</h3>
      </template>
      <template #content>
        <div class="flex flex-col gap-6">
          <div class="flex items-center justify-between">
            <div>
              <p>
                <span class="font-bold">Centre :</span>
                {{ appStore.session.field.name }}
              </p>
              <p>
                <span class="font-bold">Terrain :</span>
                {{ appStore.session.field.sportCenter.name }}
              </p>
            </div>
            <div>
              <p>
                <span class="font-bold">Date :</span>
                {{ $d(appStore.session.localActualStartedAt, 'shortDate') }}
              </p>
              <p>
                <span class="font-bold">Heure de début :</span>
                {{ $d(appStore.session.localActualStartedAt, 'shortTime') }}
              </p>
            </div>
          </div>
          <div class="flex items-center justify-center text-3xl font-bold gap-4">
            <BaseIconShield
              width="40"
              height="40"
              :primary-color="appStore.session.ngtvSessionHomeTeam.color"
              :secondary-color="appStore.session.ngtvSessionHomeTeam.color"
            />
            {{ appStore.session.ngtvSessionHomeTeam.fullScore[0] }} - {{ appStore.session.ngtvSessionAwayTeam.fullScore[0] }}
            <BaseIconShield
              width="40"
              height="40"
              :primary-color="appStore.session.ngtvSessionAwayTeam.color"
              :secondary-color="appStore.session.ngtvSessionAwayTeam.color"
            />
          </div>
          <video class="w-full" controls preload="none">
            <source :src="appStore.session.videoSources[0]" />
          </video>
          <div class="flex items-center gap-4">
            <h4 class="text-lg font-bold">Cameras :</h4>
            <div
              class="cursor-pointer select-none transition-colors duration-200 flex items-center justify-center text-lg font-bold w-12 h-12 hover:bg-green-600 hover:text-white"
              :class="[currentCamera === 0 ? 'text-white bg-green-500' : '']"
              @click="currentCamera = 0"
            >
              1
            </div>
            <div
              class="cursor-pointer select-none transition-colors duration-200 flex items-center justify-center text-lg font-bold w-12 h-12 hover:bg-green-600 hover:text-white"
              :class="[currentCamera === 1 ? 'text-white bg-green-500' : '']"
              @click="currentCamera = 1"
            >
              2
            </div>
            <div
              class="cursor-pointer select-none transition-colors duration-200 flex items-center justify-center text-lg font-bold w-12 h-12 hover:bg-green-600 hover:text-white"
              :class="[currentCamera === 2 ? 'text-white bg-green-500' : '']"
              @click="currentCamera = 2"
            >
              3
            </div>
          </div>
        </div>
      </template>
    </BaseCard>
    <BaseCard class="self-start" width="400px">
      <template #content> daz </template>
    </BaseCard>
  </main>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import useAppStore from '@/app.store'
  import { useRoute } from 'vue-router'

  const route = useRoute()
  const appStore = useAppStore()

  const isLoaded = ref<boolean>(false)
  const currentCamera = ref<number>(0)

  onMounted(async () => {
    await appStore.getSessionBySessionId(route.params.id)
    isLoaded.value = true
  })
</script>
