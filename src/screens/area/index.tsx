import React, { memo } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

import candidats from '../../data/candidats'
import { deputats } from '../../data/deputats'
import { Candidat } from '../../types'

export default memo(() => {
  const { areaNumber } = useParams()
  const deputat = deputats[areaNumber]
  const areaCandidats: Candidat[] = candidats[areaNumber]

  const { website, phones } = deputat

  return (
    <Container fluid>
      <h1>{areaNumber} округ</h1>
      <h2>Текущий депутат</h2>
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
      <h2>Список кандидатов в депутаты</h2>
      {areaCandidats.map((candidat) => {
        return (
          <div key={candidat.name}>
            {candidat.name}{' '}
            {candidat.telegram && (
              <a href={`http://t.me/${candidat.telegram}`} target='_blank' rel='noopener noreferrer'>
                telegram: @{candidat.telegram}
              </a>
            )}
          </div>
        )
      })}
    </Container>
  )
})
