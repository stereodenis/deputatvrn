import React, { memo } from 'react'
import { Image } from 'react-bootstrap'

import { getCurrentCandidates } from '../../helpers'
import { noPhoto } from '../../images/candidates'
import { Person, LocationType } from '../../types'
import CandidateStatus from '../candidate_status'

export default memo(({ person, locationType, withParty }: Props) => {
  return (
    <div>
      {<Image width='100%' src={person.photo || noPhoto} rounded />}

      <div>{person.name}</div>
      {withParty &&
        getCurrentCandidates(person, locationType).map((c, index) => (
          <div key={index}>
            <i>{c.party || 'Самовыдвиженец'}</i>
            <CandidateStatus status={c.status} />
          </div>
        ))}
      <></>
    </div>
  )
})

interface Props {
  person: Person
  locationType: keyof typeof LocationType
  withParty?: boolean
}
