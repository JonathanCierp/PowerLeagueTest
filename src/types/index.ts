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

interface Session {
  id?: number
}

export { SportCenter, Field, SessionPayload, Session }
