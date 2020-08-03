import { CandidateType, Parties, Person } from '../../types'

const zaSprav: Person[] = [
  {
    alias: 'vardanyan_norik',
    name: 'Варданян Норик Арташесович',
    birthdate: '08.07.1985',
    candidate: [{ party: Parties.zaSprav, type: CandidateType.region, callNumber: 7, areaNumber: 12 }],
  },
]

export default zaSprav
