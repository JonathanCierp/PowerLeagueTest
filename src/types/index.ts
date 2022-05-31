interface SportCenter {
  id?: number
  name?: string
}

interface Field {
  id?: number
  name?: string
  sportCenter?: SportCenter
}

interface SessionPayload {
  sessionTypeId: number
  fieldId: number
  localActualStartedAtAfter: string
  localActualStartedAtBefore: string
  localActualStartedAtOrder: string
}

interface Session {
  id?: number
  name: string
  localActualStartedAt: Date | number
  ngtvSessionHomeTeam: {
    color: string
    fullScore: number[]
  }
  ngtvSessionAwayTeam: {
    color: string
    fullScore: number[]
  }
  videoSources?: string[]
  field: Field
}

interface FilterSessionPayload {
  'ngtvSessionType.id': number
  'field.id': number | undefined
  'localActualStartedAt[after]': Date | string
  'localActualStartedAt[before]': Date | string
  'order[localActualStartedAt]': string
}

export { SportCenter, Field, SessionPayload, Session, FilterSessionPayload }
