import React, { memo } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

import { deputats } from '../../deputats_data'

export default memo(() => {
  const { areaNumber } = useParams()
  const deputat = deputats[areaNumber]

  const { website, phones } = deputat

  return (
    <Container fluid>
      <div className='d-flex flex-row align-items-start mt-2'>
        <img className='mr-3' src={deputat.photo} alt={`фото депутата ${deputat.name}`} />
        <div>
          <div className=''>{deputat.name}</div>
          <div className='mt-1'>Округ № {areaNumber}</div>
          <div className='mt-1'>Адрес приёмной:</div>
          <div>{deputat.office}</div>
          <div className='mt-1'>Телефон приёмной:</div>
          <div>
            {phones.map((phone) => {
              return (
                <a key={phone} href={`tel:${phone}`}>
                  {phone}
                </a>
              )
            })}
          </div>
          <a className='d-block mt-1' href={website} target='_blank' rel='noopener noreferrer'>
            Перейти на сайт депутата
          </a>
        </div>
      </div>
    </Container>
  )
})
