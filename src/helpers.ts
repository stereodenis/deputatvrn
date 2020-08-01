import { CURRENT_CALL_NUMBER } from './constants'
import { Person } from './types'

export const getCurrentCandidate = (p?: Person) => {
  if (!p) {
    return undefined
  }
  return p.candidate.find((c) => c.callNumber === CURRENT_CALL_NUMBER + 1)
}
