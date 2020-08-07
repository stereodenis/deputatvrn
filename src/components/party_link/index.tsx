import React, { memo, useMemo } from 'react'
import { Link } from 'react-router-dom'

import { LocationType, Parties } from '../../types'
import { locationTypeFromName } from '../../helpers'

export default memo(({ party, locationName }: Props) => {
  const locationType = locationTypeFromName(locationName)
  const partyEntry = useMemo(
    () => Object.entries(Parties).find((e) => e[1] === party) || ['noParty', 'Самовыдвиженец'],
    [party]
  )

  return (
    <Link className='' to={`/${locationType}/parties/${partyEntry[0]}`}>
      {partyEntry[1]}
    </Link>
  )
})

interface Props {
  party?: Parties
  locationName: LocationType
}
