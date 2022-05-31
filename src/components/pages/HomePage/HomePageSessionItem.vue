<template>
  <div class="grid grid-cols-3 p-4 items-center bg-green-100 w-full">
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
</template>

<script setup lang="ts">
  import { Session } from '@/types'

  interface HomePageSessionItemProps {
    session: Session
  }

  withDefaults(defineProps<HomePageSessionItemProps>(), {})
</script>
