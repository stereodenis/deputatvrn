import React, { memo } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

import candidats from '../../data/candidats'
import { deputats } from '../../data/deputats'
import { Deputat, Candidat } from '../../components'

export default memo(() => {
  const { areaNumber } = useParams()
  const deputat = deputats[areaNumber]
  const areaCandidats = candidats[areaNumber]

  return (
    <Container fluid>
      <h1>{areaNumber} округ</h1>
      <h2>Текущий депутат</h2>
      <Deputat {...{ deputat, areaNumber }} />
      <h2>Список кандидатов в депутаты</h2>
      {areaCandidats.map((candidat) => (
        <Candidat key={candidat.name} {...{ candidat }} />
      ))}
    </Container>
  )
})
