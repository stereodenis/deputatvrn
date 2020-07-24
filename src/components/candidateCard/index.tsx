import React, { memo } from 'react'
import { Image } from 'react-bootstrap'

import { Candidate } from '../../types'

export default memo(({ candidate, withParty }: Props) => {
  return (
    <div>
      {candidate.photo && <Image width='100%' src={candidate.photo} rounded />}

      <div>{candidate.name}</div>
      {(withParty ?? true) && (
        <div>
          <i>{candidate.party || 'Самовыдвиженец'}</i>
        </div>
      )}
    </div>
  )
})

interface Props {
  candidate: Candidate
  withParty?: boolean
}
