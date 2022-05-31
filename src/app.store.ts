import { defineStore } from 'pinia'
import useAxios from '@/composables/useAxios'
import { Field, Session, SportCenter } from '@/types'

interface AppStore {
  sportCenters: SportCenter[]
  fields: Field[]
  sessions: Session[]
  session: Session
}

const { axiosInstance } = useAxios()

export default defineStore({
  id: 'app',
  state: () =>
    ({
      sportCenters: [],
      fields: [],
      sessions: [],
      session: {},
    } as AppStore),
  actions: {
    async getSportCenters() {
      try {
        // const { data } = await axiosInstance().get('/sport_centers?tags.reference=powerleague')
        const { data } = await axiosInstance().get('/sport_centers')

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
          fields: data['hydra:member'],
        })
      } catch (e: any) {
        // ...
      }
    },
    // async getSessions(payload: SessionPayload) {
    //   try {
    //     const { data } = await axiosInstance().get(`/fields?sportCenter.id=${sportCenterId}`)

    //     this.$patch({
    //       sportCenters: data['hydra:member'],
    //     })
    //   } catch (e: any) {
    //     // ...
    //   }
    // },
    async getSessionBySessionId(sessionId: string | string[]) {
      try {
        const { data } = await axiosInstance().get(`/ngtv_sessions/${sessionId}`)

        this.$patch({
          session: data,
        })
      } catch (e: any) {
        // ...
      }
    },
  },
})
