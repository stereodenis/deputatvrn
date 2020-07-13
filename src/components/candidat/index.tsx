import React, { memo } from 'react'
import { Image } from 'react-bootstrap'

import { Candidat } from '../../types'

export default memo(({ candidat }: Props) => {
  return (
    <div key={candidat.name}>
      {candidat.photo && (
        <div>
          <Image width={200} src={candidat.photo} rounded />
        </div>
      )}

      <div>{candidat.name}</div>
      {candidat.telegram && (
        <a href={`http://t.me/${candidat.telegram}`} className='d-block' target='_blank' rel='noopener noreferrer'>
          telegram: @{candidat.telegram}
        </a>
      )}
      {candidat.party && <div>От партии: {candidat.party}</div>}
      {candidat.role && <div>Должность: {candidat.role}</div>}
      {candidat.project && <div>Движение/Сообщество: {candidat.project}</div>}
      {candidat.links && candidat.links.length > 0 && (
        <div>
          <h5>Ссылки:</h5>
          <div>
            {candidat.links.map((link) => (
              <a key={link.url} href={link.url} rel='noopener noreferrer' target='_blank'>
                {link.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
})

interface Props {
  candidat: Candidat
}
