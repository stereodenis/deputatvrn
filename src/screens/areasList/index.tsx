import React, { memo } from 'react'
import {NavLink, Col} from 'react-bootstrap'

import deputats from '../../data/deputats'
import {Link} from "react-router-dom";

export default memo(() => {
  return (
    <div className='d-flex flex-wrap'>
      {Object.keys(deputats).map((areaNumber) => {
        return (
          <Col xs={12} lg={1} key={areaNumber}>
            <NavLink as={Link} to={`/area/${areaNumber}`} className='text-center'>
              <div>{areaNumber}</div>
              округ
            </NavLink>
          </Col>
        )
      })}
    </div>
  )
})
