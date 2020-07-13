import React, { memo } from 'react'

import { Candidat } from '../../types'

export default memo(({ candidat }: Props) => {
  return (
    <div key={candidat.name}>
      <div>{candidat.name}</div>
      {candidat.telegram && (
        <a href={`http://t.me/${candidat.telegram}`} className='d-block' target='_blank' rel='noopener noreferrer'>
          telegram: @{candidat.telegram}
        </a>
      )}
      {candidat.party && <div>От партии: {candidat.party}</div>}
      {candidat.role && <div>Должность: {candidat.role}</div>}
      {candidat.project && <div>Движение/Сообщество: {candidat.project}</div>}
    </div>
  )
})

interface Props {
  candidat: Candidat
}
