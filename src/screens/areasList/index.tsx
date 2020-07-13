import React, { memo } from 'react'
import { Col } from 'react-bootstrap'

import deputats from '../../data/deputats'
import {Link} from "react-router-dom";

export default memo(() => {
  return (
    <div className='d-flex flex-wrap'>
      {Object.keys(deputats).map((areaNumber) => {
        return (
          <Col xs={12} lg={1} key={areaNumber}>

            <Link to={`/area/${areaNumber}`} className='text-center nav-link'>
              <div>{areaNumber}</div>
              округ
            </Link>
          </Col>
        )
      })}
    </div>
  )
})
