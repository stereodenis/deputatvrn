import React, { memo } from 'react'
import { Image } from 'react-bootstrap'

import { Candidate } from '../../types'
import CandidateStatus from '../CandidateStatus'

export default memo(({ candidate, withParty }: Props) => {
  return (
    <div>
      {candidate.photo && <Image width='100%' src={candidate.photo} rounded />}

      <div>{candidate.name}</div>
      {withParty && (
        <div>
          <i>{candidate.party || 'Самовыдвиженец'}</i>
        </div>
      )}
      <>
        <CandidateStatus status={candidate.status} />
      </>
    </div>
  )
})

interface Props {
  candidate: Candidate
  withParty?: boolean
}
