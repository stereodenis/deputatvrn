import { CURRENT_CITY_CALL_NUMBER, CURRENT_REGION_CALL_NUMBER } from './constants'
import persons from './data/persons'
import { Candidate, LocationType, Parties, Person } from './types'

export function youtube_parser(url: string) {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
  const match = url.match(regExp)
  return match && match[7].length === 11 ? match[7] : false
}

export function isCurrentCallNumber(candidate: Candidate) {
  return (
    candidate.callNumber ===
    (candidate.locationType === LocationType.city ? CURRENT_CITY_CALL_NUMBER + 1 : CURRENT_REGION_CALL_NUMBER + 1)
  )
}

export function locationTypeFromName(locationName: LocationType) {
  return locationName === LocationType.city ? 'city' : 'region'
}

/**
 * Возвращает текущего кандидата для Person
 * @param person – объект Person
 */
export const getCurrentCandidate = (person: Person, locationType: keyof typeof LocationType) => {
  const currentCallNumber =
    locationType === Object.keys(LocationType)[0] ? CURRENT_CITY_CALL_NUMBER : CURRENT_REGION_CALL_NUMBER
  return person?.candidate.find((c) => c.callNumber === currentCallNumber + 1)
}

export const getCurrentDeputate = (person: Person, locationType: keyof typeof LocationType) => {
  const currentCallNumber =
    locationType === Object.keys(LocationType)[0] ? CURRENT_CITY_CALL_NUMBER : CURRENT_REGION_CALL_NUMBER
  return person?.candidate.find((c) => c.deputat && c.callNumber === currentCallNumber)
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
 * Возвращает текущих депутатов для округа
 * @param areaNumber - номер избирательного округа
 */
export const getAreaDeputates = (areaNumber: number, locationType: keyof typeof LocationType) => {
  const currentCallNumber =
    locationType === Object.keys(LocationType)[0] ? CURRENT_CITY_CALL_NUMBER : CURRENT_REGION_CALL_NUMBER
  return persons.filter((p) =>
    p.candidate.find((c) => c.deputat && c.callNumber === currentCallNumber && c.areaNumber === areaNumber)
  )
}
/**
 * Возвращает текущих кандидатов партии
 * @param partyAlias – alias партии из enum Parties
 */
export const getPartyCandidates = (partyAlias: keyof typeof Parties, locationType: keyof typeof LocationType) => {
  return persons.filter((p) => getCurrentCandidate(p, locationType)?.party === Parties[partyAlias])
}
