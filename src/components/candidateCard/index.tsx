import React, { memo } from 'react'
import { Image } from 'react-bootstrap'

import { Candidate } from '../../types'

export default memo(({ candidate }: Props) => {
  return (
    <div>
      {candidate.photo && <Image width='100%' src={candidate.photo} rounded />}

      <div>{candidate.name}</div>
      {candidate.party && <div>{candidate.party}</div>}
    </div>
  )
})

interface Props {
  candidate: Candidate
}
