import { defineStore } from 'pinia'
import useAxios from '@/composables/useAxios'
import { Field, SportCenter } from '@/types'

interface AppStore {
  sportCenters: SportCenter[]
  fields: Field[]
}

const { axiosInstance } = useAxios()

export default defineStore({
  id: 'app',
  state: () =>
    ({
      sportCenters: [],
      fields: [],
    } as AppStore),
  actions: {
    async getSportCenters() {
      try {
        const { data } = await axiosInstance().get('/sport_centers?tags.reference=powerleague')

        this.$patch({
          sportCenters: data['hydra:member'],
        })
      } catch (e: any) {
        // ...
      }
    },
    async getFields(sportCenterId: number | undefined) {
      try {
        const { data } = await axiosInstance().get(`/fields?sportCenter.id=${sportCenterId}`)

        this.$patch({
          sportCenters: data['hydra:member'],
        })
      } catch (e: any) {
        // ...
      }
    },
  },
})
