import { Person } from '../types'

import er from './candidates/er'
import kpkr from './candidates/kpkr'
import kprf from './candidates/kprf'
import ldpr from './candidates/ldpr'
import newPeople from './candidates/new_people'
import noParty from './candidates/no_party'
import rodina from './candidates/rodina'
import rosta from './candidates/rosta'
import sr from './candidates/sr'
import yabloko from './candidates/yabloko'
import zaPravdu from './candidates/za_pravdu'
import zaSprav from './candidates/za_sprav'
import dem from './candidates/dem'

const persons: Person[] = [
  ...noParty,
  ...kprf,
  ...rodina,
  ...newPeople,
  ...ldpr,
  ...sr,
  ...zaPravdu,
  ...er,
  ...yabloko,
  ...rosta,
  ...zaSprav,
  ...dem,
  ...kpkr,
]

export default persons
