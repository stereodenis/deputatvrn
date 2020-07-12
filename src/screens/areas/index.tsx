import React, { memo } from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'

import AreasList from '../areasList'
import Area from '../area'

export default memo(() => {
  const { path } = useRouteMatch()

  return (
    <Switch>
      <Route exact path={path} component={AreasList} />
      <Route path={`${path}/:areaNumber`} component={Area} />
    </Switch>
  )
})
