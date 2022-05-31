interface SportCenter {
  id?: number
}

interface Field {
  id?: number
  name?: string
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
