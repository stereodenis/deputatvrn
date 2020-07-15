import React, { memo } from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'

import AreasList from '../areasScreen'
import Area from '../areaScreen'

export default memo(() => {
  const { path } = useRouteMatch()

  return (
    <Switch>
      <Route exact path={path} component={AreasList} />
      <Route path={`${path}/:areaNumber`} component={Area} />
    </Switch>
  )
})
