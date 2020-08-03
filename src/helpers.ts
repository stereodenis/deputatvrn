import { CURRENT_CITY_CALL_NUMBER, CURRENT_REGION_CALL_NUMBER } from './constants'
import persons from './data/persons'
import { CandidateType, Parties, Person } from './types'

/**
 * Возвращает текущего кандидата для Person
 * @param person – объект Person
 */
export const getCurrentCandidate = (person: Person, type: keyof typeof CandidateType) => {
  const currentCallNumber =
    type === Object.keys(CandidateType)[0] ? CURRENT_CITY_CALL_NUMBER : CURRENT_REGION_CALL_NUMBER
  return person?.candidate.find((c) => c.callNumber === currentCallNumber + 1)
}

/**
 * Возвращает Person, которая является текущим депутатом в округе
 * @param areaNumber - номер избирательного округа
 */
export const getPersonWithCurrentDeputat = (areaNumber: number) =>
  persons.find((person) =>
    person.candidate.find(
      (candidate) =>
        candidate.deputat && candidate.callNumber === CURRENT_CITY_CALL_NUMBER && candidate.areaNumber === areaNumber
    )
  )

/* Кандидаты в депутаты нового созыва */
// export const currentPersons = persons.filter(getCurrentCandidate)

/**
 * Возвращает текущих кандидатов для округа
 * @param areaNumber - номер избирательного округа
 */
export const getAreaCandidates = (areaNumber: number, type: keyof typeof CandidateType) => {
  const currentCallNumber =
    type === Object.keys(CandidateType)[0] ? CURRENT_CITY_CALL_NUMBER : CURRENT_REGION_CALL_NUMBER
  return persons.filter((p) =>
    p.candidate.find((c) => c.callNumber === currentCallNumber + 1 && c.areaNumber === areaNumber)
  )
}
/**
 * Возвращает текущих кандидатов партии
 * @param partyAlias – alias партии из enum Parties
 */
export const getPartyCandidates = (partyAlias: keyof typeof Parties, type: keyof typeof CandidateType) => {
  return persons.filter((p) => getCurrentCandidate(p, type)?.party === Parties[partyAlias])
}
