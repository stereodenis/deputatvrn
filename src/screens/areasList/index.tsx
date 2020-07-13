import React, { memo } from 'react'
import { NavLink, Col } from 'react-bootstrap'

import deputats from '../../data/deputats'

export default memo(() => {
  return (
    <div className='d-flex flex-wrap'>
      {Object.keys(deputats).map((areaNumber) => {
        return (
          <Col xs={12} lg={1} key={areaNumber}>
            <NavLink href={`/area/${areaNumber}`} className='text-center'>
              <div>{areaNumber}</div>
              округ
            </NavLink>
          </Col>
        )
      })}
    </div>
  )
})
