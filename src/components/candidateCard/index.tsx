import React, { memo } from 'react'
import { Image } from 'react-bootstrap'

import { getCurrentCandidate } from '../../helpers'
import { Person } from '../../types'
import CandidateStatus from '../CandidateStatus'

export default memo(({ person, withParty }: Props) => {
  return (
    <div>
      {person.photo && <Image width='100%' src={person.photo} rounded />}

      <div>{person.name}</div>
      {withParty && (
        <div>
          <i>{getCurrentCandidate(person)?.party || 'Самовыдвиженец'}</i>
        </div>
      )}
      <>
        <CandidateStatus status={getCurrentCandidate(person)?.status} />
      </>
    </div>
  )
})

interface Props {
  person: Person
  withParty?: boolean
}
