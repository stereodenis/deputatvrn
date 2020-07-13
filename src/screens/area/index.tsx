import React, { memo } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

import candidats from '../../data/candidats'
import deputats from '../../data/deputats'
import { Deputat, Candidat } from '../../components'
import areas from '../../data/areas'

export default memo(() => {
  const { areaNumber } = useParams()
  const area = areas[areaNumber]
  const deputat = deputats[areaNumber]
  const areaCandidats = candidats[areaNumber]

  return (
    <Container fluid>
      <h1 className='border-bottom pb-2'>{areaNumber} округ</h1>

      <div className='border-bottom pb-3'>
        <h2>Список кандидатов в депутаты</h2>
        <div className='d-flex flex-wrap flex-row'>
          {areaCandidats.map((candidat) => (
            <Candidat key={candidat.name} {...{ candidat }} />
          ))}
        </div>
      </div>

      <div className='border-bottom pb-3'>
        <h2 className='mt-3'>Текущий депутат</h2>
        <Deputat {...{ deputat, areaNumber }} />
      </div>

      {area.streets && (
        <div className='pt-3'>
          <h2>Список улиц</h2>
          <div>
            {area.streets.map((street, index) => (
              <div key={index}>{street}</div>
            ))}
          </div>
        </div>
      )}
    </Container>
  )
})
