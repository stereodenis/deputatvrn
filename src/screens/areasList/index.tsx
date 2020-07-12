import React, { memo } from 'react'
import { NavLink } from 'react-bootstrap'

import { deputats } from '../../deputats_data'

export default memo(() => {
  return (
    <div className='d-flex flex-wrap'>
      {Object.keys(deputats).map((areaNumber) => {
        return (
          <NavLink href={`/area/${areaNumber}`} key={areaNumber} className='text-center'>
            <div>{areaNumber}</div>
            округ
          </NavLink>
        )
      })}
    </div>
  )
})
