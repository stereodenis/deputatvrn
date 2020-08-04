import { CURRENT_CITY_CALL_NUMBER, CURRENT_REGION_CALL_NUMBER } from './constants'
import persons from './data/persons'
import { LocationType, Parties, Person } from './types'

/**
 * Возвращает текущего кандидата для Person
 * @param person – объект Person
 */
export const getCurrentCandidate = (person: Person, locationType: keyof typeof LocationType) => {
  const currentCallNumber =
    locationType === Object.keys(LocationType)[0] ? CURRENT_CITY_CALL_NUMBER : CURRENT_REGION_CALL_NUMBER
  return person?.candidate.find((c) => c.callNumber === currentCallNumber + 1)
}

/**
 * Возвращает Person, которая является текущим депутатом в округе
 * @param areaNumber - номер избирательного округа
 */
export const getPersonWithCurrentDeputat = (areaNumber: number, locationType: keyof typeof LocationType) => {
  const currentCallNumber = locationType === 'city' ? CURRENT_CITY_CALL_NUMBER : CURRENT_REGION_CALL_NUMBER
  return persons.find((person) =>
    person.candidate.find(
      (candidate) =>
        candidate.deputat &&
        candidate.callNumber === currentCallNumber &&
        candidate.areaNumber === areaNumber &&
        candidate.locationType === LocationType[locationType]
    )
  )
}
/* Кандидаты в депутаты нового созыва */
// export const currentPersons = persons.filter(getCurrentCandidate)

/**
 * Возвращает текущих кандидатов для округа
 * @param areaNumber - номер избирательного округа
 */
export const getAreaCandidates = (areaNumber: number, locationType: keyof typeof LocationType) => {
  const currentCallNumber =
    locationType === Object.keys(LocationType)[0] ? CURRENT_CITY_CALL_NUMBER : CURRENT_REGION_CALL_NUMBER
  return persons.filter((p) =>
    p.candidate.find((c) => c.callNumber === currentCallNumber + 1 && c.areaNumber === areaNumber)
  )
}
/**
 * Возвращает текущих кандидатов партии
 * @param partyAlias – alias партии из enum Parties
 */
export const getPartyCandidates = (partyAlias: keyof typeof Parties, locationType: keyof typeof LocationType) => {
  return persons.filter((p) => getCurrentCandidate(p, locationType)?.party === Parties[partyAlias])
}
