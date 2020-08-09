import { LocationType, Parties, Person, CandidateStatuses } from '../../types'

const zaSprav: Person[] = [
  {
    alias: 'vardanyan_norik',
    name: 'Варданян Норик Арташесович',
    birthdate: '08.07.1985',
    candidate: [
      {
        party: Parties.zaSprav,
        locationType: LocationType.region,
        callNumber: 7,
        areaNumber: 12,
        status: CandidateStatuses.declined,
      },
    ],
  },
]

export default zaSprav
