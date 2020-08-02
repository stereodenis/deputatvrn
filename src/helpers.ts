import { CURRENT_CALL_NUMBER } from './constants'
import persons from './data/persons'
import { Parties, Person } from './types'

/**
 * Возвращает текущего кандидата для Person
 * @param person – объект Person
 */
export const getCurrentCandidate = (person?: Person) =>
  person?.candidate.find((c) => c.callNumber === CURRENT_CALL_NUMBER + 1)

/**
 * Возвращает Person, которая является текущим депутатом в округе
 * @param areaNumber - номер избирательного округа
 */
export const getPersonWithCurrentDeputat = (areaNumber: number) =>
  persons.find((person) =>
    person.candidate.find(
      (candidate) =>
        candidate.deputat && candidate.callNumber === CURRENT_CALL_NUMBER && candidate.areaNumber === areaNumber
    )
  )

/* Кандидаты в депутаты нового созыва */
export const currentPersons = persons.filter(getCurrentCandidate)

/**
 * Возвращает текущих кандидатов для округа
 * @param areaNumber - номер избирательного округа
 */
export const getAreaCandidates = (areaNumber: number) =>
  currentPersons.filter((p) =>
    p.candidate.find((c) => c.areaNumber === areaNumber && c.callNumber === CURRENT_CALL_NUMBER + 1)
  )

/**
 * Возвращает текущих кандидатов партии
 * @param partyAlias – alias партии из enum Parties
 */
export const getPartyCandidates = (partyAlias: keyof typeof Parties) =>
  currentPersons.filter((p) => getCurrentCandidate(p)?.party === Parties[partyAlias])
