import React, { memo, useState } from 'react'
import { Button, ButtonGroup, Col, Container, Form, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

import { DeputatCard } from '../../components'
import persons from '../../data/persons'
import { getCurrentDeputate } from '../../helpers'

export default memo(() => {
  const { locationType } = useParams()
  const [isList, setIsList] = useState(false)
  const currentPersons = persons
    .filter((p) => getCurrentDeputate(p, locationType))
    .map((p) => ({ person: p, candidate: getCurrentDeputate(p, locationType) }))
    .filter((pc) => (isList ? pc?.candidate?.listNumber : !pc?.candidate?.listNumber))

  return (
    <Container fluid>
      <h1>Депутаты ({currentPersons.length})</h1>

      <Form.Group>
        <ButtonGroup size='sm'>
          <Button active={!isList} onClick={() => setIsList(false)}>
            Одномандатники
          </Button>
          <Button active={isList} onClick={() => setIsList(true)}>
            По списку
          </Button>
        </ButtonGroup>
        {/*<Form.Check*/}
        {/*  type='checkbox'*/}
        {/*  label='Показывать только зарегистрированных'*/}
        {/*  checked={disabled}*/}
        {/*  onClick={() => setDisabled((prev) => !prev)}*/}
        {/*/>*/}
      </Form.Group>

      <Row>
        {currentPersons
          .sort(
            (apc, bpc) =>
              (getCurrentDeputate(apc.person, locationType)?.areaNumber || 0) -
              (getCurrentDeputate(bpc.person, locationType)?.areaNumber || 0)
          )
          .map((pc) => (
            <Col xs={6} md={4} lg={3} xl={2} key={pc.person.name} className='border-xs-top border-sm-none py-3'>
              <DeputatCard {...{ person: pc.person, locationType }} />
            </Col>
          ))}
      </Row>
    </Container>
  )
})
