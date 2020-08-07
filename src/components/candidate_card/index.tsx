import React, { memo } from 'react'
import { Image } from 'react-bootstrap'

import { getCurrentCandidate } from '../../helpers'
import { noPhoto } from '../../images/candidates'
import { Person, LocationType } from '../../types'
import CandidateStatus from '../candidate_status'

export default memo(({ person, locationType, withParty }: Props) => {
  return (
    <div>
      {<Image width='100%' src={person.photo || noPhoto} rounded />}

      <div>{person.name}</div>
      {withParty && (
        <div>
          <i>{getCurrentCandidate(person, locationType)?.party || 'Самовыдвиженец'}</i>
        </div>
      )}
      <>
        <CandidateStatus status={getCurrentCandidate(person, locationType)?.status} />
      </>
    </div>
  )
})

interface Props {
  person: Person
  locationType: keyof typeof LocationType
  withParty?: boolean
}
