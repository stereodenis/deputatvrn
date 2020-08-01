import { Person } from '../types'

import er from './candidates/er'
import ldpr from './candidates/ldpr'
import newPeople from './candidates/new_people'
import noParty from './candidates/no_party'
import rodina from './candidates/rodina'
import sr from './candidates/sr'
import yabloko from './candidates/yabloko'
import zaPravdu from './candidates/za_pravdu'
import kprf from './candidates/kprf'

const persons: Person[] = [...noParty, ...kprf, ...rodina, ...newPeople, ...ldpr, ...sr, ...zaPravdu, ...er, ...yabloko]
export default persons
