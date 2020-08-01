import React, { memo } from 'react'
import { Image } from 'react-bootstrap'

import { CURRENT_CALL_NUMBER } from '../../constants'
import { Person } from '../../types'

export default memo(({ candidate }: Props) => {
  const deputat = candidate?.deputat?.find((d) => d.callNumber === CURRENT_CALL_NUMBER)

  if (!candidate || !deputat) {
    return null
  }

  return (
    <div className=''>
      <Image width={'100%'} className='mr-3' src={candidate.photo} alt={`фото депутата ${candidate.name}`} />
      <div className='mt-2'>
        <div className=''>{candidate.name}</div>
        <div className='mt-1'>Округ № {deputat.areaNumber}</div>
        <div className='mt-1'>Адрес приёмной:</div>
        <div>{deputat.office}</div>
        <div className='mt-1'>Телефон приёмной:</div>
        <div>
          {deputat.phones.map((phone) => {
            return (
              <a key={phone} href={`tel:${phone}`}>
                {phone}
              </a>
            )
          })}
        </div>
        <a className='d-block mt-1' href={deputat.website} target='_blank' rel='noopener noreferrer'>
          Перейти на сайт депутата
        </a>
      </div>
    </div>
  )
})

interface Props {
  candidate?: Person
}
