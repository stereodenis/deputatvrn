import * as photos from '../../images/candidates'
import { Person, Parties, CandidateStatuses } from '../../types'

const zaPravdu: Person[] = [
  {
    alias: 'zolototrubov_albert',
    name: 'Золототрубов Альберт Александрович',
    photo: photos.noPhoto,
    birthdate: '10.11.1988',
    candidate: [
      {
        party: Parties.zaPravdu,
        areaNumber: 12,
        callNumber: 5,
      },
    ],
  },
  {
    alias: 'perov_stanislav',
    name: 'Перов Станислав Александрович',
    photo: photos.noPhoto,
    birthdate: '21.12.1973',
    candidate: [
      {
        party: Parties.zaPravdu,
        areaNumber: 8,
        status: CandidateStatuses.declined,
        callNumber: 5,
      },
    ],
  },
]

export default zaPravdu
