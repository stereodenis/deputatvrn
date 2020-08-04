import { CandidateStatuses, LocationType, Parties, Person } from '../../types'

const zaPravdu: Person[] = [
  {
    alias: 'zolototrubov_albert',
    name: 'Золототрубов Альберт Александрович',
    birthdate: '10.11.1988',
    candidate: [
      {
        party: Parties.zaPravdu,
        areaNumber: 12,
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'perov_stanislav',
    name: 'Перов Станислав Александрович',
    birthdate: '21.12.1973',
    candidate: [
      {
        party: Parties.zaPravdu,
        areaNumber: 8,
        status: CandidateStatuses.declined,
        callNumber: 5,
        locationType: LocationType.city,
      },
    ],
  },
  {
    alias: 'sofrina_olga',
    name: 'Софрина Ольга Юрьевна',
    birthdate: '16.01.1982',
    candidate: [{ party: Parties.zaPravdu, callNumber: 7, areaNumber: 25, locationType: LocationType.region }],
  },
]

export default zaPravdu
