import { CandidateStatuses, LocationType, Parties, Person } from '../../types'

const rosta: Person[] = [
  {
    alias: 'eliseev_ivan',
    name: 'Елисеев Иван Александрович',
    birthdate: '29.06.1985',

    candidate: [
      {
        party: Parties.rosta,
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 8,
        status: CandidateStatuses.declined,
      },
    ],
  },
  {
    alias: 'lyutikova_marina',
    name: 'Лютикова Марина Владимировна',
    birthdate: '05.08.1962',

    candidate: [
      {
        party: Parties.rosta,
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 4,
        status: CandidateStatuses.declined,
      },
    ],
  },
]

export default rosta
