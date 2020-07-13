import React, { memo } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import candidats from '../../data/candidats'
import { Candidat } from '../../components'

export default memo(() => {
  return (
    <Container fluid>
      {Object.keys(candidats).map((areaNumber) => {
        const areaCandidats = candidats[areaNumber]
        return (
          <div key={areaNumber} className='border-bottom py-3'>
            <h3>
              <Link to={`/area/${areaNumber}`}>{areaNumber} округ</Link>
            </h3>
            <div className='d-flex flex-wrap flex-row'>
              {areaCandidats.length > 0 ? (
                areaCandidats.map((candidat) => <Candidat key={candidat.name} {...{ candidat }} />)
              ) : (
                <div>
                  Мы пока не знаем о кандидатах на этот округ. Напишите нам пожалуйста (telegram:{' '}
                  <a href='http://t.me/stereodenis' target='_blank' rel='noopener noreferrer'>
                    @stereodenis
                  </a>
                  )
                </div>
              )}
            </div>
          </div>
        )
      })}
    </Container>
  )
})
