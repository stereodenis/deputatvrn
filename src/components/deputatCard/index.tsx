import React, { memo } from 'react'
import { Image } from 'react-bootstrap'

import { Deputat } from '../../types'

export default memo(({ deputat, areaNumber }: Props) => {
  return (
    <div className=''>
      <Image width={'100%'} className='mr-3' src={deputat.photo} alt={`фото депутата ${deputat.name}`} />
      <div className='mt-2'>
        <div className=''>{deputat.name}</div>
        <div className='mt-1'>Округ № {areaNumber}</div>
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
  deputat: Deputat
  areaNumber: string
}
