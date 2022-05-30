interface SportCenter {
  id?: number
}

interface Field {
  id?: number
}

interface SessionPayload {
  sessionTypeId: number
  fieldId: number
  localActualStartedAtAfter: string
  localActualStartedAtBefore: string
  localActualStartedAtOrder: string
}

export { SportCenter, Field, SessionPayload }
