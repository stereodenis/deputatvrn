import * as photos from '../../images/candidates'
import { Candidate, Parties, CandidateStatuses } from '../../types'

const zaPravdu: Candidate[] = [
  {
    alias: 'zolototrubov_albert',
    name: 'Золототрубов Альберт Александрович',
    photo: photos.noPhoto,
    party: Parties.zaPravdu,
    birthdate: '10.11.1988',
    areaNumber: 12,
  },
  {
    alias: 'perov_stanislav',
    name: 'Перов Станислав Александрович',
    party: Parties.zaPravdu,
    photo: photos.noPhoto,
    birthdate: '21.12.1973',
    areaNumber: 8,
    status: CandidateStatuses.declined,
  },
]

export default zaPravdu
