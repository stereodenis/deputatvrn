import React, { memo } from 'react'
import { Image } from 'react-bootstrap'

import { Candidate } from '../../types'

export default memo(({ candidate }: Props) => {
  return (
    <div>
      {candidate.photo && <Image width='100%' src={candidate.photo} rounded />}

      <div>{candidate.name}</div>
      {candidate.telegram && (
        <a href={`http://t.me/${candidate.telegram}`} className='d-block' target='_blank' rel='noopener noreferrer'>
          telegram: @{candidate.telegram}
        </a>
      )}
      {candidate.party && <div>{candidate.party}</div>}
      {candidate.role && <div>{candidate.role}</div>}
      {candidate.project && <div>{candidate.project}</div>}
    </div>
  )
})

interface Props {
  candidate: Candidate
}
