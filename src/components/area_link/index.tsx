import React, { memo } from 'react'
import { Link } from 'react-router-dom'

import { locationTypeFromName } from '../../helpers'
import { LocationType } from '../../types'

export default memo(({ areaNumber, locationName }: Props) => {
  const locationType = locationTypeFromName(locationName)
  return <Link to={`/${locationType}/areas/${areaNumber}`}>{areaNumber} округ</Link>
})

interface Props {
  areaNumber: number
  locationName: LocationType
}
