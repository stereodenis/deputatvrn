import React, { memo } from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'

import Candidats from '../candidates'

export default memo(() => {
  const { path } = useRouteMatch()

  return (
    <Switch>
      <Route exact path={path} component={Candidats} />
      {/*<Route path={`${path}/:areaNumber`} component={Area} />*/}
    </Switch>
  )
})
