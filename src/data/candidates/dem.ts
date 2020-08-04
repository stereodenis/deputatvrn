import { LocationType, Parties, Person } from '../../types'

const dem: Person[] = [
  {
    alias: 'Petrosyan Alik',
    name: 'Петросян Алик Эдикович',
    birthdate: '09.12.1993',
    candidate: [{ party: Parties.dem, locationType: LocationType.region, callNumber: 7, areaNumber: 12 }],
  },
]

export default dem
