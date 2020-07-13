import React, { memo } from 'react'
import { Image } from 'react-bootstrap'

import { Candidat } from '../../types'

export default memo(({ candidat }: Props) => {
  return (
    <div key={candidat.name} style={{ width: 300 }}>
      {candidat.photo && (
        <div>
          <Image height={200} src={candidat.photo} rounded />
        </div>
      )}

      <div>{candidat.name}</div>
      {candidat.telegram && (
        <a href={`http://t.me/${candidat.telegram}`} className='d-block' target='_blank' rel='noopener noreferrer'>
          telegram: @{candidat.telegram}
        </a>
      )}
      {candidat.party && <div>{candidat.party}</div>}
      {candidat.role && <div>{candidat.role}</div>}
      {candidat.project && <div>{candidat.project}</div>}
      {candidat.links && candidat.links.length > 0 && (
        <div>
          <h6>Ссылки:</h6>
          <div>
            {candidat.links.map((link) => (
              <a key={link.url} href={link.url} className='d-block' rel='noopener noreferrer' target='_blank'>
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
