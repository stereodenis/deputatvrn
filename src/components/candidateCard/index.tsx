import React, { memo } from 'react'
import { Image } from 'react-bootstrap'

import { getCurrentCandidate } from '../../helpers'
import { noPhoto } from '../../images/candidates'
import { Person, LocationType } from '../../types'
import CandidateStatus from '../CandidateStatus'

export default memo(({ person, type, withParty }: Props) => {
  return (
    <div>
      {<Image width='100%' src={person.photo || noPhoto} rounded />}

      <div>{person.name}</div>
      {withParty && (
        <div>
          <i>{getCurrentCandidate(person, type)?.party || 'Самовыдвиженец'}</i>
        </div>
      )}
      <>
        <CandidateStatus status={getCurrentCandidate(person, type)?.status} />
      </>
    </div>
  )
})

interface Props {
  person: Person
  type: keyof typeof LocationType
  withParty?: boolean
}
