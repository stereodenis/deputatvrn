import { LocationType, Parties, Person, CandidateStatuses } from '../../types'

const dem: Person[] = [
  {
    alias: 'petrosyan_alik',
    name: 'Петросян Алик Эдикович',
    birthdate: '09.12.1993',
    candidate: [
      {
        party: Parties.dem,
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 12,
        status: CandidateStatuses.declined,
      },
    ],
  },
]

export default dem
