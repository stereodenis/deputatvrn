import React, { memo } from 'react'
import { Image } from 'react-bootstrap'

import { noPhoto } from '../../images/candidates'
import { LocationType, Candidate } from '../../types'
import CandidateStatus from '../candidate_status'

export default memo(({ name, photo, candidate, locationType, withParty }: Props) => {
  return (
    <div>
      {<Image width='100%' src={photo || noPhoto} rounded />}

      <div>{name}</div>
      {withParty && (
        <div>
          <i className='mr-1'>{candidate.party || 'Самовыдвиженец'}</i>
        </div>
      )}
      <div>
        <CandidateStatus status={candidate.status} isList={!!candidate.listNumber} />
      </div>
    </div>
  )
})

interface Props {
  name: string
  photo?: string
  locationType: keyof typeof LocationType
  withParty?: boolean
  candidate: Candidate
}
