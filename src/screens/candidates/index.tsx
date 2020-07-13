import React, { memo } from 'react'
import { Container } from 'react-bootstrap'

import candidats from '../../data/candidats'
import { Candidat } from '../../components'

export default memo(() => {
  return (
    <Container fluid>
      {Object.keys(candidats).map((areaNumber) => {
        const areaCandidats = candidats[areaNumber]
        return (
          <div key={areaNumber} className='border-bottom'>
            <h3>{areaNumber} округ</h3>
            <div>
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
